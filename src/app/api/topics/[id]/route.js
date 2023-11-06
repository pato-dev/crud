import Topic from "@/models/topic";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json()
    try {
        await connectMongoDB()
        await Topic.findByIdAndUpdate(id, { title, description })
        return new NextResponse("Updated!", { status: 200 })
    } catch (error) {
        console.log(error)
    }
}
export const GET = async (req, { params }) => {
    const { id } = params;
    try {
        await connectMongoDB()
        const topic = await Topic.findOne({ _id: id })
        return new NextResponse(JSON.stringify(topic), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}
// export const DELETE = async (req, { params }) => {
//     const { id } = params;
//     try {
//         await connectMongoDB()
//         await Topic.findByIdAndRemove({ _id: id })
//         return new NextResponse("Deleted!", { status: 200 })
//     } catch (error) {
//         console.log(error)
//     }
// }
