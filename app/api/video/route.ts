import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!
})



export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body

        if (!userId) {
            return new NextResponse("unauthorized", { status: 401 })
        }


        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 })
        }

        // const [prompt_start, prompt_end] = prompt.split(" | ");

        // console.log(prompt_start, prompt_end);


        const response = await replicate.run(
            "arielreplicate/stable_diffusion_infinite_zoom:a2527c5074fc0cf9fa6015a40d75d080d1ddf7082fabe142f1ccd882c18fce61",
            {
                input: {
                    prompt: prompt
                }
            }
        );

        return NextResponse.json(response)

    } catch (error) {
        console.log("[VIDEO_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}