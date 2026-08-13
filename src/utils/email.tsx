import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export const sendEmail = (form: HTMLFormElement) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return Promise.reject(
      new Error(
        "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY."
      )
    );
  }

  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
};
