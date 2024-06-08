import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const user = await prisma.users.findMany({ take: 1000 })
  return { data: user, success: true, code: 201 }
})
