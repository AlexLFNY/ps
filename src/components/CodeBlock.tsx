'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({ 
  children, 
  language = 'python', 
  title,
  showLineNumbers = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const lines = children.trim().split('\n')

  return (
    <div className="relative my-6">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-xl border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="bg-gray-900 rounded-xl overflow-hidden relative">
        {/* Header with language and copy button */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-xs text-yellow-400 font-medium uppercase">
            {language}
          </span>
          <button
            onClick={copyToClipboard}
            className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            {copied ? '✓ Copié!' : '📋 Copier'}
          </button>
        </div>

        {/* Code content */}
        <div className="overflow-x-auto">
          <pre className="p-4 text-sm leading-relaxed">
            {showLineNumbers ? (
              <div className="flex">
                {/* Line numbers */}
                <div className="text-gray-500 text-right pr-4 select-none">
                  {lines.map((_, index) => (
                    <div key={index + 1} className="leading-6">
                      {index + 1}
                    </div>
                  ))}
                </div>
                {/* Code */}
                <div className="flex-1">
                  <code className="text-gray-100 font-mono">
                    {lines.map((line, index) => (
                      <div key={index} className="leading-6">
                        {line || '\n'}
                      </div>
                    ))}
                  </code>
                </div>
              </div>
            ) : (
              <code className="text-gray-100 font-mono block leading-6">
                {children}
              </code>
            )}
          </pre>
        </div>
      </div>
    </div>
  )
}