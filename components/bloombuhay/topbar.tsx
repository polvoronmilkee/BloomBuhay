"use client"

import { topbarTitles } from "@/lib/data"

interface TopbarProps {
  activeTab: string
}

export function Topbar({ activeTab }: TopbarProps) {
  const titles = topbarTitles[activeTab] || ['BloomBuhay', '']

  return (
    <header className="topbar">
      <div>
        <div className="topbar-title">{titles[0]}</div>
        <div className="topbar-subtitle">{titles[1]}</div>
      </div>
      <div className="topbar-right">
        <div style={{ background: 'var(--rose-light)', borderRadius: '10px', padding: '8px 14px', fontSize: '13px', fontWeight: 700, color: 'var(--rose)' }}>
          📅 April 10, 2026
        </div>
        <div className="topbar-avatar">M</div>
      </div>
    </header>
  )
}
