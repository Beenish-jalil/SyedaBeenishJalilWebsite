import { Link } from "react-router-dom";
import { ArrowRight, CircleCheckBig, HandHeart, Heart, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import BackToTop from "@/components/BackToTop";
import { GradientBlobs } from "@/components/CTASection";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { createPageUrl } from "@/lib/utils";
import { CONTACT_EMAIL, IMG } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Heart To Soul Psychotherapy",
  description: "Professional mental health and wellness services",
  url: typeof window !== "undefined" ? window.location.origin : "",
  telephone: "+14166880131",
  email: CONTACT_EMAIL,
  address: { "@type": "PostalAddress", addressCountry: "CA", addressRegion: "ON" },
  founder: { "@type": "Person", name: "Beenish Jalil", jobTitle: "Registered Psychotherapist (Q)" },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Adult/Teen Psychotherapy" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Psychotherapy" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Parental Consultation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Community Programs" } },
  ],
};

const approach = [
  { icon: Shield, title: "Safe Space", description: "I create a safe, inclusive space for people to connect, be heard and feel valued.", color: "from-[#9D7438] to-[#7DA6A9]" },
  { icon: Heart, title: "No Judgement", description: "I hold space for people to explore their experiences with curiosity and discovery.", color: "from-[#C5A069] to-[#E97D53]" },
  { icon: Lightbulb, title: "Empower", description: "I build on existing strengths and provide resources and tools to facilitate growth.", color: "from-[#E97D53] to-[#C5A069]" },
  { icon: HandHeart, title: "Support", description: "I work together with you in partnership to build trust in relationship.", color: "from-[#7DA6A9] to-[#9D7438]" },
];

const services = [
  {
    image: IMG.adultTeenCard,
    alt: "Adult/Teen Psychotherapy",
    title: "Adult/Teen Psychotherapy",
    description: "One-on-one support for youth and adults experiencing life stressors, anxiety, depression, history of trauma or relationship issues.",
    bullets: ["60-minute sessions", "Confidential and non judgemental space", "Coping strategies & tools", "Trauma-informed care"],
    tab: "individual",
    gradient: "from-[#E97D53] to-[#9D7438]",
  },
  {
    image: IMG.communityCard,
    alt: "Community Programs",
    title: "Community Programs",
    description: "Workshops and group sessions addressing mental health barriers and building community resilience.",
    bullets: ["Group workshops", "Self-care strategies", "Stress management", "Trauma & recovery"],
    tab: "community",
    gradient: "from-[#7DA6A9] to-[#2D4642]",
  },
  {
    image: IMG.parentalCard,
    alt: "Parental Consultation",
    title: "Parental Consultation",
    description: "Consultation for both new and experienced parents.",
    bullets: ["Pre and post partum care", "Parental coaching", "Primary care provider support"],
    tab: "parental",
    gradient: "from-[#C5A069] to-[#9D7438]",
  },
  {
    image: IMG.familyCard,
    alt: "Family Psychotherapy",
    title: "Family Psychotherapy",
    description: "Virtual amily sessions to improve communication, resolve conflict, and strengthen relationships together.",
    bullets: ["60-minute sessions", "Improved communication", "Conflict resolution", "Stronger family bonds"],
    tab: "family",
    gradient: "from-[#7DA6A9] to-[#9D7438]",
  },
];

const areas = ["Anxiety", "Depression", "Trauma", "Phobias", "Relationship Issues", "Grief", "Growth and Healing"];

const heroBtn =
  "bg-white text-[#2D4642] hover:bg-[#f9f4f0] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-2xl hover:shadow-[#9D7438]/50 transform hover:scale-105 transition-all duration-300";

export default function Home() {
  useScrollAnimation();
  return (
    <>
      <SEO structuredData={structuredData} />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('${IMG.homeHero}')`, backgroundPosition: "center 35%" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D4642]/50 via-[#9D7438]/40 to-[#2D4642]/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
            <h1 className="mb-4 md:mb-6 leading-tight drop-shadow-2xl text-center capitalize no-underline not-italic [font-family:'Libre_Baskerville',_serif] text-[hsl(var(--background))] font-normal text-4xl sm:text-4xl md:text-4xl">
              Heart To Soul Psychotherapy
            </h1>
            <p className="mb-6 md:mb-8 max-w-3xl mx-auto leading-snug drop-shadow-2xl [font-family:'Albert_Sans',_sans-serif] font-semibold text-[#634218] text-2xl sm:text-2xl md:text-2xl">
              A safe space for individuals &amp; families to heal &amp; grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link to={createPageUrl("Contact")}>
                <Button className={heroBtn}>
                  <span className="hidden sm:inline">Book Free Consultation</span>
                  <span className="sm:hidden">Book free consultation</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button className={heroBtn}>
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block" />
          </div>
        </section>

        {/* My Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Approach</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built on principles of safety, empowerment, and collaboration</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((item, i) => (
                <Card
                  key={item.title}
                  className="animate-on-scroll border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <BackToTop />
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-br from-[#f9f4f0] to-[#efe2d3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive mental health support tailored to your needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((s, i) => (
                <Card
                  key={s.title}
                  className="animate-on-scroll border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden group"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${s.gradient}`} />
                  <CardContent className="p-6">
                    <img src={s.image} alt={s.alt} className="w-full h-48 object-cover rounded-xl mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{s.description}</p>
                    <ul className="space-y-2 mb-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                          <CircleCheckBig className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`${createPageUrl("Services")}?tab=${s.tab}`}>
                      <Button
                        variant="outline"
                        className={`w-full mt-4 border-2 hover:bg-gradient-to-r ${s.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <BackToTop />
        </section>

        {/* Areas of Support */}
        <section className="py-20 bg-gradient-to-br from-[#f9f4f0] to-[#efe2d3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Areas of Support</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Compassionate care across a range of life experiences</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              {areas.map((a) => (
                <span
                  key={a}
                  className="px-6 py-3 rounded-full text-lg font-semibold text-[#9D7438] bg-white shadow-md border border-[#e3d4c0] hover:shadow-lg transition-all duration-300"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="text-center text-xl text-gray-700 mt-12 [font-family:'Albert_Sans',_sans-serif] font-medium">
              Therapy provided in English, Urdu and Hindi
            </p>
          </div>
          <BackToTop />
        </section>

        {/* Meet Beenish */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start lg:gap-0">
              <div className="animate-on-scroll mb-8 lg:mb-0 lg:max-w-sm xl:max-w-md">
                <img src={IMG.beenishHome} alt="Beenish Jalil" className="shadow-2xl w-full h-auto object-cover max-w-full rounded-[28px]" />
              </div>
              <div className="animate-on-scroll space-y-6 text-left lg:flex-1 lg:pl-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Beenish Jalil</h2>
                <p className="text-lg text-gray-600 leading-relaxed">Registered Psychotherapist (Q)</p>
                <p className="text-gray-700 leading-relaxed">
                  I am Beenish, a registered psychotherapist (Q) dedicated to providing a safe and supportive space where you can feel heard and
                  understood. I work with children, adults and families experiencing stress, anxiety, trauma, relationship challenges, grief and self
                  esteem issues. I provide Trauma informed care and work with modalities such as CBT, DBT, mindfulness, somatic approach,
                  psychodynamic psychotherapy and solution focused therapy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I believe that every person has the capacity for growth and healing, and I strive to help my clients work through their
                  challenges, heal and grow. I offer therapy in English, Urdu and Hindi. I look forward to supporting you on your journey towards
                  emotional well being.
                </p>
                <div className="text-left mt-8">
                  <Link to={createPageUrl("About")}>
                    <Button className="bg-gradient-to-r from-[#9D7438] to-[#7DA6A9] hover:from-[#8d6428] hover:to-[#6d9699] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Learn More About Beenish
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <BackToTop />
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#9D7438] via-[#E97D53] to-[#7DA6A9] relative overflow-hidden">
          <GradientBlobs />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Taking care of your mental health takes courage. You are not alone. Contact me today for a free consultation.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-white text-[#2D4642] hover:bg-[#f9f4f0] px-10 py-6 shadow-2xl hover:shadow-purple-900/50 transform hover:scale-105 transition-all duration-300 text-sm">
                Book Your Free 15 Minute Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
