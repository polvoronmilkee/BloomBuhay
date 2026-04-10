"use client"

import { useState } from "react"
import { clinicsData } from "@/lib/data"

interface KonsultaScreenProps {
  onNavigate: (tab: string) => void
  onOpenBooking: (clinicName: string) => void
}

export function KonsultaScreen({ onNavigate, onOpenBooking }: KonsultaScreenProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredClinics = clinicsData.filter(clinic =>
    clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    return '★'.repeat(fullStars) + (rating % 1 >= 0.5 ? '★' : '')
  }

  return (
    <section className="screen active" id="screen-konsulta">
      <div className="screen-header">
        <div className="screen-header-row">
          <button className="back-btn" onClick={() => onNavigate('home')}>←</button>
          <div>
            <div className="screen-header-title">Konsulta</div>
            <div className="screen-header-sub">Find clinics and OB-GYNs near you</div>
          </div>
        </div>
      </div>
      <div className="screen-body">
        <div className="search-bar" style={{ marginBottom: '24px' }}>
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder="Search clinic or OB-GYN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="section-header">
          <div className="section-title">Nearby Clinics 📍</div>
          <div style={{ fontSize: '12px', color: 'var(--text3)', fontWeight: 600 }}>Cebu City</div>
        </div>

        <div id="clinic-list">
          {filteredClinics.map((clinic, idx) => (
            <div key={idx} className="clinic-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ flex: 1 }}>
                  <div className="clinic-name">{clinic.name}</div>
                  <div className="clinic-meta">
                    <span className="star">{renderStars(clinic.rating)}</span>
                    <strong>{clinic.rating}</strong>
                    <span style={{ color: 'var(--text3)' }}>({clinic.reviews} reviews)</span>
                  </div>
                  <div className="clinic-info-row">📍 {clinic.address}</div>
                  <div className="clinic-info-row">🕐 {clinic.hours}</div>
                </div>
                <div className="clinic-distance">{clinic.distance}</div>
              </div>
              <button className="btn btn-primary btn-full" onClick={() => onOpenBooking(clinic.name)}>Book Appointment</button>
            </div>
          ))}
        </div>

        {/* PhilHealth Guide */}
        <div className="philhealth-card" style={{ marginTop: '28px' }}>
          <div className="philhealth-title">💳 PhilHealth Maternity Guide</div>
          <div className="philhealth-desc">Get up to PHP 8,000 maternity benefit coverage through PhilHealth.</div>
          <div className="step-row">
            <div className="step-num">1</div>
            <div>
              <div className="step-title">Register as Member</div>
              <div className="step-desc">Sign up at any PhilHealth office or at philhealth.gov.ph</div>
            </div>
          </div>
          <div className="step-row">
            <div className="step-num">2</div>
            <div>
              <div className="step-title">Get Your MDR</div>
              <div className="step-desc">Obtain your Member Data Record from PhilHealth</div>
            </div>
          </div>
          <div className="step-row">
            <div className="step-num">3</div>
            <div>
              <div className="step-title">Avail Benefits</div>
              <div className="step-desc">Present MDR at any accredited hospital for maternity coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
