import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BackToTop from "@/components/BackToTop";
import CTASection from "@/components/CTASection";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { IMG } from "@/data/site";

const faqs = [
  {
    question: "What happens in the first session?",
    answer:
      "The first session is a chance to get to know each other. We'll talk about what brings you to therapy, what you'd like to change, and how we might work together. You're welcome to share as much or as little as feels comfortable.",
  },
  {
    question: "How long is a session, and how often will we meet?",
    answer:
      "Sessions are 50 to 60 minutes. Most people meet weekly or biweekly to begin with, and we adjust the rhythm together as things move forward.",
  },
  {
    question: "Are sessions online or in person?",
    answer:
      "Both. Sessions are available online over a secure video platform, or in person on site — whichever suits you best. Online sessions can be joined from anywhere in Ontario, and in-person appointments are arranged when we speak.",
  },
  {
    question: "Which languages do you offer?",
    answer:
      "Sessions are available in English, Urdu and Hindi. You're welcome to move between languages within a session if that helps you express yourself.",
  },
  {
    question: "Do you offer receipts for insurance?",
    answer:
      "Yes. An official receipt is issued after each paid session. Many extended health plans cover psychotherapy, though coverage varies, so it's worth confirming with your insurer.",
  },
  {
    question: "What if I need to cancel?",
    answer: "Please give at least 24 hours' notice. Late cancellations may be charged the full session fee, as that time has been reserved for you.",
  },
  {
    question: "Is what I share confidential?",
    answer:
      "Yes. Everything discussed in session is confidential, with the exception of situations where there is a risk of serious harm to you or someone else, or where disclosure is required by law.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FAQ() {
  useScrollAnimation();
  return (
    <>
      <SEO
        title="FAQ - Heart to Soul Psychotherapy"
        description="Common questions about psychotherapy sessions, languages, online and in-person appointments, insurance receipts and confidentiality."
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <PageHero backgroundImage={IMG.faqHero} title="FAQ" subtitle="A few things people often ask before starting therapy" height="50vh" />
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Questions, Answered</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you might want to know before you begin</p>
            </div>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <Card
                  key={f.question}
                  className="animate-on-scroll border-none shadow-xl bg-gradient-to-br from-white to-gray-50"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-[#E97D53] to-[#9D7438] rounded-2xl flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{f.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <BackToTop />
        </section>
        <CTASection
          title="Still Have a Question?"
          description="Book a free 15-minute consultation and ask anything — there's no obligation to continue."
          buttonText="Book Free Consultation"
        />
      </main>
    </>
  );
}
