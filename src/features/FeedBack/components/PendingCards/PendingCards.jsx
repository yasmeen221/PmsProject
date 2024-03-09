import React, { Component } from 'react'
import PendingCardItem from './PendingCardItem'

export class PendingCards extends Component {
  render() {
    return (
      <>
      <header className='font-bold text-lg w-[18.5rem] h-[1.668rem] my-6'> Pending  Your Action</header>
      <main className='flex gap-x-2 gap-y-4 flex-wrap '>
     
        <PendingCardItem/>
        <PendingCardItem/>
        <PendingCardItem/>
        <PendingCardItem/>
        <PendingCardItem/>
        <PendingCardItem/>
        
      </main>
      </>
    )
  }
}

export default PendingCards
