import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const rosterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(6, "Phone number is required"),
  city: z.string().optional(),
  gender: z.string().default("Female"),
  voiceAge: z.string().default("Young Adult"),
  primaryLanguages: z.string().min(2, "Languages are required"),
  demoLink: z.string().url("Valid URL to demo reel is required"),
  experience: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = rosterSchema.parse(body);

    const submission = {
      ...validatedData,
      id: "ROSTER-" + Date.now(),
      registeredAt: new Date().toISOString(),
    };

    // Save roster applicant to local ledger
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const rosterFile = path.join(dataDir, "roster.json");
      let currentApplicants = [];
      if (fs.existsSync(rosterFile)) {
        const fileContent = fs.readFileSync(rosterFile, "utf-8");
        currentApplicants = JSON.parse(fileContent);
      }
      currentApplicants.push(submission);
      fs.writeFileSync(rosterFile, JSON.stringify(currentApplicants, null, 2));
    } catch (fsErr) {
      console.warn("Could not write to local roster ledger:", fsErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Voice talent application registered successfully.",
        applicantId: submission.id,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
