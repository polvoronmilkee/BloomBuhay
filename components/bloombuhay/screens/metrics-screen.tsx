"use client"

import { useState } from "react"

interface MetricsScreenProps {
  onNavigate: (tab: string) => void
}

export function MetricsScreen({ onNavigate }: MetricsScreenProps) {
  const [stage, setStage] = useState<'trying' | 'pregnant' | 'postpartum'>('pregnant')
  const [kickCount, setKickCount] = useState(0)
  const [feedLog, setFeedLog] = useState<string[]>([])

  const addKick = (delta: number) => {
    setKickCount(prev => Math.max(0, prev + delta))
  }

  const logFeed = (type: string) => {
    const time = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' })
    setFeedLog(prev => [`${type} — ${time}`, ...prev].slice(0, 5))
  }

  return (
    <section className="screen active" id="screen-metrics">
      <div className="screen-header">
        <div className="screen-header-row">
          <button className="back-btn" onClick={() => onNavigate('home')}>←</button>
          <div>
            <div className="screen-header-title">Metrics</div>
            <div className="screen-header-sub">Track your health journey</div>
          </div>
        </div>
      </div>
      <div className="screen-body">
        <div className="stage-switcher">
          <button
            className={`stage-btn ${stage === 'trying' ? 'active' : ''}`}
            onClick={() => setStage('trying')}
          >
            🌱 Trying
          </button>
          <button
            className={`stage-btn ${stage === 'pregnant' ? 'active' : ''}`}
            onClick={() => setStage('pregnant')}
          >
            🤰 Pregnant
          </button>
          <button
            className={`stage-btn ${stage === 'postpartum' ? 'active' : ''}`}
            onClick={() => setStage('postpartum')}
          >
            🍼 Postpartum
          </button>
        </div>

        {/* TRYING */}
        {stage === 'trying' && (
          <div id="stage-trying">
            <div className="card">
              <div className="card-title">Cycle Calendar</div>
              <div className="cycle-grid">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="cycle-header">{day}</div>
                ))}
                {[1, 2, 3, 4, 5].map(d => (
                  <div key={d} className="cycle-day period">{d}</div>
                ))}
                {[6, 7, 8, 9, 10].map(d => (
                  <div key={d} className="cycle-day normal">{d}</div>
                ))}
                {[11, 12, 13].map(d => (
                  <div key={d} className="cycle-day fertile">{d}</div>
                ))}
                <div className="cycle-day ovulation">14</div>
                {[15, 16].map(d => (
                  <div key={d} className="cycle-day fertile">{d}</div>
                ))}
                {[17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(d => (
                  <div key={d} className="cycle-day normal">{d}</div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '14px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--text3)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fecdd3' }}></div> Period
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--text3)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#bbf7d0' }}></div> Fertile
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--text3)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4ade80' }}></div> Ovulation
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-title">Ovulation Prediction</div>
              <div style={{ background: 'var(--rose-light)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>💧</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--rose)' }}>Day 14</div>
                <div style={{ fontSize: '13px', color: 'var(--text2)' }}>Estimated ovulation day</div>
                <div style={{ fontSize: '12px', color: 'var(--text3)', marginTop: '6px' }}>Fertile window: Days 11–16</div>
              </div>
            </div>
          </div>
        )}

        {/* PREGNANT */}
        {stage === 'pregnant' && (
          <div id="stage-pregnant">
            <div className="metric-row">
              <div className="metric-mini">
                <div className="metric-mini-icon">❤️</div>
                <div className="metric-mini-val">120/80</div>
                <div className="metric-mini-label">Blood Pressure</div>
              </div>
              <div className="metric-mini">
                <div className="metric-mini-icon">⚖️</div>
                <div className="metric-mini-val">60 kg</div>
                <div className="metric-mini-label">Current Weight</div>
              </div>
            </div>

            {/* Blood pressure card */}
            <div className="card">
              <div className="card-title">Blood Pressure</div>
              <div className="bp-display">
                <div className="bp-icon">❤️</div>
                <div>
                  <div className="bp-value">120/80</div>
                  <div className="bp-unit">mmHg · Last reading: Apr 8</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div className="status-badge status-normal">Normal</div>
                </div>
              </div>
              <button className="btn btn-outline btn-full" style={{ marginTop: '14px' }}>Log New Reading</button>
            </div>

            {/* Weight chart */}
            <div className="card">
              <div className="card-title">Weight Progress</div>
              <div className="weight-chart">
                {[
                  { height: '40%', label: 'W20' },
                  { height: '52%', label: 'W21' },
                  { height: '62%', label: 'W22' },
                  { height: '74%', label: 'W23' },
                  { height: '88%', label: 'W24' },
                ].map((bar, idx) => (
                  <div key={idx} className="weight-bar-wrap">
                    <div className="weight-bar" style={{ height: bar.height }}></div>
                    <div className="weight-bar-label">{bar.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: 'var(--text2)' }}>
                Healthy gain: <strong>+2 kg</strong> since last month
              </div>
            </div>

            {/* Kick counter */}
            <div className="card">
              <div className="card-title">Kick Counter 👶</div>
              <div className="kick-counter">
                <button className="kick-btn" onClick={() => addKick(-1)}>−</button>
                <div className="kick-circle">
                  <div className="kick-num">{kickCount}</div>
                  <div className="kick-sub">kicks today</div>
                </div>
                <button className="kick-btn" onClick={() => addKick(1)}>+</button>
              </div>
              <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text3)', marginTop: '8px' }}>
                Goal: 10 kicks within 2 hours
              </div>
              {kickCount > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${Math.min(100, kickCount * 10)}%`,
                        background: 'linear-gradient(90deg, var(--sage), #22c55e)'
                      }}
                    ></div>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text3)', textAlign: 'center', marginTop: '4px' }}>
                    {kickCount >= 10 ? '🎉 Goal reached! Baby is active and healthy!' : `${kickCount}/10 kicks — keep counting, mommy!`}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* POSTPARTUM */}
        {stage === 'postpartum' && (
          <div id="stage-postpartum">
            <div className="card">
              <div className="card-title">Recovery Log</div>
              <div className="recovery-item"><span className="recovery-label">🩸 Bleeding</span><span className="recovery-status status-light">Light</span></div>
              <div className="recovery-item"><span className="recovery-label">😣 Pain Level</span><span className="recovery-status status-mild">Mild</span></div>
              <div className="recovery-item"><span className="recovery-label">😊 Mood</span><span className="recovery-status status-good">Good</span></div>
              <button className="btn btn-outline btn-full" style={{ marginTop: '12px' }}>{"Update Today's Log"}</button>
            </div>

            <div className="card">
              <div className="card-title">Feeding Tracker 🍼</div>
              <div className="feeding-btns">
                <button className="feed-btn" onClick={() => logFeed('Left breast 🤱')}><span className="icon">🤱</span>Left Breast</button>
                <button className="feed-btn" onClick={() => logFeed('Right breast 🤱')}><span className="icon">🤱</span>Right Breast</button>
                <button className="feed-btn" style={{ gridColumn: '1/-1' }} onClick={() => logFeed('Bottle feed 🍼')}><span className="icon">🍼</span>Bottle Feed</button>
              </div>
              {feedLog.length > 0 && (
                <div className="feed-log">
                  <div className="feed-log-label">Recent feedings:</div>
                  {feedLog.map((log, idx) => (
                    <div key={idx} className="feed-log-item">{log}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="card">
              <div className="card-title">{"Baby's Vaccines 💉"}</div>
              <div className="vaccine-item">
                <div className="vaccine-check done">✓</div>
                <div><div className="vaccine-name done">BCG Vaccine</div><div className="vaccine-date">At birth · Done</div></div>
              </div>
              <div className="vaccine-item">
                <div className="vaccine-check done">✓</div>
                <div><div className="vaccine-name done">Hepatitis B</div><div className="vaccine-date">At birth · Done</div></div>
              </div>
              <div className="vaccine-item">
                <div className="vaccine-check pending">!</div>
                <div><div className="vaccine-name">DTP-HiB-Hep B</div><div className="vaccine-date">6 weeks · Upcoming</div></div>
              </div>
              <div className="vaccine-item">
                <div className="vaccine-check pending">!</div>
                <div><div className="vaccine-name">OPV (Polio)</div><div className="vaccine-date">6 weeks · Upcoming</div></div>
              </div>
              <div className="vaccine-item">
                <div className="vaccine-check pending">!</div>
                <div><div className="vaccine-name">Pneumococcal</div><div className="vaccine-date">6 weeks · Upcoming</div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
