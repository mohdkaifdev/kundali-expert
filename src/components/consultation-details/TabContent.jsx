import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SlotPickerModal from './SlotPickerModal'
import LoginPromptModal from './LoginPromptModal'
import PaymentButton from '../payments/PaymentButton'

const TabContent = ({ content }) => {
  const [open, setOpen] = useState(false)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  
  // get selected subuser or main user id
  const subuserState = useSelector((state) => state.subuser)
  const mainUser = useSelector((state) => state.user.user)
  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleSelect = (date) => {
    // date is YYYY-MM-DD string
    setSelectedDate(date)
  }

  const formattedDate = selectedDate ? selectedDate.split('-').reverse().join('/') : null

  return (
    <div className="cd_tab_content">
      <div className="para_sec">
        <p>{content}</p>
      </div>
      <div className="banner_btn">
        <button className="site_btn" onClick={() => {
          if (isAuthenticated) setOpen(true)
          else setShowLoginPrompt(true)
        }}>CONSULT NOW</button>
      </div>
      {selectedDate && (
        <div className="mt-3">
          {/* Payment flow: prepare payload and render PaymentButton */}
          {/* subUserId: prefer selected subuser, else pass main user id (if available) */}
          <PaymentButton payload={{
            subUserId: subuserState?.selected?.subUserId || mainUser?.userId || mainUser?.id || null,
            couponCode: "",
            consultationSessionId: "1",
            calendarDate: formattedDate,
          }} />
        </div>
      )}
      <SlotPickerModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSelectSlot={handleSelect}
        unavailable={{
          // sample unavailable slots; keys are YYYY-MM-DD
          // replace or pass in real data as prop when integrating
          [new Date().toISOString().slice(0, 10)]: ['10:00', '14:30']
        }}
      />
      <LoginPromptModal isOpen={showLoginPrompt} onClose={() => setShowLoginPrompt(false)} />
    </div>
  )
}

export default TabContent