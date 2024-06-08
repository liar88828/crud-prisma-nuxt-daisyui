import { H3Event } from "h3"
import { prisma } from "~/server/config/prisma"
import { LoginProps } from "~/types/auth"
import valid from "~/utils/lib/valid"
export default defineEventHandler(async (event: H3Event) => {
  try {
    const { email, password }: LoginProps = await readBody(event)
    console.log(email, password, "from api login")
    if (!email || !password) {
      throw createError({
        statusMessage: "Data is Required",
        statusCode: 400,
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (!user || !user.hashedPassword) {
      throw createError({
        statusMessage: "User Not Found",
        statusCode: 404,
      })
    }
    const match = await valid().compare(password, user.hashedPassword)

    if (!match) {
      throw createError({
        statusMessage: "Password Not Match",
        statusCode: 404,
      })
    }

    const { hashedPassword, ...ress } = user
    return { data: ress, status: true, code: 200 }
  } catch (error) {
    console.log(error)
  }
})
