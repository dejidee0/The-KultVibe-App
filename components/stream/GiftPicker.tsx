'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useGiftStore, GIFTS } from '@/store/useGiftStore'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import GiftVisual from './GiftVisual'

const DEMO_SENDERS = [
  '@NaijaGamer',
  '@LagosVibes',
  '@AbujaBoy',
  '@ChiGaming',
  '@KanoKing',
  '@DeltaGamer',
]

export default function GiftPicker() {
  const { isPickerOpen, closePicker, sendGift } = useGiftStore()

  const handleSend = (gift: (typeof GIFTS)[0]) => {
    const randomSender = DEMO_SENDERS[Math.floor(Math.random() * DEMO_SENDERS.length)]
    sendGift(gift, randomSender)
  }

  return (
    <AnimatePresence>
      {isPickerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePicker}
            className="fixed inset-0 z-40"
          />

          {/* Picker Panel */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '12px',
              zIndex: 50,
              background: '#0D0D14',
              border: '0.5px solid rgba(255,255,255,0.12)',
              borderRadius: '16px',
              padding: '16px',
              width: '280px',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#fff' }}>
                Send a gift
              </span>
              <button
                onClick={closePicker}
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <HugeiconsIcon icon={Cancel01Icon} size={16} color="currentColor" strokeWidth={1.5} />
              </button>
            </div>

            {/* Gift Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {GIFTS.map((gift) => (
                <button
                  key={gift.id}
                  onClick={() => handleSend(gift)}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '10px 8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(240,180,41,0.4)'
                    e.currentTarget.style.background = 'rgba(240,180,41,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  <GiftVisual twemojiHex={gift.twemojiHex} emoji={gift.emoji} size={32} />
                  <span style={{ fontSize: '11px', fontWeight: 500, color: '#fff' }}>
                    {gift.name}
                  </span>
                  <span style={{ fontSize: '10px', color: '#F0B429' }}>
                    ₦{gift.price.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>

            <p
              style={{
                fontSize: '10px',
                color: 'rgba(255,255,255,0.25)',
                textAlign: 'center',
                marginTop: '12px',
              }}
            >
              Gifts support the streamer directly
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
