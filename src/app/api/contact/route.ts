import { NextResponse } from "next/server";
import * as z from "zod";

// Zod Schema matching client-side validation
const serverContactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  location: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  message: z.string().max(1000).optional(),
});

// Extremely simple, in-memory rate limiting map
// Maps IP Address -> Timestamp[] of submissions
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Simple input sanitization function to strip common HTML tags (XSS block)
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: Request) {
  try {
    // Get client IP address for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    
    // Rate Limiting Logic
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recentRequests = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);
    
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after a minute." },
        { status: 429 }
      );
    }
    
    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    const body = await request.json();
    
    // Server-side Zod validation
    const result = serverContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data submission." },
        { status: 400 }
      );
    }

    // Input sanitization to prevent XSS payloads
    const name = sanitizeString(result.data.name);
    const phone = sanitizeString(result.data.phone);
    const location = sanitizeString(result.data.location);
    const service = sanitizeString(result.data.service);
    const message = result.data.message ? sanitizeString(result.data.message) : "";

    console.log("Validated & Sanitized Submission Received:", {
      name,
      phone,
      location,
      service,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Email delivery (Resend / Nodemailer integrations fit here in the future)

    return NextResponse.json({ success: true, message: "Quote request successfully processed." });
  } catch (error) {
    console.error("Server-side contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
