// Note: like the original, the heading always reads "Heart to Soul Psychotherapy";
// the `title` prop is accepted but not displayed.
export default function PageHero({ backgroundImage, title, subtitle, height = "60vh" }) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20" style={{ minHeight: height }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D4642]/80 via-[#9D7438]/70 to-[#2D4642]/80" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-[hsl(var(--popover))]">
          Heart to Soul Psychotherapy
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl leading-relaxed drop-shadow-2xl text-[hsl(var(--accent-foreground))]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
