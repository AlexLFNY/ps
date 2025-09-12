import Link from 'next/link'
import { LessonFrontMatter } from '@/lib/lessons'

interface LessonLayoutProps {
  children: React.ReactNode
  frontMatter: LessonFrontMatter
  slug: string
}

export default function LessonLayout({ children, frontMatter, slug }: LessonLayoutProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'débutant':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'intermédiaire':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'avancé':
        return 'bg-red-500/20 text-red-300 border-red-500/30'
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <div className="lesson-nav">
        <Link href="/" className="nav-btn">
          ← Accueil
        </Link>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Lesson Header */}
        <div className="glass-card p-8 mb-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                {frontMatter.chapter}
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text mb-2">
                  {frontMatter.title}
                </h1>
                <p className="text-white/80">
                  {frontMatter.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
                  frontMatter.difficulty
                )}`}
              >
                {frontMatter.difficulty}
              </span>
              <span className="text-white/60 text-sm">
                ⏱️ {frontMatter.duration} minutes
              </span>
            </div>
          </div>

          {/* Objectives */}
          {frontMatter.objectives && frontMatter.objectives.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-300">
                🎯 Objectifs de cette leçon
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {frontMatter.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-white/90 text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lesson Content */}
        <div className="glass-card p-8 prose prose-invert prose-lg max-w-none">
          <div className="lesson-content text-white">
            {children}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center mt-12">
          <Link href="/" className="glass-card px-6 py-3 text-white text-center">
            ← Retour aux leçons
          </Link>
        </div>
      </div>
    </div>
  )
}