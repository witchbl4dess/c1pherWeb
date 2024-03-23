import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export const sendPasswordResetMail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/auth/resetPassword?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Password reset",
        html: `<p>You can reset your password by clicking on the following link: <a href="${resetLink}">click-me</a></p>`,
    })
}

export const sendVerifMail = async (email: string, token: string) => {
    const confirmationLink = `http://localhost:3000/auth/emailVerification?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Please confirm your email",
        html: `<p>Please confirm your email by clicking on the following link: <a href="${confirmationLink}">click-me</a></p>`,
    })
}