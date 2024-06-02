import { redirect } from "@remix-run/react"

export const loader = async () => {
  return redirect("/", {
    headers: {
      "Set-Cookie": `mt360_user=; Max-Age=0; Path=/`,
    },
  })
}