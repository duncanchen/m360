import { Button } from "~/components/ui/button"
import { useUserStore } from "~/components/store"
import React from "react"

const E = ({ children }: {
             children: React.ReactNode
           }
) => {
  return <span className="text-foreground">{children}</span>

}

export default function About() {
  const { user } = useUserStore()

  return (
    <div className="container max-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
        <div className="">

          <div className="flex flex-col md:flex-row gap-4 bg-gray-900 rounded-md">
            <img
              alt="random headshot"
              className="w-40 p-4"
              src={user?.url}
            />
            <div className="p-4 space-y-2">
              <div className="font-sans text-2xl font-thin">
                // User Account
              </div>
              <div className="flex flex-row items-baseline gap-4">
                <div>
                  {user?.email}
                </div>
                <div className="bg-red-500 inline-flex justify-center rounded-md font-xs w-[1.3rem] h-[1.4rem]">
                  ?
                </div>
              </div>
              <div>
                Name: {user?.givenName} {user?.surname}
              </div>
              <div>Login: {user?.login}</div>
            </div>
          </div>


          <p className="leading-8 mt-4 text-foreground/50">

            In the current mt360, we do not
            check/confirm emails. However, in the upcoming Auth360, email
            will be a <E>major MFA authentication method, requiring confirmation.
            For simulation purposes, please specify your mTrade email or select
            an external email that is easily accessible to you.</E> During the
            account provisioning process, you will need to confirm your email
            address by clicking a link embedded in the registration email.
          </p>
        </div>
        <div>
          <Button variant="default">Register</Button>
        </div>
      </div>
    </div>
  )
}
