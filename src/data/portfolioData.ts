import type { Project } from '@/types/project'
import type { UserProfile } from '@/types/user'
import type { Experience } from '@/types/exp'
import type { Tech } from '@/types/techs'

export const myProfile: UserProfile = {
  name: 'Al Ahmer Rhoden M. Timpahan',
  title: 'Junior Developer',
  imageUrl: '/images/portraitA.webp',
  location: 'Taguig City, Philippines',
  email: 'ahmertimpahan297@gmail.com',
  phone: '0920-460-5839',
  freelance: 'Available',
  bio: 'A Full-Stack Developer with a solid foundation in NestJS, Vue.js, and Flutter. I am passionate about building applications that don\'t just work, but are built to last - leveraging MikroORM for precise data modeling and exploring Clean Architecture patterns like Hexagonal and DDD. I thrive on turning complex backend logic into fluid, high-performance user experiences across web and mobile.',
}

export const techs: Tech[] = [
  { name: 'Flutter', icon: 'vi-file-type-flutter' },
  { name: 'React', icon: 'vi-file-type-reactjs' },
  { name: 'Vue.js', icon: 'vi-file-type-vue' },
  { name: 'Node.js', icon: 'vi-file-type-node' },
  { name: 'NestJS', icon: 'si-nestjs' },
  { name: 'Postgres', icon: 'si-postgresql' },
  { name: 'MySQL', icon: 'vi-file-type-mysql' },
]

export const experiences: Experience[] = [
  {
    id: 1,
    dateRange: 'Feb 2024 – Oct 2024',
    title: 'Web Development (Vue & Laravel)',
    description:
      '• Developed modular components in Vue.js for an educational platform.\n• Built backend logic using Laravel Eloquent to streamline data management.\n• Participated in iterative debugging to improve overall system stability.',
  },
  {
    id: 2,
    dateRange: 'Aug 2025 – Nov 2025',
    title: 'Platitao - Mobile App Development (Flutter)',
    description:
      '• Contributed to a mobile marketplace app with plant-scanning technology.\n• Integrated location services and secure role-based access for users.\n• Maintained clean code practices using Git for collaborative version control.',
  },
  {
    id: 3,
    dateRange: 'Sept 2025 – Dec 2025',
    title: 'DepEd PDS System - OJT',
    description:
      '• Built a web-based PDS system to automate manual applicant data entry.\n• Implemented AJAX lookups to enhance form performance and accuracy.\n• Collaborated with the IT team to digitize and validate high-volume records.',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plantitao App',
    description:
      'Flutter marketplace featuring plant scanning, buyer/seller roles, and inventory tracking.',
    technologies: ['Dart', 'Flutter', 'Git', 'Supabase'],
    imageUrl: '/images/plant_img1.png',
    githubUrl: 'https://github.com/meerccie/plant_scanning-identification',
    category: 'Mobile',
  },
  {
    id: 2,
    title: 'DepEd PDS System',
    description: 'Web-based Personal Data Sheet system using AJAX to automate record fetching.',
    technologies: ['React', 'TypeScript', 'Git'],
    imageUrl: '/images/depedLgo.jpg',
    githubUrl: 'https://github.com/meerccie/DepEdForms',
    category: 'Web',
    liveDemoUrl: 'https://dep-ed-forms.vercel.app/',
  },
  {
      id: 3,
    title: 'DevFocus - Repository Security & Vulnerability Scanner',
    description: 'A full-stack DevSecOps tool designed to audit GitHub repositories for security vulnerabilities. It automatically identifies high-entropy strings, exposed credentials, and sensitive configuration files, providing a real-time risk assessment score.',
    technologies: ['Vue', 'TypeScript', 'Git', 'Node.js', 'NestJS', 'Octokit', 'Github GraphQL API'],
    imageUrl: '/images/devfocus-img.jpg',
    githubUrl: 'https://github.com/meerccie/devfocus',
    category: 'Web',
    liveDemoUrl: 'https://devfocus-roan.vercel.app/',
  },
]
