import { Users } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  const { name }: Users = body
  const user = await prisma.users.create({
    data: {
      name,
    },
  })

  return { data: user, success: true, code: 200 }
})
