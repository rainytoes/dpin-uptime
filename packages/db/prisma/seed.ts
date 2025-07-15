import { prismaClient } from '../src/index';

// run bun ./prisma/seed.ts


async function seed() {
    await prismaClient.user.create({
        data: {
            id: "2",
            email: "test@test.com"
            
        }
    })

    await prismaClient.website.create({
        data: {
            id: "2",
            url: "https://test.com",
            userId: "2"
        }
    })

    const validator = await prismaClient.validator.create({
        data: {
         
            publicKey: "0x90735092734019",
            location: "Delhi",
            ip: "127.0.0.1"
        }
    })
    await prismaClient.websiteTick.create({
        data: {
           
            websiteId: "1",
            status: "Good",
            createdAt: new Date(),
            latency: 100,
            validatorId: validator.id
        }
    })

    await prismaClient.websiteTick.create({
        data: {
          
            websiteId: "1",
            status: "Good",
            createdAt: new Date(Date.now() - 1000*60*10),
            latency: 100,
            validatorId: validator.id
        }
    })

    await prismaClient.websiteTick.create({
        data: {
           
            websiteId: "1",
            status: "Good",
            createdAt: new Date(Date.now() - 1000*60*20),
            latency: 100,
            validatorId: validator.id
        }
    })
}

seed();