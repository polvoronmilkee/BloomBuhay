"use client"

import { Activity, HeartHandshake, Home, Hospital, MessageCircleHeart } from "lucide-react"

interface BottomNavProps {
  activeTab: string
  onNavigate: (tab: string) => void
}

export function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: <Home color="var(--rose-two)" />, label: 'Home' },
    { id: 'ate-bb', icon: <MessageCircleHeart color="var(--rose-two)" />, label: 'Ate BB', badge: '!' },
    { id: 'gabay', icon: <HeartHandshake color="var(--rose-two)" />, label: 'Gabay' },
    { id: 'konsulta', icon: <Hospital color="var(--rose-two)" />, label: 'Konsulta' },
    { id: 'metrics', icon: <Activity color="var(--rose-two)" />, label: 'Metrics' },
  ] 

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          <div className="bnav-icon">{item.icon}</div>
          {item.label}
        </button>
      ))}
    </nav>
  )
}
