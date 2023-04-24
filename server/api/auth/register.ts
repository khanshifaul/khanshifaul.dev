import { IUser } from "~~/types/IUser"
import bcrypt from 'bcrypt'
import { doesUserExists } from "~~/server/services/userService"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const name = body.name
    const username = body.username
    const email: string = body.email
    const password: string = body.password
    const userExists = await doesUserExists(email, username)

    if (userExists.value === true) {
        sendError(event, createError({ statusCode: 422, statusMessage: userExists.message }))
    }

    const encryptedPassword: string = await bcrypt.hash(password, 10)

    const userData: IUser = {
        username,
        name,
        email,
        loginType: 'email',
        password: encryptedPassword
    }

    const user = await createUser(userData)

    return await MediaKeySession(user, event)
})