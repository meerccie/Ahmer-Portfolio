const KEYWORDS = [
  'Laravel',
  'Vue.js',
  'Vue',
  'Flutter',
  'Eloquent ORM',
  'AJAX',
  'PHP',
  'database',
  'architecture',
  'React',
  'Eloquent',
]

export const highlightTech = (text: string): string => {
  if (!text) return ''

  let highlightedText = text
  KEYWORDS.forEach((word) => {
    const regex = new RegExp(`(${word})`, 'gi')
    highlightedText = highlightedText.replace(
      regex,
      '<span class="text-emerald-400 font-bold">$1</span>',
    )
  })
  return highlightedText
}

export const formatBio = (name: string, bio: string): string => {
  const highlightedBio = highlightTech(bio)
  return `<span class="text-white font-bold">${name}</span>.<br />${highlightedBio}`
}
