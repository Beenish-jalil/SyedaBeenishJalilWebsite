// Blog posts. The original site loaded these from its Base44 "BlogPost" entity,
// which currently has no published posts — so the Blog page shows its empty state.
//
// Add posts here to publish them. `content` is Markdown.
// {
//   id: "1",
//   slug: "my-first-post",
//   title: "My First Post",
//   excerpt: "A short summary shown on the blog listing.",
//   content: "## Heading\n\nBody text...",
//   category: "Mental Health", // Mental Health | Nutrition | Lifestyle | Workplace Wellness | Self Care
//   featured_image: "/images/...",
//   read_time: 5,
//   created_date: "2026-11-05",
//   published: true,
// }
export const blogPosts = [];

export function getPublishedPosts() {
  return blogPosts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
}
