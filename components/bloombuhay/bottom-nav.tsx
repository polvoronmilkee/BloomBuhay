"use client"

interface BottomNavProps {
  activeTab: string
  onNavigate: (tab: string) => void
}

export function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'ate-bb', icon: '💬', label: 'Ate BB' },
    { id: 'gabay', icon: '📖', label: 'Gabay' },
    { id: 'konsulta', icon: '🏥', label: 'Konsulta' },
    { id: 'metrics', icon: '📊', label: 'Metrics' },
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
