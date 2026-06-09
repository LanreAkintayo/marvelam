// ── Portfolio Types ──────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  images: string[];
  skillsUsed: string[];
  order: number;
};

export type Skill = {
  name: string;
  icon: string;
  category: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image?: string;
};

export type SiteSettings = {
  heroHeadline: string;
  heroSubtitle: string;
  email: string;
  phone: string;
  socialLinks: { platform: string; url: string }[];
};

export type AboutData = {
  bio: string;
  photoUrl?: string;
  resumeUrl?: string;
};
