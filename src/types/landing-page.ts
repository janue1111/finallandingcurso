import { ReactNode } from 'react';

export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Author {
  name: string;
  bio: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LandingPageProps {
  mainTitle: string;
  subTitle: string;
  videoUrl: string;
  ctaText: string;
  benefits: Benefit[];
  testimonials: Testimonial[];
  partnerLogos?: string[];
  steps: Step[];
  author: Author;
  price: number;
  discountPrice: number;
  bonuses: string[];
  faq: FAQItem[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}