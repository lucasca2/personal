import { contactEmail } from "@/emails/contactEmail";
import { contactReceivedEmail } from "@/emails/contactReceivedEmail";
import { sendEmail } from "@/utils/sendEmail";
import mjml2html from "mjml";

export async function POST(request: Request, response: Response) {
  try {
    const { name, email, message } = await request.json();

    await Promise.all([
      sendEmail({
        email,
        subject: contactEmail.title,
        html: mjml2html(contactEmail.mjmlHtml({ email, name })).html,
      }),

      sendEmail({
        email: "lucas.costamaral@gmail.com",
        subject: contactReceivedEmail.title,
        html: mjml2html(
          contactReceivedEmail.mjmlHtml({
            name,
            email,
            message,
          })
        ).html,
      }),
    ]);

    return Response.json({ status: true });
  } catch (e) {
    return Response.json({ status: false, e });
  }
}
