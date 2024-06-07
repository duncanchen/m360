import { ActionFunctionArgs } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react"
import React from "react"
import { useUserStore } from "~/components/store"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { postData } from "~/lib/form-action"
import { getCookies, getRequestPayload } from "~/lib/request-utils"
import { clientConfig, authBaseUrl } from "~/service/client.server"

const E = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-foreground">{children}</span>
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const payload = await getRequestPayload(request)
  const [mtUserRaw] = getCookies(request, ["mt360_user"])
  const mtUser = mtUserRaw ? JSON.parse(atob(mtUserRaw)) : {}
  const stagingUserData = { ...mtUser, ...payload, ...clientConfig }
  const stagingResult = await postData(
    authBaseUrl + "/api/user/stage",
    stagingUserData,
  )
  return stagingResult
}

export default function About() {
  const { user } = useUserStore()
  const actionData = useActionData<typeof action>()
  return (
    <div className="container max-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
        <div className="">
          <div className="flex flex-col md:flex-row gap-4 bg-gray-900 rounded-md">
            <img alt="random headshot" className="w-40 p-4" src={user?.url} />
            <div className="p-4 space-y-2">
              <div className="font-sans text-2xl font-thin">
                {"// User Account"}
              </div>
              <div className="flex flex-row items-baseline gap-4">
                <div>{user?.email}</div>
                <div className="bg-red-500 inline-flex justify-center rounded-md font-xs w-[1.3rem] h-[1.4rem]">
                  ?
                </div>
              </div>
              <div>
                Name: {user?.firstName} {user?.lastName}
              </div>
              <div>Login: {user?.login}</div>
            </div>
          </div>

          <p className="leading-8 mt-4 text-foreground/50">
            In the current mt360, we do not check/confirm emails. However, in
            the upcoming Auth360, email will be a{" "}
            <E>
              major MFA authentication method, requiring confirmation. For
              simulation purposes, please specify your mTrade email or select an
              external email that is easily accessible to you.
            </E>{" "}
            During the account provisioning process, you will need to confirm
            your email address by clicking a link embedded in the registration
            email.
          </p>
        </div>
        <div className="flex flex-col space-12">
          <div className="text-2xl text-foreground">Stage User Account</div>
          <div className="text-foreground/80 leading-8">{`
          mT360 (cleanroom or /auth) can send the 
          logining user's information to the Auth360
          `}</div>
          <Form method="post">
            <Input
              className="text-foreground/80 my-4"
              type="email"
              name="email"
              placeholder="enter the real* email address"
            />
            <p className="text-green-100 italic my-4">
              {
                "* The email may be the same email we have on file in the MT360 system, but we will need the user to confirm it by entering it here."
              }
            </p>
            <Button
              name="action"
              value={"stage"}
              variant="default"
              className="w-32"
            >
              Stage
            </Button>
          </Form>
          <div className="flex flex-col space-12">
            {actionData && (
              <pre className="overflow-clip mt-4 p-4 bg-slate-600">
                {JSON.stringify(actionData, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
