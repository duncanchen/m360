import { z } from "zod"

export const ZUser = z.object({
  givenName: z.string(),
  surname: z.string(),
  email: z.string().email(),
  login: z.string(),
  url: z.string().optional(),
  id: z.string()
})

export type User = z.infer<typeof ZUser>