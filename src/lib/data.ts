import { BookOpen, Award, University, Users, Star, GraduationCap } from 'lucide-react';
import type { NavLink, Achievement, Institution, Quote, Testimonial } from './definitions';

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
    name: "Maryam Abacha American University of Nigeria (MAAUN)",
    description: "Founded in 2021 in Kano, Nigeria. A leading private university offering American-style education with programs in Engineering, Medicine, Business, and Liberal Arts.",
    website: "https://maaun.edu.ng"
  },
  {
    id: "institution-2",
    name: "Maryam Abacha American University of Niger (MAAUN Niger)",
    description: "Established in 2012 in Maradi, Niger Republic. The first English-speaking American university in Niger, offering quality higher education to West African students.",
    website: "https://maaun.edu.ne"
  },
  {
    id: "institution-3",
    name: "Franco-British International University (FBIU)",
    description: "Founded in 2023 in Kaduna, Nigeria. A bilingual institution offering programs in both English and French, promoting international collaboration and cultural exchange.",
    website: "https://fbiu.edu.ng"
  },
  {
    id: "institution-4",
    name: "Canadian University of Bangladesh (CUB)",
    description: "Established in 2016 in Dhaka, Bangladesh. An international university providing Canadian-standard education in South Asia, expanding Prof. Gwarzo's global educational vision.",
    website: "https://cub.edu.bd"
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
        text: "Prof. Gwarzo transformed my life through education. As a scholarship recipient at MAAUN, I witnessed firsthand his commitment to empowering African youth. Today, I'm a successful engineer because he believed in accessible quality education.",
        author: "Aisha Mohammed",
        relation: "MAAUN Graduate, Class of 2019"
    },
    {
        id: "testimonial-2",
        text: "As Vice-Chancellor, I've seen Prof. Gwarzo's unwavering dedication to academic excellence. His vision of creating world-class universities in Africa has inspired a generation of educators and administrators across the continent.",
        author: "Prof. Ibrahim Garba",
        relation: "Vice-Chancellor, MAAUN Niger"
    },
    {
        id: "testimonial-3",
        text: "The impact of MAAUN on our community in Maradi cannot be overstated. Prof. Gwarzo didn't just build a university; he created opportunities, jobs, and hope for thousands of families. He's a true visionary leader.",
        author: "Honorable Amadou Boubacar",
        relation: "Mayor of Maradi, Niger Republic"
    },
    {
        id: "testimonial-4",
        text: "Prof. Gwarzo's mentorship shaped my academic career. His emphasis on research excellence and international collaboration has made MAAUN a beacon of higher education in West Africa. I'm proud to be part of his legacy.",
        author: "Dr. Khadija Aliyu",
        relation: "Dean of Engineering, MAAUN Nigeria"
    },
    {
        id: "testimonial-5",
        text: "Through his scholarship programs, Prof. Gwarzo gave me the chance to study medicine when my family couldn't afford it. Today, I serve my community as a doctor. His generosity continues to change lives across Africa.",
        author: "Dr. Maryam Sani",
        relation: "Medical Graduate, MAAUN"
    },
    {
        id: "testimonial-6",
        text: "As President of AAPU, Prof. Gwarzo has been instrumental in elevating the standards of private universities across Africa. His leadership and vision have transformed the landscape of higher education on our continent.",
        author: "Prof. Sarah Anyang Agbor",
        relation: "Former Commissioner for Education, African Union"
    }
];


