import { prisma } from "~/server/config/prisma"
import { getToken, getServerSession } from "#auth"
export default defineEventHandler(async (event) => {
  const token = await getToken({ event })
  const session = await getServerSession(event)
  // console.log(token, "---token")
  // console.log(session, "---session")

  const data = await prisma.product.findMany({ take: 100 })
  return {
    data,
    status: true,
    code: 200,
  }
})
