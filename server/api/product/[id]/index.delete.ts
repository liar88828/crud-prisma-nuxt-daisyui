import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const data = await prisma.product.delete({ where: { id } })
  return {
    data,
    status: true,
    code: 200,
  }
})
