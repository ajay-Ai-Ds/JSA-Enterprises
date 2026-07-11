import { NextResponse } from "next/server";
import * as z from "zod";

const newsletterServerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterServerSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json({ error: "Invalid name or email input." }, { status: 400 });
    }

    console.log("Validated Newsletter Subscriber:", {
      name: result.data.name,
      email: result.data.email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Subscription request saved." });
  } catch (error) {
    console.error("Newsletter API handler error:", error);
    return NextResponse.json({ error: "Server processing error occurred." }, { status: 500 });
  }
}
