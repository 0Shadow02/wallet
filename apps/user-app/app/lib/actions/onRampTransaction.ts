import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { NextResponse } from "next/server"
import prisma from "@repo/db/client"

export const CreateOnRamptxn=async(amount:number , provider:string)=>{
    const session = await getServerSession(authOptions)
    const userId = session.user.id
    if(!userId){
        return NextResponse.json("User not logged in")
    }

    try {
        await prisma.onRampTransaction.create({
            data:{
                userId,
                amount: amount,
                provider: provider

            }
        })
    } catch (error) {
        
    }
}