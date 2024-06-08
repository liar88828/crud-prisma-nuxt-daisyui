import { Users } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const body = await readBody(event)
  const { name }: Users = body
  const user = await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      name,
    },
  })

  return { data: user, success: true, code: 200 }
})
