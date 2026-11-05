import { CONTACT_EMAIL } from "@/data/site";

// The original Base44 site sent this through Base44's built-in SendEmail integration.
// Here, set VITE_FORM_ENDPOINT (e.g. a Formspree / Web3Forms / your own API URL) to POST
// submissions as JSON. Without it, the visitor's email app opens with the message filled in.
export async function sendContactEmail(form) {
  const subject = `New Consultation Request from ${form.name}`;
  const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service Interest: ${form.service}

Message:
${form.message}
`;

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...form, to: CONTACT_EMAIL, subject, _subject: subject, _replyto: form.email }),
    });
    if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
    return;
  }

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
