export type ProjectCategory = 'Mobile' | 'Web' | 'Fullstack'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  category: ProjectCategory
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
