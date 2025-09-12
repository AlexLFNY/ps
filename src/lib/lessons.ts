import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface LessonFrontMatter {
  title: string
  chapter: number
  difficulty: 'débutant' | 'intermédiaire' | 'avancé'
  duration: number
  description: string
  keywords: string[]
  objectives: string[]
}

export interface Lesson {
  slug: string
  frontMatter: LessonFrontMatter
  content: string
}

const lessonsDirectory = path.join(process.cwd(), 'content/lessons')

export function getAllLessons(): Lesson[] {
  if (!fs.existsSync(lessonsDirectory)) {
    return []
  }
  
  const lessonFolders = fs.readdirSync(lessonsDirectory)
  
  const lessons = lessonFolders
    .filter(folder => {
      const lessonPath = path.join(lessonsDirectory, folder)
      return fs.statSync(lessonPath).isDirectory()
    })
    .map(folder => {
      const lessonPath = path.join(lessonsDirectory, folder, 'index.md')
      
      if (!fs.existsSync(lessonPath)) {
        return null
      }
      
      const fileContents = fs.readFileSync(lessonPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: folder,
        frontMatter: data as LessonFrontMatter,
        content,
      }
    })
    .filter(Boolean) as Lesson[]
  
  return lessons.sort((a, b) => a.frontMatter.chapter - b.frontMatter.chapter)
}

export function getLessonBySlug(slug: string): Lesson | null {
  const lessonPath = path.join(lessonsDirectory, slug, 'index.md')
  
  if (!fs.existsSync(lessonPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(lessonPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    frontMatter: data as LessonFrontMatter,
    content,
  }
}

export function getLessonSlugs(): string[] {
  if (!fs.existsSync(lessonsDirectory)) {
    return []
  }
  
  return fs
    .readdirSync(lessonsDirectory)
    .filter(folder => {
      const lessonPath = path.join(lessonsDirectory, folder)
      return fs.statSync(lessonPath).isDirectory()
    })
}