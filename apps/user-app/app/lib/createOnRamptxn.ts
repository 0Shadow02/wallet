import { getServerSession } from "next-auth"
import prisma from "@repo/db/client"
import { authOptions } from "./auth"
import { NextResponse } from "next/server"
export async function createOnRamptransaction(amount:number, provider:string){
     const seesion = await getServerSession(authOptions)
     const userId = seesion.user.id
     const token = Math.random().toString()
    try {
        if (userId!) {
           return {
            message:"user not logged in!"
           }
        }
        prisma.onRampTransaction.create({
            data:{
                userId,
                amount:amount,
                provider:provider,
                startTime: Date(),
                status: "Processing",
                token: token
            }
        })
    } catch (error) {
        
    }
    return {
        message:"success"
    }
}