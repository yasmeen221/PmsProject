import React from 'react'
import FeedbackCard from '../FeedbackCards/FeedbackCard'

export default function FeedBackCards() {
  return (
    <>
    <header className='font-bold text-lg w-[18.5rem] h-[1.668rem] my-6'> Feedback</header>

    <main className='flex flex-wrap  gap-x-1 gap-y-3'>
     <FeedbackCard text="Your positive attitude and willingness to support your colleagues, including mysel..." 
     label='feedback'
     date="1-01-2024" /> 
  
     <FeedbackCard text="Your positive attitude and willingness to support your colleagues, including mysel..." 
     label='praise'
     date="1-01-2024" /> 
     <FeedbackCard text="Your positive attitude and willingness to support your colleagues, including mysel..." 
     label='feedback'
     date="1-01-2024" /> 
     <FeedbackCard text="Your positive attitude and willingness to support your colleagues, including mysel..." 
     label='feedback'
     date="1-01-2024" /> 
  
     <FeedbackCard text="Your positive attitude and willingness to support your colleagues, including mysel..." 
     label='praise'
     date="1-01-2024" /> 
     <FeedbackCard text="Your positive attitude and willingness to support your colleagues, including mysel..." 
     label='feedback'
     date="1-01-2024" /> 
    </main>
    </>
  )
}
