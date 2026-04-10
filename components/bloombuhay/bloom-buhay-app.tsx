"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { BottomNav } from "./bottom-nav"
import { BookingModal } from "./booking-modal"
import { HomeScreen } from "./screens/home-screen"
import { AteBBScreen } from "./screens/ate-bb-screen"
import { GabayScreen } from "./screens/gabay-screen"
import { ArticleScreen } from "./screens/article-screen"
import { KonsultaScreen } from "./screens/konsulta-screen"
import { MetricsScreen } from "./screens/metrics-screen"

export function BloomBuhayApp() {
  const [activeTab, setActiveTab] = useState('home')
  const [articleIndex, setArticleIndex] = useState<number | null>(null)
  const [bookingModal, setBookingModal] = useState({ isOpen: false, clinicName: '' })

  const navigate = (tab: string) => {
    setActiveTab(tab)
    setArticleIndex(null)
    window.scrollTo(0, 0)
  }

  const openArticle = (idx: number) => {
    setArticleIndex(idx)
    setActiveTab('article')
    window.scrollTo(0, 0)
  }

  const openBooking = (clinicName: string) => {
    setBookingModal({ isOpen: true, clinicName })
  }

  const closeBooking = () => {
    setBookingModal({ isOpen: false, clinicName: '' })
  }

  return (
    <div className="app-shell">
      <Sidebar activeTab={activeTab} onNavigate={navigate} />

      <div className="main-content">
        <Topbar activeTab={activeTab} />

        {activeTab === 'home' && (
          <HomeScreen onNavigate={navigate} />
        )}

        {activeTab === 'ate-bb' && (
          <AteBBScreen onNavigate={navigate} />
        )}

        {activeTab === 'gabay' && (
          <GabayScreen onNavigate={navigate} onOpenArticle={openArticle} />
        )}

        {activeTab === 'article' && articleIndex !== null && (
          <ArticleScreen articleIndex={articleIndex} onNavigate={navigate} />
        )}

        {activeTab === 'konsulta' && (
          <KonsultaScreen onNavigate={navigate} onOpenBooking={openBooking} />
        )}

        {activeTab === 'metrics' && (
          <MetricsScreen onNavigate={navigate} />
        )}
      </div>

      <BottomNav activeTab={activeTab} onNavigate={navigate} />

      <BookingModal
        isOpen={bookingModal.isOpen}
        clinicName={bookingModal.clinicName}
        onClose={closeBooking}
      />
    </div>
  )
}
