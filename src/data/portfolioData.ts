import type { UserProfile } from '@/types/user'
import type { Project } from '@/types/project'

export const myProfile: UserProfile = {
  name: 'Al Ahmer Rhoden M. Timpahan',
  title: 'Junior Developer',
  location: 'Taguig City, Philippines',
  email: 'ahmertimpahan297@gmail.com',
  phone: '0920-460-5839',
  experience: 'Junior Developer',
  freelance: 'Available',
  bio: 'Junior Developer with hands-on experience building web and mobile applications from concept to working prototypes. Strong foundation in programming, debugging, and integrating APIs.',
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plantitao App',
    description:
      'A Flutter-based marketplace with plant scanning technology and buyer/seller roles.',
    technologies: ['Dart', 'Flutter', 'Git', 'Supabase'],
    imageUrl: '/images/plantitao.jpg',
    githubUrl: 'https://github.com/meerccie/plant_scanning-identification',
    featured: true,
    category: 'Mobile',
  },
  {
    id: 2,
    title: 'DepEd PDS System',
    description: 'Web-based Personal Data Sheet system with AJAX-based record fetching.',
    // Updated tech stack from Vue to React
    technologies: ['React', 'TypeScript', 'Git'],
    imageUrl: '/images/pds.jpg',
    githubUrl: 'https://github.com/meerccie/DepEdForms',
    featured: false,
    category: 'Web',
  },
]
