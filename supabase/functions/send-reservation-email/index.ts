
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

    // Send confirmation email to user in Lithuanian
    const userEmailResponse = await resend.emails.send({
      from: "Nibrių ūkis <onboarding@resend.dev>",
      to: [reservationData.email],
      subject: "Rezervacijos patvirtinimas - Nibrių ūkis",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2d5016; text-align: center;">Ačiū už jūsų rezervaciją!</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Sveiki, ${reservationData.firstName}!
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              <strong>Ačiū! Gavome jūsų rezervaciją. Susisieksime artimiausiu metu. Iki pasimatymo Nibriuose!</strong>
            </p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #2d5016; margin-bottom: 15px;">Jūsų rezervacijos duomenys:</h3>
            <p><strong>Vardas:</strong> ${reservationData.firstName} ${reservationData.lastName}</p>
            <p><strong>El. paštas:</strong> ${reservationData.email}</p>
            <p><strong>Telefonas:</strong> ${reservationData.phone}</p>
            <p><strong>Dalyvių skaičius:</strong> ${reservationData.participants || 'Nenurodyta'}</p>
            <p><strong>Pasirinktos veiklos:</strong> ${reservationData.selectedActivities.join(', ')}</p>
            ${reservationData.additionalPhotoSession ? '<p><strong>Papildoma fotosesija:</strong> Taip (+40€)</p>' : ''}
            ${reservationData.additionalInfo ? `<p><strong>Papildoma informacija:</strong> ${reservationData.additionalInfo}</p>` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
            <p>Su pagarba,<br>Nibrių ūkio komanda</p>
          </div>
        </div>
      `,
    });

    console.log("User email sent:", userEmailResponse);

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Nibrių ūkis <onboarding@resend.dev>",
      to: ["triusiulis@gmail.com"],
      subject: "Nauja rezervacija - Nibrių ūkis",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2d5016;">Nauja rezervacija gauta!</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2d5016;">Kliento informacija:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px;">Vardas:</td>
                <td style="padding: 8px 0;">${reservationData.firstName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Pavardė:</td>
                <td style="padding: 8px 0;">${reservationData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">El. paštas:</td>
                <td style="padding: 8px 0;">${reservationData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Telefonas:</td>
                <td style="padding: 8px 0;">${reservationData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Dalyviai:</td>
                <td style="padding: 8px 0;">${reservationData.participants || 'Nenurodyta'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2d5016;">Pasirinktos veiklos:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${reservationData.selectedActivities.map(activity => `<li style="margin: 5px 0;">${activity}</li>`).join('')}
            </ul>
            ${reservationData.additionalPhotoSession ? '<p style="margin-top: 15px;"><strong>Papildoma fotosesija:</strong> Taip (+40€)</p>' : ''}
          </div>
          
          ${reservationData.additionalInfo ? `
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #2d5016;">Papildoma informacija:</h3>
              <p style="margin: 0; white-space: pre-wrap;">${reservationData.additionalInfo}</p>
            </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
            <p>Ši žinutė buvo išsiųsta automatiškai iš Nibrių ūkio rezervacijų sistemos.</p>
          </div>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        userEmailId: userEmailResponse.data?.id,
        adminEmailId: adminEmailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-reservation-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
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
