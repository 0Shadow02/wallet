"use server"
import { getServerSession } from "next-auth"
import prisma from "@repo/db/client"
import { authOptions } from "./auth"

export async function createOnRamptransaction(amount:number, provider:string){
     const seesion = await getServerSession(authOptions)
     const userId = seesion.user.id
     const token = Math.random().toString()
    if (userId!) {
        return {
        message:"user not logged in!"
        }
    }
    await prisma.onRampTransaction.create({
        data:{
            userId: Number(userId),
            amount:amount,
            provider:provider,
            startTime: Date(),
            status: "Processing",
            token: token
        }
    })
    return {
        message:"onRampTransaction added"
    }
}