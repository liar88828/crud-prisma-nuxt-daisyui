import { Product } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const { description, name, price, qty }: Product = await readBody(event)

  const data = await prisma.product.update({
    where: { id },
    data: { description, name, price, qty },
  })
  return {
    data,
    status: true,
    code: 201,
  }
})
