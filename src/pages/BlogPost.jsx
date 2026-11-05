import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import BackToTop from "@/components/BackToTop";
import { createPageUrl } from "@/lib/utils";
import { categoryColors } from "@/data/site";
import { blogPosts } from "@/data/blogPosts";

const markdownComponents = {
  h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
  p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
  ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
  ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
  li: ({ node, ...props }) => <li className="ml-4" {...props} />,
  strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
  em: ({ node, ...props }) => <em className="italic" {...props} />,
  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-[#9D7438] pl-4 italic text-gray-700 my-6" {...props} />,
};

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to={createPageUrl("Blog")}>
            <Button className="bg-gradient-to-r from-[#9D7438] to-[#7DA6A9] hover:from-[#8d6428] hover:to-[#6d9699]">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image,
    datePublished: post.created_date,
    author: { "@type": "Person", name: "Beenish Jalil", jobTitle: "Registered Psychotherapist (Q)" },
    publisher: { "@type": "Organization", name: "Heart to Soul Psychotherapy" },
  };

  return (
    <>
      <SEO
        title={`${post.title} - Heart to Soul Psychotherapy Blog`}
        description={post.excerpt || post.title}
        ogImage={post.featured_image}
        type="article"
        structuredData={structuredData}
      />
      <article className="min-h-screen bg-gradient-to-br from-[#f9f4f0] to-[#efe2d3]">
        {post.featured_image && (
          <div className="relative h-[50vh] overflow-hidden">
            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to={createPageUrl("Blog")} className="inline-block mb-8">
            <Button variant="outline" className="hover:bg-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <article className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className={categoryColors[post.category]}>{post.category}</Badge>
              {post.read_time && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time} min read</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.created_date), "MMMM d, yyyy")}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            {post.excerpt && <p className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b">{post.excerpt}</p>}
            <div className="prose prose-lg prose-stone max-w-none">
              <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
            </div>
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9D7438] to-[#7DA6A9] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">HTS</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Heart to Soul Psychotherapy</h3>
                  <p className="text-gray-600">Mental Health &amp; Wellness</p>
                  <p className="text-sm text-gray-500 mt-2">Empowering individuals, families and communities with practical mental health support.</p>
                </div>
              </div>
            </div>
          </article>
          <div className="mt-12 bg-gradient-to-br from-[#9D7438] to-[#7DA6A9] rounded-2xl shadow-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-6 text-white/90">Contact us today for a free 15 minute consultation</p>
            <Link to={createPageUrl("Contact")} onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-white text-[#2D4642] hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
                <span className="hidden sm:inline">Book Free Consultation</span>
                <span className="sm:hidden">Book Now</span>
              </Button>
            </Link>
          </div>
          <BackToTop />
        </div>
      </article>
    </>
  );
}
