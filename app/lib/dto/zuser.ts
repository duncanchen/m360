import { z } from "zod"

export const ZUser = z.object({
  firstName: z.string(),
  lastName: z.string(),
  companyName: z.string(),
  email: z.string().email(),
  login: z.string(),
  url: z.string().optional(),
  id: z.coerce.number(),
})

export type User = z.infer<typeof ZUser>