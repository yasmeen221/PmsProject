import React, { Component } from "react";
import RequestCardItem from "./RequestCardItem";

function RequestCards() {
  return (
    <><header className='font-bold text-lg w-[18.5rem] h-[1.668rem] my-6'> My Request</header>

    <main className=" flex flex-wrap gap-x-2 gap-y-4">
      <RequestCardItem />
      <RequestCardItem />
      <RequestCardItem />
      <RequestCardItem />
      <RequestCardItem />
      <RequestCardItem />
    </main>
    </>
  );
}

export default RequestCards;
