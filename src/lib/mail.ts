import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export const sendVerifMail = async (email: string, token: string) => {
    const confirmationLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Please confirm your email",
        text: `Please confirm your email by clicking on the following link: ${confirmationLink}`,
    })
}