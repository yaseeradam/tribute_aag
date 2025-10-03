import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Achievement = {
  icon: LucideIcon;
  title: string;
  description: string;
  year: string;
};

export type Institution = {
  id: string;
  name: string;
  description: string;
};

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type Quote = {
  text: string;
  author: string;
};

export type Testimonial = {
  id: string;
  text: string;
  author: string;
  relation: string;
};

export type GuestbookEntry = {
  name: string;
  message: string;
  date: string;
};
