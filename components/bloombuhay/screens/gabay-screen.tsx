"use client"

import { useState } from "react"
import { articleData } from "@/lib/data"

interface GabayScreenProps {
  onNavigate: (tab: string) => void
  onOpenArticle: (idx: number) => void
}

export function GabayScreen({ onNavigate, onOpenArticle }: GabayScreenProps) {
  const [activeTab, setActiveTab] = useState<'articles' | 'videos'>('articles')

  const videos = [
    { emoji: '🎬', source: 'Birthing Philippines', title: 'Breathing Techniques for Labor', date: 'April 4, 2026', duration: '8:32' },
    { emoji: '🎬', source: 'DOH Philippines', title: 'Breastfeeding Basics for New Moms', date: 'April 2, 2026', duration: '12:15' },
    { emoji: '🎬', source: 'Mommy Bloggers PH', title: 'Preparing Your Hospital Bag', date: 'March 30, 2026', duration: '6:45' },
  ]

  return (
    <section className="screen active" id="screen-gabay">
      <div className="screen-header">
        <div className="screen-header-row">
          <button className="back-btn" onClick={() => onNavigate('home')}>←</button>
          <div>
            <div className="screen-header-title">Gabay</div>
            <div className="screen-header-sub">Trusted content for moms</div>
          </div>
        </div>
      </div>
      <div className="screen-body" id="gabay-body">
        <div className="tab-switcher" style={{ marginBottom: '20px' }}>
          <button
            className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => setActiveTab('articles')}
          >
            📄 Articles
          </button>
          <button
            className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            ▶️ Videos
          </button>
        </div>

        {activeTab === 'articles' && (
          <div id="gabay-articles">
            {articleData.map((article, idx) => (
              <div key={idx} className="content-card" onClick={() => onOpenArticle(idx)}>
                <div className="content-thumb">{article.emoji}</div>
                <div className="content-info">
                  <div className="content-source">{article.source}</div>
                  <div className="content-title">{article.title}</div>
                  <div className="content-date">{article.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div id="gabay-videos">
            {videos.map((video, idx) => (
              <div key={idx} className="content-card">
                <div className="content-thumb" style={{ position: 'relative' }}>
                  <span>{video.emoji}</span>
                  <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '10px', fontWeight: 700, padding: '3px 7px', borderRadius: '6px' }}>
                    {video.duration}
                  </div>
                </div>
                <div className="content-info">
                  <div className="content-source">{video.source}</div>
                  <div className="content-title">{video.title}</div>
                  <div className="content-date">{video.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
