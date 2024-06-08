import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  console.log(id)
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  })
  return {
    data: user,
    success: true,
    code: 201,
  }
})
