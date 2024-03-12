import { getFeedAndPraise, getPending, getRequestsFeedback } from "../slices/Api/feedbackApi"

export const getDataWithPagination = (setIsLoadingFeedback, setData, value, userId, setNumberOfPages, requets, feedback, pending) => {
    setIsLoadingFeedback(true)
    setData([])
    if (requets==true) {
        getRequestsFeedback(value, userId).then((res) => {
            if (res.data.data.feedbacks) {
                setData(res.data.data.feedbacks)
                setNumberOfPages(res.data.data.totalPages)
            }
            setIsLoadingFeedback(false)
        }).catch((error) => {
            setIsLoadingFeedback(false)
        })
        // console.log("reqqqqqqqqqqqqqqqqqq")
    }
    if(pending==true){
        getPending(value,userId).then((res) => {
            if (res.data.data.feedbacks) {
                setData(res.data.data.feedbacks)
                setNumberOfPages(res.data.data.totalPages)
            }
            setIsLoadingFeedback(false)
        }).catch((error) => {
            setIsLoadingFeedback(false)
        })
        // console.log("pendinnnnnnnnnnnnng")
    }
    if(feedback==true&&userId==""){
        getFeedAndPraise(value).then((res) => {
            if (res.data.data.feedbacks) {
                setData(res.data.data.feedbacks)
                setNumberOfPages(res.data.data.totalPages)
            }
            setIsLoadingFeedback(false)
        }).catch((error) => {
            setIsLoadingFeedback(false)
        })
        // console.log("feedbackkkkkkkkkkkk")
    }

}