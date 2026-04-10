"use client"

import { articleData } from "@/lib/data"

interface ArticleScreenProps {
  articleIndex: number
  onNavigate: (tab: string) => void
}

export function ArticleScreen({ articleIndex, onNavigate }: ArticleScreenProps) {
  const article = articleData[articleIndex]

  if (!article) return null

  return (
    <section className="screen active" id="screen-article">
      <div className="screen-header">
        <div className="screen-header-row">
          <button className="back-btn" onClick={() => onNavigate('gabay')}>←</button>
          <div className="screen-header-title">Article</div>
        </div>
      </div>
      <div className="screen-body" id="article-detail-body">
        <div className="article-detail-header">
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>{article.emoji}</div>
          <div className="article-detail-source">{article.source}</div>
          <div className="article-detail-title">{article.title}</div>
          <div className="article-detail-meta">📅 {article.date}</div>
        </div>
        <div className="article-content">{article.content}</div>
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1.5px solid var(--border)' }}>
          <button className="btn btn-outline" onClick={() => onNavigate('gabay')}>← Back to Gabay</button>
        </div>
      </div>
    </section>
  )
}
