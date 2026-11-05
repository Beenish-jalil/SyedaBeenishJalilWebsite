import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Matches the original: the button is rendered but hidden; the wrapper's top padding remains.
export default function BackToTop() {
  return (
    <div className="flex justify-center pt-8">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        variant="outline"
        className="border-2 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 hidden"
      >
        <ArrowUp className="w-4 h-4 mr-2" />
        Back to Top
      </Button>
    </div>
  );
}
