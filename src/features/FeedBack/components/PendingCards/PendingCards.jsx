import React, { Component } from 'react'
import PendingCardItem from './PendingCardItem'
import image1 from "../../../../assets/images/boy4.png";

export class PendingCards extends Component {
  render() {
    return (
      <>
      <header className='font-bold text-lg w-[18.5rem] h-[1.668rem] my-6'> Pending  Your Action</header>
      <main className='flex gap-x-2 gap-y-4 flex-wrap '>
     
        <PendingCardItem cardId="kkkkkk" text=" I need your feedback on Competencies [ Team work, Communication and
          Public speaking ] " name="sama ahmed" date="1-1-2024" image={image1}/>
        <PendingCardItem cardId="kkkkkk" text=" I need your feedback on Competencies [ Team work, Communication and
          Public speaking ] " name="sama ahmed" date="1-1-2024" image={image1}/>
        <PendingCardItem cardId="kkkkkk" text=" I need your feedback on Competencies [ Team work, Communication and
          Public speaking ] " name="sama ahmed" date="1-1-2024" image={image1}/>
        <PendingCardItem cardId="kkkkkk" text=" I need your feedback on Competencies [ Team work, Communication and
          Public speaking ] " name="sama ahmed" date="1-1-2024" image={image1}/>
        <PendingCardItem cardId="kkkkkk" text=" I need your feedback on Competencies [ Team work, Communication and
          Public speaking ] " name="sama ahmed" date="1-1-2024" image={image1}/>
        <PendingCardItem cardId="kkkkkk" text=" I need your feedback on Competencies [ Team work, Communication and
          Public speaking ] " name="sama ahmed" date="1-1-2024" image={image1}/>
        
      </main>
      </>
    )
  }
}

export default PendingCards
