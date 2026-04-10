"use client"

import {Home,  MessageCircleHeart, HeartHandshake, Hospital, Activity } from "lucide-react"

interface SidebarProps {
  activeTab: string
  onNavigate: (tab: string) => void
}

export function Sidebar({ activeTab, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'home', icon: <Home color="var(--rose-two)" />, label: 'Home' },
    { id: 'ate-bb', icon: <MessageCircleHeart color="var(--rose-two)" />, label: 'Ate BB', badge: '!' },
    { id: 'gabay', icon: <HeartHandshake color="var(--rose-two)" />, label: 'Gabay' },
    { id: 'konsulta', icon: <Hospital color="var(--rose-two)" />, label: 'Konsulta' },
    { id: 'metrics', icon: <Activity color="var(--rose-two)" />, label: 'Metrics' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">🌸</div>
        <div>
          <div className="brand-text">BloomBuhay</div>
          <div className="brand-sub">For A Life That Gives Life</div>
        </div>
      </div>
      <div className="sidebar-user">
        <div className="user-greeting">Good morning</div>
        <div className="user-name">Hello, Maria! 👋</div>
        <div className="week-chip">🥭 Week 24 · 2nd Trimester</div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-tip">
          <div className="sidebar-tip-label">✨ Daily tip</div>
          <div className="sidebar-tip-text">Stay hydrated, mommy! Aim for 8–10 glasses of water today. 💧</div>
        </div>
      </div>
    </aside>
  )
}
