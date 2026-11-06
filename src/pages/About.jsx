import { Award, Heart, HandHeart, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BackToTop from "@/components/BackToTop";
import CTASection from "@/components/CTASection";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { IMG, SITE_URL, siteInfo } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#beenish-jalil`,
  name: "Beenish Jalil",
  jobTitle: "Registered Psychotherapist (Q)",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}${IMG.beenishAbout}`,
  knowsLanguage: ["English", "Urdu", "Hindi"],
  worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#practice`, name: "Heart to Soul Psychotherapy" },
};

const principles = [
  {
    icon: Shield,
    title: "Safe Space",
    text: "I create a safe, inclusive space for people to connect, to be heard and feel valued. Your wellbeing and comfort are my top priorities in every interaction.",
    gradient: "from-[#E97D53] to-[#9D7438]",
  },
  {
    icon: Heart,
    title: "No Judgement",
    text: "I hold space for people to explore their experiences with curiosity and discovery. Every journey is unique, and I honor yours without judgement.",
    gradient: "from-[#7DA6A9] to-[#2D4642]",
  },
  {
    icon: Lightbulb,
    title: "Empower",
    text: "I build on existing strengths and provide resources and tools to facilitate growth and learning. You already have what you need - I help you to use it",
    gradient: "from-[#C5A069] to-[#9D7438]",
  },
  {
    icon: HandHeart,
    title: "Support",
    text: "I work with my clients in partnership to build trust in relationship. Your goals become our shared mission, and I walk alongside you every step of the way.",
    gradient: "from-[#7DA6A9] to-[#2D4642]",
  },
];

export default function About() {
  useScrollAnimation();
  return (
    <>
      <SEO
        title="About - Heart to Soul Psychotherapy | Beenish Jalil, Registered Psychotherapist (Q)"
        description="Learn about Beenish Jalil, Registered Psychotherapist (Q) and founder of Heart to Soul Psychotherapy."
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <PageHero
          backgroundImage={IMG.aboutHero}
          title="About Heart to Soul"
          subtitle="Empowering growth and change through practical mental health services"
        />

        <section className="py-20 bg-[#ffffff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--ring))]">Mental Health and Wellness Matters</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you are seeking one-on-one psychotherapy or an organization looking for relevant mental health and wellness support by way
                of training and facilitation, coaching and program development, Heart To Soul has what you are looking for. Mental health is a
                critical component for overall wellbeing and I am committed to helping my clients achieve their goals in a supportive and
                empowering environment.
              </p>
            </div>
          </div>
          <BackToTop />
        </section>

        <section className="py-20 bg-gradient-to-br from-[#f9f4f0] to-[#efe2d3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1 space-y-6">
                <div className="bg-gradient-to-br from-[#9D7438] to-[#7DA6A9] p-1 rounded-2xl shadow-2xl">
                  <div className="bg-white p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-8 h-8 text-[#9D7438]" />
                      <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      My journey to becoming a psychotherapist has been shaped by both my professional experiences and my personal life. As a
                      mother of three wonderful children, I understand the joys, challenges, and constant balancing act that life can bring. Before
                      becoming a psychotherapist, I practiced in the medical field as a doctor, where I learned the importance of compassion, trust,
                      and caring for people during vulnerable moments. I have always been drawn to helping people. As a medical practitioner, I
                      found myself listening to my patients' stories and realized that sometimes, being truly heard can be just as healing as any
                      treatment. I believe that feeling heard, understood, and accepted has a profound impact on a person's well-being. This passion
                      for supporting others and understanding their emotional experiences inspired me to pursue psychotherapy. Today, I have the
                      privilege of supporting children, teens, adults, and families as they navigate life's challenges. My goal is to provide a
                      safe, compassionate, and non-judgmental space where you can explore your emotions, build resilience, and discover your
                      strengths. It is an honor to walk alongside my clients on their journey toward healing, growth, and a more fulfilling life.
                    </p>
                  </div>
                </div>
                {/* Empty card link kept from the original (it renders as a thin bordered strip). */}
                <a href={siteInfo.psychologyTodayUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="border-2 border-[#e8ddd0] hover:border-[#C5A069] shadow-xl hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer transform hover:-translate-y-1" />
                </a>
              </div>
              <div className="animate-on-scroll space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 hidden">Our Story</h2>
                <h3 className="text-2xl font-semibold text-[#9D7438]">Beenish Jalil, Registered Psychotherapist (Q)</h3>
                <p className="text-lg text-gray-600 hidden">Founder &amp; Principal Consultant</p>
                <div className="mb-6">
                  <img src={IMG.beenishAbout} alt="Beenish Jalil, Registered Psychotherapist (Q)" className="rounded-2xl shadow-2xl max-w-xs" />
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed" />
              </div>
            </div>
          </div>
          <BackToTop />
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Approach and Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I am guided by core principles that shape every interaction and service I provide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <Card
                  key={p.title}
                  className="animate-on-scroll border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br ${p.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <p.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{p.text}</p>
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
          title="Let's Work Together"
          description="Contact us today for a free consultation and take the first step toward positive change."
          buttonText="Book Free Consultation"
        />
      </main>
    </>
  );
}
