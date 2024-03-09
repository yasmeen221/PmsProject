import React from 'react'
import FeedbackCard from '../FeedbackCards/FeedbackCard'
import { useSelector } from 'react-redux'
import Icons from '../../../../themes/icons'

export default function FeedBackCards() {
  //make feed requset here ans map on items here
  const {isLoadingFeedback,error,feedbacks}=useSelector(state=>state.ViewFeedback)
  // console.log(isLoadingFeedback,error,feedbacks)
  const filterNormalFeedback=feedbacks.length>0?feedbacks.filter((item,index)=>item.feedbackMainData.feedbackType=="normal"||item.feedbackMainData.feedbackType=="praise"
  ):[]
  console.log(filterNormalFeedback)
  return (
    <>
    <header className='font-bold text-lg w-[18.5rem] h-[1.668rem] my-6'> Feedback</header>

    <main className='flex flex-wrap  gap-x-1 gap-y-3'>
    
    {
      isLoadingFeedback==true ? (
        <div className='w-full flex flex-row justify-center'>
          <Icons.Loading/>
        </div>
      ) : (
        filterNormalFeedback.length > 0 ? (
          filterNormalFeedback.map((item, index) => (
            <FeedbackCard
              key={item.feedbackMainData._id}
              text={item.feedbackMainData.message} 
              label={item.feedbackMainData.feedbackType=="normal"?"feedback":"praise"}
              fromName={`${item.feedbackMainData.userIdFrom.firstName} ${item.feedbackMainData.userIdFrom.lastName}`} 
              toName={`${item.feedbackMainData.userIdTo.firstName} ${item.feedbackMainData.userIdTo.lastName}`} 
              date={item.feedbackMainData.createdAt.substring(0,10)} //wait back
            /> 
          ))
        ) : (
          (isLoadingFeedback==false&&filterNormalFeedback.length==0)?<div className='w-full flex flex-row justify-center'>
            <p>There is No Feedbacks Exist</p>
          </div>:""
        )
      )
      
    }
     
    </main>
    </>
  )
}
