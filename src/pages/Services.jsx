import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Brain, CircleCheckBig, FileCheck, Heart, MessageCircle, Shield, Target, TrendingUp, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BackToTop from "@/components/BackToTop";
import { GradientBlobs } from "@/components/CTASection";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { createPageUrl } from "@/lib/utils";
import { IMG, SITE_URL } from "@/data/site";

const TABS = ["individual", "community", "parental", "family"];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mental Health Services",
  provider: { "@type": "Organization", "@id": `${SITE_URL}/#practice`, name: "Heart to Soul Psychotherapy" },
  areaServed: { "@type": "State", name: "Ontario" },
  availableChannel: { "@type": "ServiceChannel", availableLanguage: ["English", "Urdu", "Hindi"] },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Psychotherapy services",
    itemListElement: [
      ["Adult/Teen Psychotherapy", "adult-teen-psychotherapy"],
      ["Family Psychotherapy", "family-psychotherapy"],
      ["Parental Consultation", "parental-consultation"],
      ["Community Programs", "community-programs"],
    ].map(([name, id]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, url: `${SITE_URL}/service/${id}` } })),
  },
};

const triggerClass =
  "data-[state=active]:bg-[#B79358] data-[state=active]:text-white h-auto py-4 px-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[#F9F5F1] text-[#2D4642]";
const gradientBtn =
  "bg-gradient-to-r from-[#9D7438] to-[#7DA6A9] hover:from-[#8d6428] hover:to-[#6d9699] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300";

function Tags({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((t) => (
        <span key={t} className="px-4 py-2 rounded-full text-sm font-medium text-[#b4772c] bg-[#f8efe4]">
          {t}
        </span>
      ))}
    </div>
  );
}

function Check({ children, small }) {
  return (
    <li className={`flex items-start gap-2 text-gray-700 ${small ? "text-sm" : ""}`}>
      <CircleCheckBig className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

function ExpectLearn({ expect, learn }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
      <Card className="border-none shadow-xl bg-gradient-to-br from-white to-[#f9f4f0]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="w-7 h-7 text-[#9D7438]" />
            What to Expect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {expect.map((e) => (
            <div key={e.title} className="flex items-start gap-3">
              <e.icon className="w-5 h-5 text-[#9D7438] mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">{e.title}</p>
                <p className={e.textClass || "text-gray-600"}>{e.text}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="border-none shadow-xl bg-gradient-to-br from-white to-[#eef2f2]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Brain className="w-7 h-7 text-[#7DA6A9]" />
            What You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {learn.map((l) => (
            <div key={l} className="flex items-start gap-2">
              <CircleCheckBig className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{l}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const workshops = [
  { icon: Heart, title: "Self Care", description: "Learn practical self-care strategies and build sustainable wellness routines", color: "from-[#E97D53] to-[#C5A069]" },
  { icon: Brain, title: "Emotional Regulation", description: "Build skills to understand, manage, and respond to emotions in healthy ways", color: "from-[#7DA6A9] to-[#9D7438]" },
  { icon: Brain, title: "Managing Stress", description: "Develop effective tools for managing stress in daily life and challenging times", color: "from-[#7DA6A9] to-[#2D4642]" },
  { icon: TrendingUp, title: "Trauma & Recovery", description: "Understand trauma responses and pathways to healing and resilience", color: "from-[#E97D53] to-[#9D7438]" },
];

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("tab");
  const [tab, setTab] = useState(TABS.includes(initial) ? initial : "individual");
  useScrollAnimation();

  const onTabChange = (value) => {
    setTab(value);
    setSearchParams({ tab: value }, { replace: true });
  };

  return (
    <>
      <SEO
        title="Services - Heart to Soul Psychotherapy | Mental Health & Wellness"
        description="Adult/teen psychotherapy, family psychotherapy, parental consultation and community programs. Online and in-person sessions in English, Urdu and Hindi."
        keywords="individual therapy, family therapy, parental consultation, community programs, virtual therapy"
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <PageHero
          backgroundImage={IMG.servicesHero}
          title="Our Services"
          subtitle="Comprehensive mental health support for individuals, families, and organizations"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={tab} onValueChange={onTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-4 bg-transparent mb-12">
                <TabsTrigger value="individual" className={triggerClass}>
                  <Heart className="w-5 h-5 mr-2" />
                  Individual Therapy
                </TabsTrigger>
                <TabsTrigger value="community" className={triggerClass}>
                  <Users className="w-5 h-5 mr-2" />
                  Community Programs
                </TabsTrigger>
                <TabsTrigger value="parental" className={triggerClass}>
                  <Heart className="w-5 h-5 mr-2" />
                  Parental Consultation
                </TabsTrigger>
                <TabsTrigger value="family" className={triggerClass}>
                  <Users className="w-5 h-5 mr-2" />
                  Family Psychotherapy
                </TabsTrigger>
              </TabsList>

              {/* Individual */}
              <TabsContent value="individual" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
                  <div>
                    <img src={IMG.individualTab} alt="Individual Therapy" className="rounded-2xl shadow-2xl" />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">Adult/Teen Psychotherapy</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I offer compassionate, culturally responsive, and trauma-informed therapy for adults, teens, children, couples and families.
                      My approach is warm, collaborative, and tailored to each client, drawing from CBT, DBT, mindfulness, solution-focused,
                      somatic, and strength-based approaches. I provide therapy in English, Urdu, and Hindi and can incorporate cultural and
                      spiritual perspectives when meaningful to the client.
                    </p>
                    <Tags items={["Anxiety", "Depression", "Burnout", "Trauma", "Grief & Loss", "Relationships"]} />
                    <Link to={createPageUrl("Contact")} state={{ scrollToTop: true }} className="block mt-8 bg-[#ffffff]">
                      Book Free Consultation
                    </Link>
                  </div>
                </div>
                <ExpectLearn
                  expect={[
                    { icon: Video, title: "Sessions", text: "60 minutes in length, held in a secure environment" },
                    {
                      icon: FileCheck,
                      title: "Safe and Confidential",
                      text: "This is a safe and confidential space where you can process your traumas and heal.",
                      textClass: "text-gray-600 my-2",
                    },
                    {
                      icon: Shield,
                      title: "Client Centered",
                      text: "Therapy is individualized as per the need of each individual. Evidence based modalities such as CBT, IFS, DBT, Mindfullness and Solution Focused Therapy are used to help the client heal and grow.",
                    },
                  ]}
                  learn={[
                    "Understanding your emotions, thoughts, and behavioural patterns",
                    "Identifying triggers and learning healthier ways to respond",
                    "Developing practical tools to manage anxiety, stress, and overwhelming emotions",
                    "Building stronger coping and emotional regulation skills",
                    "Recognizing patterns that may contribute to depression, low mood, or feeling stuck",
                    "Processing trauma and difficult past experiences at a pace that feels safe",
                    "Managing stress, fears, and overwhelming emotions",
                    "Creating meaningful changes that support healthier relationships with yourself and others",
                  ]}
                />
              </TabsContent>

              {/* Community */}
              <TabsContent value="community" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
                  <div className="space-y-6 order-2 lg:order-1">
                    <h2 className="text-4xl font-bold text-gray-900">Community Programs</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Today's communities are experiencing various barriers and inequities that can impact mental health. We support your
                      community with building knowledge, awareness and skills to manage mental health and create resilience.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We offer workshops for a variety of Mental Health and wellness topics to address Self Care, Managing Stress, Trauma and
                      Recovery, Relationships and Emotional Regulation. Customized workshops are available to meet your community's specific
                      needs.
                    </p>
                    <Link to={createPageUrl("Contact")} state={{ scrollToTop: true }} className="block mt-8">
                      <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-[hsl(var(--background))]">
                        Discuss Community Needs
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img src={IMG.community} alt="Community Programs" className="rounded-2xl shadow-2xl" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
                  {workshops.map((w) => (
                    <Card key={w.title} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${w.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <w.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{w.title}</h3>
                        <p className="text-gray-600">{w.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Parental */}
              <TabsContent value="parental" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">Parental Consultation </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Parenting can feel overwhelming, especially when your child is struggling emotionally or behaviourally. Parental
                      consultation offers a supportive space to better understand your child’s needs and explore practical ways to support them at
                      home.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 mb-3">Consultations may help with:</p>
                      <ul className="space-y-2">
                        <Check>Supporting children experiencing anxiety, fears, or low mood</Check>
                        <Check>Managing emotional outbursts and difficult behaviours</Check>
                        <Check>Building stronger parent-child communication</Check>
                        <Check>Setting healthy and consistent boundaries</Check>
                      </ul>
                    </div>
                    <Tags
                      items={[
                        "Parenting Strategies",
                        "Child Behaviour",
                        "Co-Parenting",
                        "Family Dynamics",
                        "Stress Management",
                        "Managing Big Emotions",
                        "Healthy Communication",
                      ]}
                    />
                    <Link to={createPageUrl("Contact")} state={{ scrollToTop: true }} className="inline-block mt-8">
                      <Button className={gradientBtn}>
                        Book Parental Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <img src={IMG.parentalTab} alt="Parental Consultation" className="rounded-2xl shadow-2xl" />
                  </div>
                </div>
                <div className="animate-on-scroll">
                  <img src={IMG.familySupport} alt="Family support session" className="rounded-2xl shadow-2xl w-full max-h-[480px] object-cover hidden" />
                </div>
              </TabsContent>

              {/* Family */}
              <TabsContent value="family" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">Family Psychotherapy </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Families can experience periods of stress, conflict, disconnection, or major life changes that affect everyone in the
                      household. Family therapy provides a supportive space where family members can better understand one another, improve
                      communication, and work together toward healthier relationships.
                    </p>
                    <Tags items={["Communication", "Conflict Resolution", "Life Transitions", "Parent-Child Dynamics", "Grief & Loss", "Healthy Boundaries"]} />
                    <Link to={createPageUrl("Contact")} state={{ scrollToTop: true }} className="inline-block mt-8">
                      <Button className={gradientBtn}>
                        Book Family Session
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <img src={IMG.familyTab} alt="Family Psychotherapy" className="rounded-2xl shadow-2xl" />
                  </div>
                </div>
                <ExpectLearn
                  expect={[
                    { icon: Video, title: "Sessions", text: "60 minutes in length, held in a secure environment" },
                    { icon: Shield, title: "Safe Environment", text: "Confidential and judgment-free space for every family member" },
                    { icon: MessageCircle, title: "Collaborative Approach", text: "Each voice is heard and respected as we work toward shared goals" },
                  ]}
                  learn={[
                    "Improve communication and active listening between family members",
                    "Resolve conflict with empathy and understanding",
                    "Navigate life transitions and changes together",
                    "Strengthen trust and emotional connection",
                    "Develop healthy boundaries within the family system",
                    "Build resilience as a family unit",
                  ]}
                />
              </TabsContent>
            </Tabs>
          </div>
          <BackToTop />
        </section>

        <section className="py-20 bg-gradient-to-br from-[#9D7438] via-[#E97D53] to-[#7DA6A9] relative overflow-hidden">
          <GradientBlobs />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Taking care of your mental health takes courage. Contact us today for a free 15 minute consultation.
            </p>
            <Link to={createPageUrl("Contact")} state={{ scrollToTop: true }} className="block mt-8">
              <Button className="bg-white text-[#2D4642] hover:bg-[#f9f4f0] text-lg px-10 py-6 shadow-2xl hover:shadow-[#2D4642]/50 transform hover:scale-105 transition-all duration-300">
                <span className="hidden sm:inline">Book Free Consultation</span>
                <span className="sm:hidden">Book Now</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
