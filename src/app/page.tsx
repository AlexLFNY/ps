import Link from 'next/link'
import { getAllLessons } from '@/lib/lessons'

export default function Home() {
  const lessons = getAllLessons()

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
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Python Lessons
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Apprendre la programmation Python en Seconde
          </p>
          <div className="glass-card inline-block px-6 py-3 text-sm">
            🎓 Cours interactifs • 💻 Exercices pratiques • 🚀 Progression adaptée
          </div>
        </div>

        {/* Lessons List */}
        <div className="grid gap-6">
          {lessons.length === 0 ? (
            <div className="glass-card p-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Aucune leçon disponible</h2>
              <p className="opacity-80">
                Les leçons seront bientôt ajoutées dans le dossier content/lessons/
              </p>
            </div>
          ) : (
            lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className="glass-card p-6 block group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {lesson.frontMatter.chapter}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {lesson.frontMatter.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {lesson.frontMatter.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                        lesson.frontMatter.difficulty
                      )}`}
                    >
                      {lesson.frontMatter.difficulty}
                    </span>
                    <span className="text-white/60 text-sm">
                      {lesson.frontMatter.duration} min
                    </span>
                    <div className="text-yellow-400 text-xl">→</div>
                  </div>
                </div>
                
                {lesson.frontMatter.objectives && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {lesson.frontMatter.objectives.slice(0, 3).map((objective, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80"
                      >
                        • {objective}
                      </span>
                    ))}
                    {lesson.frontMatter.objectives.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/60">
                        +{lesson.frontMatter.objectives.length - 3} autres
                      </span>
                    )}
                  </div>
                )}
              </Link>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-white/60 mt-12">
          <p className="text-sm">
            Plateforme d'apprentissage Python pour lycéens • Niveau Seconde
          </p>
        </div>
      </div>
    </div>
  )
}