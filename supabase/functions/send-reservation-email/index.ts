
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReservationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedActivities: string[];
  participants: string;
  additionalInfo: string;
  additionalPhotoSession: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const reservationData: ReservationData = await req.json();
    console.log("Received reservation data:", reservationData);

    // Validate required fields
    if (!reservationData.firstName || !reservationData.email || !reservationData.phone || !reservationData.selectedActivities?.length) {
      throw new Error("Missing required fields");
    }

    let userEmailSuccess = false;
    let adminEmailSuccess = false;
    let userEmailId = null;
    let adminEmailId = null;

    // Send confirmation email to user in Lithuanian with retry logic
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const userEmailResponse = await resend.emails.send({
          from: "Nibrių ūkis <noreply@on.resend.dev>",
          to: [reservationData.email],
          subject: "Rezervacijos patvirtinimas - Nibrių ūkis",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Rezervacijos patvirtinimas</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 0;">
                
                <!-- Header -->
                <div style="background-color: #2d5016; padding: 30px 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Nibrių ūkis</h1>
                  <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">Rezervacijos patvirtinimas</p>
                </div>

                <!-- Main Content -->
                <div style="padding: 40px 30px;">
                  <div style="text-align: center; margin-bottom: 30px;">
                    <h2 style="color: #2d5016; font-size: 24px; margin: 0 0 15px 0;">Ačiū už jūsų rezervaciją!</h2>
                    <p style="color: #333333; font-size: 18px; line-height: 1.6; margin: 0;">
                      Sveiki, <strong>${reservationData.firstName}</strong>!
                    </p>
                  </div>
                  
                  <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #2d5016;">
                    <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0; font-weight: 500;">
                      🌿 <strong>Ačiū! Gavome jūsų rezervaciją. Susisieksime artimiausiu metu. Iki pasimatymo Nibriuose!</strong>
                    </p>
                  </div>
                  
                  <!-- Reservation Details -->
                  <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 12px; padding: 25px; margin: 30px 0;">
                    <h3 style="color: #2d5016; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">📋 Jūsų rezervacijos duomenys</h3>
                    <table style="width: 100%; border-collapse: separate; border-spacing: 0;">
                      <tr>
                        <td style="padding: 12px 0; font-weight: bold; color: #555; width: 35%; vertical-align: top;">👤 Vardas, pavardė:</td>
                        <td style="padding: 12px 0; color: #333; border-bottom: 1px solid #f0f0f0;">${reservationData.firstName} ${reservationData.lastName || ''}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">📧 El. paštas:</td>
                        <td style="padding: 12px 0; color: #333; border-bottom: 1px solid #f0f0f0;">${reservationData.email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">📱 Telefonas:</td>
                        <td style="padding: 12px 0; color: #333; border-bottom: 1px solid #f0f0f0;">${reservationData.phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">👥 Dalyvių skaičius:</td>
                        <td style="padding: 12px 0; color: #333; border-bottom: 1px solid #f0f0f0;">${reservationData.participants || 'Nenurodyta'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">🎯 Veiklos:</td>
                        <td style="padding: 12px 0; color: #333; border-bottom: 1px solid #f0f0f0;">${reservationData.selectedActivities.join(', ')}</td>
                      </tr>
                      ${reservationData.additionalPhotoSession ? '<tr><td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">📸 Fotosesija:</td><td style="padding: 12px 0; color: #333; border-bottom: 1px solid #f0f0f0;">Taip (+40€)</td></tr>' : ''}
                      ${reservationData.additionalInfo ? `<tr><td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">💬 Papildoma info:</td><td style="padding: 12px 0; color: #333; white-space: pre-wrap;">${reservationData.additionalInfo}</td></tr>` : ''}
                    </table>
                  </div>
                  
                  <!-- Contact Info -->
                  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0;">
                    <p style="margin: 0 0 10px 0; color: #555; font-size: 14px;"><strong>📞 Klausimų atveju:</strong></p>
                    <p style="margin: 0; color: #555; font-size: 14px;">Tel.: +370 xxx xxxx | El. p.: info@nibriuukis.lt</p>
                  </div>
                </div>
                
                <!-- Footer -->
                <div style="background-color: #2d5016; padding: 25px 20px; text-align: center;">
                  <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: 500;">Su pagarba,</p>
                  <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">Nibrių ūkio komanda 🌿</p>
                </div>
                
              </div>
            </body>
            </html>
          `,
        });

        if (userEmailResponse.error) {
          throw new Error(`User email error: ${userEmailResponse.error}`);
        }

        console.log(`User email sent successfully on attempt ${attempt}:`, userEmailResponse);
        userEmailSuccess = true;
        userEmailId = userEmailResponse.data?.id;
        break;

      } catch (error) {
        console.error(`User email attempt ${attempt} failed:`, error);
        if (attempt === 3) {
          console.error("Failed to send user email after 3 attempts");
        } else {
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    // Send notification email to admin with retry logic
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const adminEmailResponse = await resend.emails.send({
          from: "Nibrių ūkis <noreply@on.resend.dev>",
          to: ["barauskaite_raminta@yahoo.com"],
          subject: "🔔 Nauja rezervacija - Nibrių ūkis",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Nauja rezervacija</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
              <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; padding: 0;">
                
                <!-- Header -->
                <div style="background-color: #2d5016; padding: 30px 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🔔 Nauja rezervacija gauta!</h1>
                  <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">Nibrių ūkis - rezervacijos sistema</p>
                </div>

                <!-- Main Content -->
                <div style="padding: 40px 30px;">
                  
                  <!-- Client Information -->
                  <div style="background-color: #f8f9fa; border-radius: 12px; padding: 25px; margin: 20px 0;">
                    <h2 style="color: #2d5016; margin: 0 0 20px 0; font-size: 22px; border-bottom: 2px solid #e9ecef; padding-bottom: 10px;">👤 Kliento informacija</h2>
                    <table style="width: 100%; border-collapse: separate; border-spacing: 0;">
                      <tr>
                        <td style="padding: 15px 20px; font-weight: bold; color: #555; width: 30%; background-color: #ffffff; border: 1px solid #e9ecef; border-right: none;">Vardas:</td>
                        <td style="padding: 15px 20px; color: #333; background-color: #ffffff; border: 1px solid #e9ecef; border-left: none; font-weight: 500;">${reservationData.firstName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 20px; font-weight: bold; color: #555; background-color: #f8f9fa; border: 1px solid #e9ecef; border-right: none; border-top: none;">Pavardė:</td>
                        <td style="padding: 15px 20px; color: #333; background-color: #f8f9fa; border: 1px solid #e9ecef; border-left: none; border-top: none; font-weight: 500;">${reservationData.lastName || 'Nenurodyta'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 20px; font-weight: bold; color: #555; background-color: #ffffff; border: 1px solid #e9ecef; border-right: none; border-top: none;">📧 El. paštas:</td>
                        <td style="padding: 15px 20px; color: #333; background-color: #ffffff; border: 1px solid #e9ecef; border-left: none; border-top: none; font-weight: 500;">${reservationData.email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 20px; font-weight: bold; color: #555; background-color: #f8f9fa; border: 1px solid #e9ecef; border-right: none; border-top: none;">📱 Telefonas:</td>
                        <td style="padding: 15px 20px; color: #333; background-color: #f8f9fa; border: 1px solid #e9ecef; border-left: none; border-top: none; font-weight: 500;">${reservationData.phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 20px; font-weight: bold; color: #555; background-color: #ffffff; border: 1px solid #e9ecef; border-right: none; border-top: none;">👥 Dalyvių skaičius:</td>
                        <td style="padding: 15px 20px; color: #333; background-color: #ffffff; border: 1px solid #e9ecef; border-left: none; border-top: none; font-weight: 500;">${reservationData.participants || 'Nenurodyta'}</td>
                      </tr>
                    </table>
                  </div>
                  
                  <!-- Selected Activities -->
                  <div style="background-color: #e7f3ff; border-radius: 12px; padding: 25px; margin: 20px 0;">
                    <h3 style="color: #2d5016; margin: 0 0 15px 0; font-size: 20px;">🎯 Pasirinktos veiklos</h3>
                    <ul style="margin: 0; padding-left: 25px; color: #333;">
                      ${reservationData.selectedActivities.map(activity => `<li style="margin: 8px 0; font-size: 16px; font-weight: 500;">${activity}</li>`).join('')}
                    </ul>
                    ${reservationData.additionalPhotoSession ? '<div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-radius: 8px; border-left: 4px solid #2d5016;"><strong style="color: #2d5016;">📸 Papildoma fotosesija: Taip (+40€)</strong></div>' : ''}
                  </div>
                  
                  ${reservationData.additionalInfo ? `
                    <!-- Additional Information -->
                    <div style="background-color: #fff3cd; border-radius: 12px; padding: 25px; margin: 20px 0;">
                      <h3 style="color: #2d5016; margin: 0 0 15px 0; font-size: 20px;">💬 Papildoma informacija</h3>
                      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #ffeaa7;">
                        <p style="margin: 0; color: #333; white-space: pre-wrap; font-size: 16px; line-height: 1.5;">${reservationData.additionalInfo}</p>
                      </div>
                    </div>
                  ` : ''}
                  
                  <!-- Submission Time -->
                  <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f3f4; border-radius: 8px;">
                    <p style="margin: 0; color: #666; font-size: 14px;">
                      📅 <strong>Rezervacijos laikas:</strong> ${new Date().toLocaleString('lt-LT', { timeZone: 'Europe/Vilnius' })}
                    </p>
                  </div>
                  
                </div>
                
                <!-- Footer -->
                <div style="background-color: #2d5016; padding: 25px 20px; text-align: center;">
                  <p style="color: #ffffff; margin: 0; font-size: 14px;">Ši žinutė buvo išsiųsta automatiškai iš Nibrių ūkio rezervacijų sistemos</p>
                  <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 12px; opacity: 0.8;">🌿 Nibrių ūkis | Lietuvos gamtos lobiai</p>
                </div>
                
              </div>
            </body>
            </html>
          `,
        });

        if (adminEmailResponse.error) {
          throw new Error(`Admin email error: ${adminEmailResponse.error}`);
        }

        console.log(`Admin email sent successfully on attempt ${attempt}:`, adminEmailResponse);
        adminEmailSuccess = true;
        adminEmailId = adminEmailResponse.data?.id;
        break;

      } catch (error) {
        console.error(`Admin email attempt ${attempt} failed:`, error);
        if (attempt === 3) {
          console.error("Failed to send admin email after 3 attempts");
        } else {
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    // Return response with detailed status
    const response = {
      success: true,
      userEmailSent: userEmailSuccess,
      adminEmailSent: adminEmailSuccess,
      userEmailId,
      adminEmailId,
      message: `Emails sent - User: ${userEmailSuccess ? 'Success' : 'Failed'}, Admin: ${adminEmailSuccess ? 'Success' : 'Failed'}`
    };

    // If neither email was sent, consider it a failure
    if (!userEmailSuccess && !adminEmailSuccess) {
      response.success = false;
      response.message = "Failed to send both user and admin emails";
    }

    return new Response(
      JSON.stringify(response),
      {
        status: userEmailSuccess || adminEmailSuccess ? 200 : 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Critical error in send-reservation-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false,
        userEmailSent: false,
        adminEmailSent: false,
        message: "Critical error occurred while sending emails"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
