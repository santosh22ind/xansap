import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const fd = await req.formData();

  const name = fd.get("name") as string;
  const email = fd.get("email") as string;
  const company = fd.get("company") as string;
  const phone = fd.get("phone") as string;
  const module = fd.get("module") as string;
  const message = fd.get("message") as string;
  const type = fd.get("type") as string;
  const cvFile = fd.get("cv") as File | null;

  const subject =
    type === "consultant"
      ? `Consultant Enquiry – ${name}${module ? ` (${module})` : ""}`
      : `Client Enquiry – ${name}${module ? ` (${module})` : ""}`;

  const htmlContent = `
    <h2 style="color:#0f2d5c;font-family:sans-serif;">${subject}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;color:#666;width:140px"><strong>Type</strong></td><td style="padding:8px">${type === "consultant" ? "Consultant" : "Client"}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;color:#666"><strong>Name</strong></td><td style="padding:8px">${name}</td></tr>
      <tr><td style="padding:8px;color:#666"><strong>Email</strong></td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
      ${company ? `<tr style="background:#f9f9f9"><td style="padding:8px;color:#666"><strong>${type === "consultant" ? "Employer" : "Company"}</strong></td><td style="padding:8px">${company}</td></tr>` : ""}
      ${phone ? `<tr><td style="padding:8px;color:#666"><strong>Phone</strong></td><td style="padding:8px">${phone}</td></tr>` : ""}
      ${module ? `<tr style="background:#f9f9f9"><td style="padding:8px;color:#666"><strong>SAP Module</strong></td><td style="padding:8px">${module}</td></tr>` : ""}
      <tr><td style="padding:8px;color:#666;vertical-align:top"><strong>Message</strong></td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
    </table>
  `;

  // Build attachments array if CV was uploaded
  const attachments = [];
  if (cvFile && cvFile.size > 0) {
    const buffer = await cvFile.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    attachments.push({
      name: cvFile.name,
      content: base64,
    });
  }

  const body: Record<string, unknown> = {
    sender: { name: "XanSAP Website", email: "santosh22ind@gmail.com" },
    to: [{ email: process.env.CONTACT_EMAIL_TO }],
    replyTo: { email, name },
    subject,
    htmlContent,
  };

  if (attachments.length > 0) {
    body.attachment = attachments;
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
