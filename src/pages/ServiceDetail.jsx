import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Brain, CircleCheckBig, Heart, MessageCircle, Shield, Target, TrendingUp, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BackToTop from "@/components/BackToTop";
import { GradientBlobs } from "@/components/CTASection";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { createPageUrl } from "@/lib/utils";
import { IMG } from "@/data/site";

// Reachable at /service/:serviceId (not linked from the nav in the original, but routed).
const services = {
  "adult-teen-psychotherapy": {
    title: "Adult/Teen Psychotherapy",
    heroImage: IMG.adultTeenCard,
    image: IMG.individualTab,
    description:
      "I offer compassionate, culturally responsive, and trauma-informed therapy for adults, teens, children, couples and families. My approach is warm, collaborative, and tailored to each client, drawing from CBT, DBT, mindfulness, solution-focused, somatic, and strength-based approaches. I provide therapy in English, Urdu, and Hindi and can incorporate cultural and spiritual perspectives when meaningful to the client.",
    tags: ["Anxiety", "Depression", "Burnout", "Trauma", "Grief & Loss", "Relationships"],
    ctaLabel: "Book Free Consultation",
    gradient: "from-[#E97D53] to-[#9D7438]",
    expect: [
      { icon: Video, title: "Sessions", text: "60 minutes in length, held in a secure environment" },
      { icon: Target, title: "Safe and Confidential", text: "This is a safe and confidential space where you can process your traumas and heal." },
      {
        icon: Shield,
        title: "Client Centered",
        text: "Therapy is individualized as per the need of each individual. Evidence based modalities such as CBT, IFS, DBT, Mindfulness and Solution Focused Therapy are used to help the client heal and grow.",
      },
    ],
    learn: [
      "Understanding your emotions, thoughts, and behavioural patterns",
      "Identifying triggers and learning healthier ways to respond",
      "Developing practical tools to manage anxiety, stress, and overwhelming emotions",
      "Building stronger coping and emotional regulation skills",
      "Recognizing patterns that may contribute to depression, low mood, or feeling stuck",
      "Processing trauma and difficult past experiences at a pace that feels safe",
      "Managing stress, fears, and overwhelming emotions",
      "Creating meaningful changes that support healthier relationships with yourself and others",
    ],
  },
  "community-programs": {
    title: "Community Programs",
    heroImage: IMG.communityCard,
    image: IMG.community,
    description:
      "Today's communities are experiencing various barriers and inequities that can impact mental health. I support your community with building knowledge, awareness and skills to manage mental health and create resilience.",
    description2:
      "I offer workshops for a variety of Mental Health and wellness topics to address Self Care, Managing Stress, Trauma and Recovery, Relationships and Emotional Regulation. Customized workshops are available to meet your community's specific needs.",
    ctaLabel: "Discuss Community Needs",
    gradient: "from-[#7DA6A9] to-[#2D4642]",
    workshops: [
      { icon: Heart, title: "Self Care", description: "Learn practical self-care strategies and build sustainable wellness routines", color: "from-[#E97D53] to-[#C5A069]" },
      { icon: Brain, title: "Emotional Regulation", description: "Build skills to understand, manage, and respond to emotions in healthy ways", color: "from-[#7DA6A9] to-[#9D7438]" },
      { icon: Brain, title: "Managing Stress", description: "Develop effective tools for managing stress in daily life and challenging times", color: "from-[#7DA6A9] to-[#2D4642]" },
      { icon: TrendingUp, title: "Trauma & Recovery", description: "Understand trauma responses and pathways to healing and resilience", color: "from-[#E97D53] to-[#9D7438]" },
    ],
  },
  "parental-consultation": {
    title: "Parental Consultation",
    heroImage: IMG.parentalCard,
    image: IMG.parentalTab,
    description:
      "Parenting can feel overwhelming, especially when your child is struggling emotionally or behaviourally. Parental consultation offers a supportive space to better understand your child's needs and explore practical ways to support them at home.",
    helpList: [
      "Supporting children experiencing anxiety, fears, or low mood",
      "Managing emotional outbursts and difficult behaviours",
      "Building stronger parent-child communication",
      "Setting healthy and consistent boundaries",
    ],
    tags: ["Parenting Strategies", "Child Behaviour", "Co-Parenting", "Family Dynamics", "Stress Management", "Managing Big Emotions", "Healthy Communication"],
    ctaLabel: "Book Parental Consultation",
    gradient: "from-[#C5A069] to-[#9D7438]",
  },
  "family-psychotherapy": {
    title: "Family Psychotherapy",
    heroImage: IMG.familyCard,
    image: IMG.familyTab,
    description:
      "Families can experience periods of stress, conflict, disconnection, or major life changes that affect everyone in the household. Family therapy provides a supportive space where family members can better understand one another, improve communication, and work together toward healthier relationships.",
    tags: ["Communication", "Conflict Resolution", "Life Transitions", "Parent-Child Dynamics", "Grief & Loss", "Healthy Boundaries"],
    ctaLabel: "Book Family Session",
    gradient: "from-[#7DA6A9] to-[#9D7438]",
    expect: [
      { icon: Video, title: "Sessions", text: "60 minutes in length, held in a secure environment" },
      { icon: Shield, title: "Safe Environment", text: "Confidential and judgment-free space for every family member" },
      { icon: MessageCircle, title: "Collaborative Approach", text: "Each voice is heard and respected as we work toward shared goals" },
    ],
    learn: [
      "Improve communication and active listening between family members",
      "Resolve conflict with empathy and understanding",
      "Navigate life transitions and changes together",
      "Strengthen trust and emotional connection",
      "Develop healthy boundaries within the family system",
      "Build resilience as a family unit",
    ],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const s = services[serviceId];
  useScrollAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!s) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to={createPageUrl("Services")}>
            <Button className="bg-gradient-to-r from-[#9D7438] to-[#7DA6A9] text-white">Back to Services</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${s.title} - Heart to Soul Psychotherapy`} />
      <main className="min-h-screen">
        <PageHero backgroundImage={s.heroImage} title={s.title} subtitle="Comprehensive mental health support tailored to your needs" height="50vh" />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <img src={s.image} alt={s.title} className="rounded-2xl shadow-2xl" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">{s.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{s.description}</p>
                {s.description2 && <p className="text-lg text-gray-700 leading-relaxed">{s.description2}</p>}
                {s.helpList && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Consultations may help with:</p>
                    <ul className="space-y-2">
                      {s.helpList.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-gray-700">
                          <CircleCheckBig className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {s.tags && (
                  <div className="flex flex-wrap gap-3">
                    {s.tags.map((t) => (
                      <span key={t} className="px-4 py-2 rounded-full text-sm font-medium text-[#b4772c] bg-[#f8efe4]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <Link to={createPageUrl("Contact")} className="inline-block mt-4">
                  <Button
                    className={`bg-gradient-to-r ${s.gradient} hover:opacity-90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    {s.ctaLabel}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {s.workshops && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-on-scroll">
                {s.workshops.map((w) => (
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
            )}

            {s.expect && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 animate-on-scroll">
                <Card className="border-none shadow-xl bg-gradient-to-br from-white to-[#f9f4f0]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Target className="w-7 h-7 text-[#9D7438]" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {s.expect.map((e) => (
                      <div key={e.title} className="flex items-start gap-3">
                        <e.icon className="w-5 h-5 text-[#9D7438] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">{e.title}</p>
                          <p className="text-gray-600">{e.text}</p>
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
                    {s.learn.map((l) => (
                      <div key={l} className="flex items-start gap-2">
                        <CircleCheckBig className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{l}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#9D7438] via-[#E97D53] to-[#7DA6A9] relative overflow-hidden">
          <GradientBlobs />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Taking care of your mental health takes courage. Contact me today for a free 15 minute consultation.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-white text-[#2D4642] hover:bg-gray-100 text-lg px-10 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <BackToTop />
        </section>
      </main>
    </>
  );
}
