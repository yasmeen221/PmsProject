import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({handlePageClick,numberOfPages}) => {
  return (
    <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick} 
          pageRangeDisplayed={4}
          pageCount={Math.ceil(numberOfPages)} //from request
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="flex flex-row justify-center w-full mt-[3rem] "
          pageLinkClassName="px-2 py-2 bg-white border-[1px]	 border-borderColor-baseBorderColor	"
          previousLinkClassName=" px-2 py-2 bg-white border-[1px]	 border-borderColor-baseBorderColor"
          nextLinkClassName=" px-2 py-2 bg-white border-[1px]	 border-borderColor-baseBorderColor"
          breakLinkClassName="px-2 py-2 bg-white border-[1px]	 border-borderColor-baseBorderColor"
          activeLinkClassName="bg-sky-500	"


        />
  )
}

export default Pagination
