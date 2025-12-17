import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DemoRequestPayload {
  name: string;
  company: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email }: DemoRequestPayload = await req.json();

    console.log("Processing demo request for:", { name, company, email });

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Linvex <onboarding@resend.dev>",
        to: [email],
        subject: "Your Linvex Demo Request",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #ffffff; margin: 0; padding: 40px 20px; }
                .container { max-width: 520px; margin: 0 auto; }
                h1 { font-size: 28px; font-weight: 200; color: #111111; margin-bottom: 24px; letter-spacing: -0.02em; }
                p { font-size: 16px; color: #666666; line-height: 1.6; margin-bottom: 16px; }
                .highlight { color: #111111; font-weight: 500; }
                .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e5e5; font-size: 14px; color: #999999; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Thank you, ${name}.</h1>
                <p>We've received your demo request${company ? ` for <span class="highlight">${company}</span>` : ''}.</p>
                <p>Our team will reach out within 24 hours to schedule a personalized demonstration of the Linvex ecosystem.</p>
                <p>In the meantime, explore our documentation to learn more about our IoT solutions for home, access, and agriculture.</p>
                <div class="footer">
                  <p>Intelligence, Embedded.<br/>— The Linvex Team</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(error);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(
      JSON.stringify({ success: true, message: "Demo request submitted" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-demo-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
