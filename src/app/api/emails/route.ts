import { sendEmail } from '@/utils/mail.utils';

export async function POST(request: Request) {
    try {
        // Parse the incoming request body to get form data
        const { sender, recipients, subject, message } = await request.json();

        // Send the email using the sendEmail utility
        const result = await sendEmail({
            sender,
            recipients: recipients,
            subject,
            message,
        });

        // Return success response
        return new Response(JSON.stringify({ 
            accepted: result.accepted,
        }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);  // Debugging output
        // Return error response
        return new Response(JSON.stringify({ message: "Unable to send email" }), { status: 500 });
    }
}
