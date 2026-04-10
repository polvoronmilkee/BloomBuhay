"use client";

import { useState } from "react";
import {
  SmileIcon,
  MehIcon,
  FrownIcon,
  AngryIcon,
  AnnoyedIcon,
} from "lucide-react";

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const moods = [
    { emoji: <SmileIcon color="var(--rose-two)" />, label: "Happy" },
    { emoji: <MehIcon color="var(--rose-two)" />, label: "Okay" },
    { emoji: <FrownIcon color="var(--rose-two)" />, label: "Sad" },
    { emoji: <AngryIcon color="var(--rose-two)" />, label: "Stressed" },
    { emoji: <AnnoyedIcon color="var(--rose-two)" />, label: "Tired" },
  ];

  const symptoms = [
    "Headache",
    "Swelling",
    "Tired",
    "Nausea",
    "Back pain",
    "Heartburn",
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom],
    );
  };

  return (
    <section className="screen active" id="screen-home">
      {/* Mobile header */}
      <div className="mobile-header">
        <div className="mobile-header-top">
          <div className="mobile-brand">
            <div className="mobile-brand-icon"></div>
            <div className="mobile-brand-name">BloomBuhay</div>
          </div>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 800,
              color: "white",
            }}
          >
            M
          </div>
        </div>
        <div className="mobile-greeting">Good morning</div>
        <div className="mobile-name">Hello, Maria! 👋</div>
        <div className="mobile-week">🥭 Week 24 · 2nd Trimester</div>
      </div>

      <div className="screen-body">
        <div className="home-grid">
          {/* Week progress – full width */}
          <div className="card card-full">
            <div className="card-title">{"Baby's Progress"}</div>
            <div className="week-progress">
              <div className="week-fruit">🥭</div>
              <div className="week-info">
                <div className="week-label">Week 24 of 40</div>
                <div className="week-desc">
                  Baby is the size of a mango — about 30 cm and 600g
                </div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <div className="progress-label">
                  60% complete · 16 weeks to go
                </div>
              </div>
            </div>
          </div>

          {/* Mood tracker */}
          <div className="card">
            <div className="card-title">How are you feeling?</div>
            <div className="mood-row">
              {moods.map((mood, idx) => (
                <button
                  key={idx}
                  className={`mood-btn ${selectedMood === idx ? "selected" : ""}`}
                  onClick={() => setSelectedMood(idx)}
                >
                  <span>{mood.emoji}</span>
                  <span className="label">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Symptoms */}
          <div className="card">
            <div className="card-title">Any symptoms today?</div>
            <div className="chip-row">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className={`chip ${selectedSymptoms.includes(symptom) ? "selected" : ""}`}
                  onClick={() => toggleSymptom(symptom)}
                >
                  {symptom}
                </div>
              ))}
            </div>
          </div>

          {/* Ate BB preview – full width */}
          <div
            className="card card-full"
            style={{
              background:
                "linear-gradient(135deg, var(--rose-light), var(--peach-light))",
              borderColor: "var(--rose-mid)",
            }}
          >
            <div className="ate-bb-preview">
              <div className="ate-bb-avatar" style={{ overflow: "hidden" }}>
                <img
                  src="/atebb-avatar-icon-192x192.png"
                  alt="Ate BB"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div className="chat-bubble">
                  <div className="chat-bubble-name">Ate BB says</div>
                  <div className="chat-bubble-text">
                    {
                      "Kumain ka na, mommy? Nutrition is so important this week! Your baby's brain is developing rapidly. Ask me anything about your pregnancy! 💕"
                    }
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: "12px" }}
                  onClick={() => onNavigate("ate-bb")}
                >
                  {"Ask Ate BB a question ›"}
                </button>
              </div>
            </div>
          </div>

          {/* For you articles – full width */}
          <div className="card-full">
            <div className="section-header">
              <div className="section-title">For You 📚</div>
              <div
                className="section-action"
                onClick={() => onNavigate("gabay")}
              >
                See all
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div className="article-card" onClick={() => onNavigate("gabay")}>
                <div className="article-thumb">🥦</div>
                <div className="article-body">
                  <div className="article-source">Dr. Maria Santos</div>
                  <div className="article-title">
                    Nutrition Tips for Week 24
                  </div>
                </div>
              </div>
              <div className="article-card" onClick={() => onNavigate("gabay")}>
                <div className="article-thumb">🧘</div>
                <div className="article-body">
                  <div className="article-source">PhilHealth Wellness</div>
                  <div className="article-title">
                    Safe Exercises During Pregnancy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick access – full width */}
          <div className="card-full">
            <div className="card-title">Quick Access</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "10px",
              }}
            >
              <button
                onClick={() => onNavigate("metrics")}
                style={{
                  background: "var(--rose-light)",
                  border: "none",
                  borderRadius: "16px",
                  padding: "14px 8px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "24px" }}>👶</span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "var(--rose)",
                  }}
                >
                  Kick Count
                </span>
              </button>
              <button
                onClick={() => onNavigate("metrics")}
                style={{
                  background: "var(--peach-light)",
                  border: "none",
                  borderRadius: "16px",
                  padding: "14px 8px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "24px" }}>❤️</span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "var(--peach)",
                  }}
                >
                  Blood Press.
                </span>
              </button>
              <button
                onClick={() => onNavigate("konsulta")}
                style={{
                  background: "var(--lavender-light)",
                  border: "none",
                  borderRadius: "16px",
                  padding: "14px 8px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "24px" }}>🏥</span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "var(--lavender)",
                  }}
                >
                  Book Appt.
                </span>
              </button>
              <button
                onClick={() => onNavigate("metrics")}
                style={{
                  background: "var(--sage-light)",
                  border: "none",
                  borderRadius: "16px",
                  padding: "14px 8px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "24px" }}>📅</span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#15803d",
                  }}
                >
                  Cycle Track
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
