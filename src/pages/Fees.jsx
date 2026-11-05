import { Link } from "react-router-dom";
import { ArrowRight, Clock, CreditCard, HandHeart, Receipt, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BackToTop from "@/components/BackToTop";
import CTASection from "@/components/CTASection";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { createPageUrl } from "@/lib/utils";
import { IMG } from "@/data/site";

const fees = [
  { name: "Free consultation", detail: "15 minutes, by phone or video", fee: "No charge" },
  { name: "Individual therapy", detail: "50–60 minutes, online or in person", fee: "$80" },
  { name: "Family psychotherapy", detail: "50–60 minutes, online or in person", fee: "$90" },
  { name: "Parental consultation", detail: "50–60 minutes, online or in person", fee: "$80" },
];

const info = [
  {
    icon: Receipt,
    title: "Extended health plans",
    text: "Official receipts are issued after each paid session for submission to your insurer. Many extended health plans cover psychotherapy with a Registered Psychotherapist (Q) — please confirm your specific coverage with your provider before starting.",
    gradient: "from-[#E97D53] to-[#9D7438]",
  },
  {
    icon: CreditCard,
    title: "Payment",
    text: "Sessions are paid by e-transfer or credit card at the time of booking. Payment details are confirmed when your appointment is scheduled.",
    gradient: "from-[#7DA6A9] to-[#2D4642]",
  },
  {
    icon: Clock,
    title: "Cancellations",
    text: "Please give at least 24 hours' notice to change or cancel an appointment. Late cancellations may be charged the full session fee.",
    gradient: "from-[#C5A069] to-[#9D7438]",
  },
  {
    icon: ShieldCheck,
    title: "A note on access",
    text: "If you do not have insurance or finances are a barrier, please connect with me to discuss low cost therapy. I'm happy to talk through what might be workable.",
    gradient: "from-[#7DA6A9] to-[#2D4642]",
  },
];

export default function Fees() {
  useScrollAnimation();
  return (
    <>
      <SEO
        title="Fees & Insurance - Heart to Soul Psychotherapy"
        description="Session fees, low cost therapy, insurance receipts and payment details for Heart to Soul Psychotherapy, online and in person across Ontario."
      />
      <main className="min-h-screen">
        <PageHero
          backgroundImage={IMG.servicesHero}
          title="Fees & Insurance"
          subtitle="Clear, straightforward information about sessions, receipts and coverage"
          height="50vh"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Session Fees</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Session fees are listed below, so you always know the cost in advance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fees.map((f, i) => (
                <Card
                  key={f.name}
                  className="animate-on-scroll border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="h-2 bg-gradient-to-r from-[#E97D53] to-[#9D7438]" />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{f.name}</h3>
                    <p className="text-gray-600 mb-4">{f.detail}</p>
                    <p className="text-2xl font-bold text-[#9D7438]">{f.fee}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 animate-on-scroll">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-[#9D7438] to-[#7DA6A9] text-white">
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-14 h-14 flex-shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
                      <HandHeart className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Low cost therapy</h3>
                      <p className="text-lg text-white/90 leading-relaxed">
                        If you do not have insurance or finances are a barrier, please connect with me to discuss low cost therapy. Cost should
                        never be the reason you go without support.
                      </p>
                    </div>
                    <Link to={createPageUrl("Contact")} className="flex-shrink-0">
                      <Button className="bg-white text-[#2D4642] hover:bg-[#f9f4f0] text-base px-8 py-6 shadow-lg">
                        Connect with me
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <BackToTop />
        </section>

        <section className="py-20 bg-gradient-to-br from-[#f9f4f0] to-[#efe2d3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Insurance &amp; Receipts</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Coverage, payment and cancellation details at a glance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {info.map((item, i) => (
                <Card key={item.title} className="animate-on-scroll border-none shadow-xl bg-white" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12 animate-on-scroll">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-[#9D7438] to-[#7DA6A9] hover:from-[#8d6428] hover:to-[#6d9699] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Ask about fees
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <BackToTop />
        </section>

        <CTASection
          title="Questions Before You Begin?"
          description="Book a free 15-minute consultation and we can talk through fees, coverage and what to expect."
          buttonText="Book Free Consultation"
        />
      </main>
    </>
  );
}
