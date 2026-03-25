export type ProjectCategory = 'Mobile' | 'Web' | 'Fullstack'

export interface Project {
  id: number
  title: string // e.g., "Plantitao App"
  description: string // e.g., "Built a Flutter-based marketplace..." [cite: 23]
  technologies: string[] // e.g., ["Dart", "Flutter", "Firebase"]
  imageUrl: string
  category: ProjectCategory // Helps with your "All/Vue/TypeScript" filtering logic
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}
