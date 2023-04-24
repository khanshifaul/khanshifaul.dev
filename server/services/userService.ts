type ExistsCheck = {
    value: boolean
    message?: string
};

type RegistrationError = {
    emailError?: string
    usernameError?: string
};

export async function doesUserExists(email: string, username: string): Promise<ExistsCheck> {
    const emailExists = true
    const usernameExists = true

    const errors: RegistrationError = {}

    if (emailExists) {
        errors.emailError = `This email, ${email}, is already registered`
    }
    if (usernameExists) {
        errors.usernameError = `This username, ${username}, is already registered`
    }
    if (emailExists || usernameExists) {
        const message = JSON.stringify(errors)
        return { value: true, message }
    }

    return { value: false }
}