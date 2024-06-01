import { create } from "zustand"
import { User } from "~/lib/dto/zuser"


type UserOps = {
  user: User | null | undefined,
  setUser: (user: User) => void
}


export const useUserStore = create<UserOps>()((set, get) => {
  return {
    user: null,
    setUser: (user: User) => {
      const currentUser = get().user
      if (currentUser?.id !== user.id) {
        set({ user })
      }
    },

  }
})
