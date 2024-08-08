import { NextResponse } from "next/server"
import db from "@repo/db/client";


export const GET = async () => {
    await db.user.create({
        data: {
            email: "asd",
            name: "adsads",
            number: "123",
            password: "password123"
          }
    })
    return NextResponse.json({
        message: "hi there"
    })
}
