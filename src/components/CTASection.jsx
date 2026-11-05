import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";

export function GradientBlobs() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
    </div>
  );
}

export default function CTASection({
  title = "Ready to Start Your Journey?",
  description = "Taking care of your mental health takes courage. Contact us today for a free consultation.",
  buttonText = "Book Free Consultation",
  buttonLink = "Contact",
}) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#9D7438] via-[#E97D53] to-[#7DA6A9] relative overflow-hidden">
      <GradientBlobs />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">{description}</p>
        <Link to={createPageUrl(buttonLink)}>
          <Button className="bg-white text-[#2D4642] hover:bg-[#f9f4f0] text-lg px-10 py-6 shadow-2xl hover:shadow-[#2D4642]/50 transform hover:scale-105 transition-all duration-300">
            <span className="hidden sm:inline">{buttonText}</span>
            <span className="sm:hidden">Book Now</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
