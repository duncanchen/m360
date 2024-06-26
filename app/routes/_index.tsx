import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node"
import { Form, Outlet, json, redirect, useActionData } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { getFormData } from "~/lib/request-utils"
import { randomUser } from "~/lib/fake/name"
import { User } from "~/lib/dto/zuser"

export const meta: MetaFunction = () => {
  return [
    { title: "mT360" },
    { name: "description", content: "Simulate mT360 User!" },
  ]
}

const base64Json = (data: User) => {
  return Buffer.from(JSON.stringify(data)).toString("base64")
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const [passcode] = await getFormData(request, ["passcode"])
  if (
    passcode &&
    passcode.trim().replace(/\s/g, "") == process.env["passcode"]
  ) {
    const user = randomUser()

    return redirect("/about", {
      headers: {
        "Set-Cookie": `mt360_user=${base64Json(user)}; Max-Age=3600; Path=/`,
      },
    })
  } else {
    return json(
      { error: `error: remember it?` },
      {
        status: 400,
      },
    )
  }
}

export default function Index() {
  const { error } = useActionData<typeof action>() || {}
  return (
    <div className=" h-screen bg-background text-foreground p-12">
      <div className="container mx-auto space-y-4 font-mono italic tracking-wide">
        <div className="mt-40">
          <span className="purple-gradient  text-[5rem]">m</span>
          <span className="purple-gradient text-[5rem] font-extrabold tracking-wider">
            T
          </span>
          <span className="blue-gradient text-[5rem] font-extrabold ">
            {"360 "}
          </span>
          <span className="primary-gradient px-4 text-[5rem]  font-serif not-italic">
            {" MOCK "}
          </span>
        </div>
        <div className="text-2xl text-foreground60 font-mono italic">
          This application simulates how the MT360 application will enable users
          to sign in and interact with Auth360.
        </div>
        <div className="text-2xl text-foreground/60 font-mono italic">
          By clicking the {"/AUTH"} button below, you will be assigned a
          <b className="mx-2 text-foreground/80">random user ID</b> to simulate
          an existing MT360 user and automatically sign in. In practice, this
          involves visiting the
          <b className="mx-2 text-foreground/80">mortgagetrade.net/auth</b>
          site and then being redirected back to the corresponding MT360
          application.
        </div>

        <Form method="post">
          <div className="grid grid-cols-3 gap-4">
            <Input
              placeholder="enter passcode"
              name="passcode"
              className="font-mono font-straight"
            />
            <Button variant="default" className="w-32">
              {"/Auth"}
            </Button>
          </div>
          <div className="mt-4 ml-4 text-red-500">
            {error && <span>{error}</span>}
          </div>
        </Form>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
