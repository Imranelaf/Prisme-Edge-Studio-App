import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      try {
        await prisma.users.upsert({
          where: { email: user.email! },
          update: {
            lastLogin: new Date(),
          },
          create: {
            email: user.email!,
            name: user.name!,
            image: user.image!,
          },
        })
        return true
      } catch (error) {
        console.error("Error saving user:", error)
        return false
      }
    }
  }
})