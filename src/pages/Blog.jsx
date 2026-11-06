import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { createPageUrl } from "@/lib/utils";
import { categoryColors, IMG } from "@/data/site";
import { getPublishedPosts } from "@/data/blogPosts";

export default function Blog() {
  useScrollAnimation();
  const posts = getPublishedPosts();

  return (
    <>
      <SEO
        title="Blog - Heart to Soul Psychotherapy | Mental Health & Wellness Insights"
        description="Insights, tips, and strategies for better mental health and wellbeing from Heart to Soul Psychotherapy."
        keywords="mental health blog, wellness tips, self-care advice"
        noindex={posts.length === 0} // keep the empty blog out of search until posts exist
      />
      <main className="min-h-screen">
        <PageHero
          backgroundImage={IMG.faqHero}
          title="Mental Health & Wellness Blog"
          subtitle="Insights, tips, and strategies for better mental health and wellbeing"
        />
        <section className="py-20 bg-gradient-to-br from-[#f9f4f0] to-[#efe2d3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center text-gray-600">No blog posts yet. Check back soon!</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <Card
                    key={post.id}
                    className="animate-on-scroll border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={categoryColors[post.category]}>{post.category}</Badge>
                        {post.read_time && (
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{post.read_time} min read</span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-[#9D7438] transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(post.created_date), "MMM d, yyyy")}</span>
                        </div>
                        <Link
                          to={`${createPageUrl("BlogPost")}?slug=${post.slug}`}
                          className="text-[#9D7438] hover:text-[#9D7438] font-medium flex items-center gap-1 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
          <BackToTop />
        </section>
      </main>
    </>
  );
}
