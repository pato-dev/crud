import Topic from "@/models/topic"
import connectMongoDB from "@/utils/mongodb"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const body = await req.json()
    try {
        await connectMongoDB()
        const newTopic = new Topic(body)
        await newTopic.save()
        return new NextResponse("Topic created!", { status: 201 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

export const GET = async () => {
    try {
        await connectMongoDB()
        const topics = await Topic.find()
        return new NextResponse(JSON.stringify(topics), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

// By search params
export const DELETE = async (request) => {
    const id = request.nextUrl.searchParams.get("id")
    try {
        const newHeaders = new Headers(request.headers)
        await connectMongoDB();
        await Topic.findByIdAndDelete(id)
        return new NextResponse("Topic deleted!", { headers: newHeaders, status: 200 })
    } catch (error) {
        console.log(error)
    }
}