import { H3Event } from "h3"
import { prisma } from "~/server/config/prisma"
import { RegisterProps } from "~/types/auth"
import valid from "~/utils/lib/valid"
export default defineEventHandler(async (event: H3Event) => {
  try {
    const { email, name, password }: RegisterProps = await readBody(event)

    if (!email || !name || !password) {
      throw createError({
        statusMessage: "Data is Required",
        statusCode: 400,
      })
    }

    const hashedPassword = await valid().hash(password)
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    })

    return { data: user, status: true, code: 200 }
  } catch (error) {
    console.log(error)
  }
})
