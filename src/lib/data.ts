import { BookOpen, Award, University, Users, Star, GraduationCap } from 'lucide-react';
import type { NavLink, Achievement, Institution, Quote, Testimonial, GuestbookEntry } from './definitions';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/quotes', label: 'Testimonials' },
  { href: '/legacy', label: 'Legacy' },
  { href: '/guestbook', label: 'Guestbook' },
];

export const achievements: Achievement[] = [
  {
    icon: GraduationCap,
    year: "2012",
    title: "Founder, Maryam Abacha American University of Niger",
    description: "Established the first English-speaking university in the Republic of Niger, revolutionizing higher education in the region."
  },
  {
    icon: Award,
    year: "2015",
    title: "Forbes Best of Africa Award",
    description: "Recognized for outstanding contributions to education and human development in Africa."
  },
  {
    icon: University,
    year: "2021",
    title: "Founder, Maryam Abacha American University of Nigeria",
    description: "Expanded his vision by founding a sister university in Kano, Nigeria, to provide world-class education locally."
  },
  {
    icon: Star,
    year: "2022",
    title: "President of Association of African Private Universities (AAPU)",
    description: "Elected to lead the association, championing the cause of private higher education across the continent."
  },
  {
    icon: Users,
    year: "2023",
    title: "Founder, Franco-British International University",
    description: "Launched a new university in Kaduna, Nigeria, fostering bilingual education and international collaboration."
  },
  {
    icon: BookOpen,
    year: "Ongoing",
    title: "Champion of Youth Empowerment",
    description: "Continuously supports thousands of students through scholarships, grants, and mentorship programs."
  }
];

export const institutions: Institution[] = [
  {
    id: "institution-1",
    name: "Maryam Abacha American University of Nigeria",
    description: "A leading private university in Kano, Nigeria, offering a diverse range of undergraduate and postgraduate programs with a focus on innovation and research."
  },
  {
    id: "institution-2",
    name: "Maryam Abacha American University of Niger",
    description: "The premier English-speaking university in Maradi, Niger Republic, known for its quality education and vibrant international student community."
  },
  {
    id: "institution-3",
    name: "Franco-British International University, Kaduna",
    description: "An innovative institution in Kaduna, Nigeria, bridging linguistic divides by offering bilingual education in French and English."
  },
  {
    id: "institution-4",
    name: "Canadian University of Bangladesh",
    description: "A notable international venture, reflecting a commitment to global education and fostering ties between nations through academic excellence."
  }
];

export const quotes: Quote[] = [
    {
        text: "Education is the most powerful weapon which you can use to change the world, and it is our duty to wield it for the betterment of all.",
        author: "Prof. Adamu Abubakar Gwarzo"
    },
    {
        text: "The future of Africa lies in the minds of its youth. We must invest in them, empower them, and give them the tools to build a prosperous continent.",
        author: "Prof. Adamu Abubakar Gwarzo"
    },
    {
        text: "Do not be afraid to dream big. With determination and faith, no ambition is too great to achieve.",
        author: "Prof. Adamu Abubakar Gwarzo"
    }
];

export const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        text: "Professor Gwarzo's vision for accessible education gave me the opportunity to pursue my dreams. His university opened doors I never thought possible. I am forever grateful for his leadership and generosity.",
        author: "Amina Yusuf",
        relation: "Alumna, MAAUN"
    },
    {
        id: "testimonial-2",
        text: "Working alongside Prof. Gwarzo has been a masterclass in leadership. His tireless dedication to creating institutions that will outlast him is a testament to his selfless character and profound legacy.",
        author: "Dr. Fatima Bello",
        relation: "Colleague"
    },
    {
        id: "testimonial-3",
        text: "The establishment of the university in our community has brought not just education, but economic growth and hope. Prof. Gwarzo is more than an educationist; he is a community builder.",
        author: "Chief Musa Adebayo",
        relation: "Community Leader"
    }
];

export const guestbookEntries: GuestbookEntry[] = [
    {
        name: "John Doe",
        message: "An amazing tribute to an inspiring leader. Thank you for sharing his story.",
        date: "2 hours ago"
    },
    {
        name: "Jane Smith",
        message: "Professor Gwarzo is a true visionary. His work in education has changed so many lives. May he continue to be a beacon of hope.",
        date: "1 day ago"
    },
     {
        name: "David Chen",
        message: "What a beautiful website. It perfectly captures the essence of his contributions. Well done!",
        date: "3 days ago"
    }
];
