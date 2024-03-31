import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorMail = async (email: string, token: string) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Two-factor authentication",
        html: `<p>Your two-factor authentication code is: ${token}</p>`,
    })
}

export const sendPasswordResetMail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/resetPassword?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Password reset",
        html: `<p>You can reset your password by clicking on the following link: <a href="${resetLink}">click-me</a></p>`,
    })
}

export const sendVerifMail = async (email: string, token: string) => {
    const confirmationLink = `${domain}/auth/emailVerification?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Please confirm your email",
        html: `<p>Please confirm your email by clicking on the following link: <a href="${confirmationLink}">click-me</a></p>`,
    })
}