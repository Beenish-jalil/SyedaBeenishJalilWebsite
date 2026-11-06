export const SITE_URL = "https://hearttosoulpsychotherapy.ca";

export const CONTACT_EMAIL = "s.beenishjalil@gmail.com";

export const siteInfo = {
  phone: "(437) 747-6095",
  psychologyTodayUrl: "https://www.psychologytoday.com/ca/therapists/karen-a-smith-mississauga-on/888409",
};

export const categoryColors = {
  "Mental Health": "bg-[#f3e6d4] text-[#9D7438]",
  Nutrition: "bg-[#d4e5e6] text-[#2D4642]",
  Lifestyle: "bg-[#fce4d6] text-[#E97D53]",
  "Workplace Wellness": "bg-[#e8ddd0] text-[#9D7438]",
  "Self Care": "bg-[#e0d4c0] text-[#C5A069]",
};

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const IMG = {
  logo: img("86b9ad87b_WhatsAppImage2026-06-24at81843PM.jpeg"),
  favicon: img("08cf16bb5_logo.jpg"),
  homeHero: img("8188ab8bb_image.png"),
  beenishHome: img("a096285d2_WhatsApp_Image_2026-11-02_at_104105_AM.jpeg"),
  beenishAbout: img("1d5ff112f_WhatsApp_Image_2026-08-242.jpeg"),
  ogDefault: img("3029c42ef_AdobeStock_1624095881.jpg"),
  adultTeenCard: img("2fec357ad_AdobeStock_1526421917.jpg"),
  communityCard: img("e5dce98c1_LogosGroupWorkshop.jpg"),
  parentalCard: img("88d28faab_AdobeStock_246220506.jpg"),
  familyCard: img("29dc37629_ChatGPT_Image_Aug_23__2026__09_29_58_PM.png"),
  individualTab: img("23da179de_ChatGPT_Image_Aug_24__2026__06_01_16_PM.png"),
  parentalTab: img("d55d7b55f_ChatGPT_Image_Aug_23__2026__10_21_53_PM.png"),
  familyTab: img("7699ce981_ChatGPT_Image_Aug_24__2026__05_38_05_PM.png"),
  servicesHero: img("a8b1f9ee3_AdobeStock_246220506.jpg"),
  faqHero: img("cd6e5670c_AdobeStock_720372143.jpg"),
  orgTeam: img("02b629da3_AdobeStock_398850120.jpg"),
  aboutHero: img("unsplash-1522202176988-66273c2fd55f.jpg"),
  contactHero: img("unsplash-1516321497487-e288fb19713f.jpg"),
  community: img("unsplash-1529156069898-49953e39b3ac.jpg"),
  familySupport: img("unsplash-1503454537195-1dcabb73ffb9.jpg"),
};
