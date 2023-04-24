import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const project = await prisma.project.create({
        data: {
            title: body.title,
            description: body.description
            // githuburl: body.githuburl,
            // projecturl: body.projecturl
        },
    })
    return { project: project }

})