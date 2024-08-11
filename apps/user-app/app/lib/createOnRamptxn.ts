"use server"
import { getServerSession } from "next-auth"
import prisma from "@repo/db/client"
import { authOptions } from "./auth"

export async function createOnRamptransaction(amount:number, provider:string){
    console.log(amount,provider)
     const session = await getServerSession(authOptions)
     const userId = session.user.id
     if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }
    const token = (Math.random() * 1000).toString();
    await prisma.onRampTransaction.create({
        data:{
            userId: Number(session?.user?.id),
            amount:amount,
            provider:provider,
            startTime:new Date(),
            status: "Processing",
            token: token
        }
    })
    return {
        message:"onRampTransaction added"
    }
}