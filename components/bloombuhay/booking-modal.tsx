"use client"

import { useState, useEffect } from "react"

interface BookingModalProps {
  isOpen: boolean
  clinicName: string
  onClose: () => void
}

export function BookingModal({ isOpen, clinicName, onClose }: BookingModalProps) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setName('')
      setDate('')
      setTime('')
      setReason('')
      setShowSuccess(false)
    }
  }, [isOpen])

  const handleConfirm = () => {
    if (!name || !date) {
      alert('Please fill in your name and date.')
      return
    }

    const formattedDate = new Date(date).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })
    setSuccessMessage(`Your appointment at ${clinicName} has been scheduled for ${formattedDate}.`)
    setShowSuccess(true)

    setTimeout(() => {
      onClose()
    }, 3000)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal" style={{ position: 'relative' }}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {!showSuccess ? (
          <div id="booking-form-content">
            <div className="modal-title">Book Appointment</div>
            <div className="modal-sub">{clinicName}</div>
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Preferred Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Preferred Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Reason for Visit</label>
              <input
                type="text"
                placeholder="e.g. Regular prenatal checkup"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <button className="btn btn-light-pink btn-full" onClick={handleConfirm} style={{ marginTop: '8px' }}>
              Confirm Appointment ✓
            </button>
          </div>
        ) : (
          <div id="booking-success">
            <div className="success-state">
              <div className="success-icon">✅</div>
              <div className="success-title">Appointment Confirmed!</div>
              <div className="success-sub">{successMessage}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
