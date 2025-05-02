import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function getMongo(request:NextRequest){
    try {
        
    } catch (error) {
        return NextResponse.json({message:"Connection failed",status:500})
    }

}

export {getMongo as GET}