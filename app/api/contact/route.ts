import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectTypes: z.array(z.string()).default([]),
  languages: z.array(z.string()).default([]),
  volume: z.number().default(1),
  budget: z.number().default(1000),
  currency: z.string().default("USD"),
  timeline: z.string().optional(),
  message: z.string().optional(),
  attachmentLink: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const submission = {
      ...validatedData,
      id: "LEAD-" + Date.now(),
      createdAt: new Date().toISOString(),
    };

    // Save lead to local data ledger
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "leads.json");
      let currentLeads = [];
      if (fs.existsSync(leadsFile)) {
        const fileContent = fs.readFileSync(leadsFile, "utf-8");
        currentLeads = JSON.parse(fileContent);
      }
      currentLeads.push(submission);
      fs.writeFileSync(leadsFile, JSON.stringify(currentLeads, null, 2));
    } catch (fsErr) {
      console.warn("Could not write to local leads ledger:", fsErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project brief received. Our production team will follow up within 24 hours.",
        leadId: submission.id,
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
