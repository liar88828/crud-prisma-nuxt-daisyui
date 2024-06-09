import { Product } from "@prisma/client"
import { prisma } from "~/server/config/prisma"

export default defineEventHandler(async (event) => {
  const { description, name, price, qty }: Product = await readBody(event)
  const data = await prisma.product.create({
    data: { description, name, price, qty },
  })

  return {
    data,
    status: true,
    code: 201,
  }
})
