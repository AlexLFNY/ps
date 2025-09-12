import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getLessonBySlug, getLessonSlugs } from '@/lib/lessons'
import LessonLayout from '@/components/LessonLayout'
import CodeBlock from '@/components/CodeBlock'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const components = {
  CodeBlock,
  pre: ({ children, ...props }: any) => (
    <CodeBlock {...props}>
      {children}
    </CodeBlock>
  ),
  code: ({ children, className, ...props }: any) => {
    if (className?.includes('language-')) {
      return (
        <CodeBlock language={className.replace('language-', '')} {...props}>
          {children}
        </CodeBlock>
      )
    }
    return (
      <code className="bg-white/20 px-2 py-1 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    )
  },
}

export async function generateStaticParams() {
  const slugs = getLessonSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug)

  if (!lesson) {
    notFound()
  }

  return (
    <LessonLayout frontMatter={lesson.frontMatter} slug={lesson.slug}>
      <MDXRemote
        source={lesson.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </LessonLayout>
  )
}