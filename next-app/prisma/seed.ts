import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


    await prisma.$connect()
    const user = await prisma.user.create({
        data: {
            name: "Test",
        }
    })
    await prisma.alarm.create({
        data: {
            title: "Test",
            time: new Date(),
            isActive: true,
            repeatDaily: false,
            repeatMonthly: false,
            repeatWeekly: false,
            dayOfWeek: 0,
            dayOfMonth: 0,
            userId:user.id
        }
    })

