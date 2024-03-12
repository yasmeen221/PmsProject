import axiosInstance from "../../../../components/GeneralApi/generalApi";
// to get all data
// export const getAllData = async () => {
//   try {
//     const request = await axiosInstance.get(`...end point..`);
//     return request.data;
//   } catch (error) {
//     console.log("error from get", error);
//   }
// };

// //to insert new data
// export const createData = async (newData) => {
//   try {
//     const request = await axiosInstance.post(`....end point..`, { newData });
//     return request.data;
//   } catch (error) {
//     console.log("error from create", error);
//   }
// };

// // to  update existing data
// export const updateData = async (id, updatedData) => {
//   //will know from back use post or  put
//   try {
//     const request = await axiosInstance.post(`..endpoint.../${id}`, {
//       updatedData,
//     });
//     return request.data;
//   } catch (error) {
//     console.log("error from update", error);
//   }
// };

// // to delete existing data
// export const deleteData = async (id) => {
//   try {
//     const request = await axiosInstance.delete(`../endpoint/${id}`);
//     return request;
//   } catch (error) {
//     console.log("error from delete", error);
//   }
// };

export const getFeedAndPraise=async(page)=>{
  try {
    const request = await axiosInstance.get(`/feedback?page=${page}&type=normal&type=praise`);
    return request;
  } catch (err) {
    console.log(err);
  }
}
export const getRequestsFeedback=async(page,userIdFrom)=>{
  try {
    const request = await axiosInstance.get(`/feedback?page=${page}&type=requested&userIdFrom=${userIdFrom}`);
    return request;
  } catch (err) {
    console.log(err);
  }
}
export const getPending=async(page,userIdTo)=>{
  try {
    const request = await axiosInstance.get(`/feedback?page=${page}&type=requested&userIdTo=${userIdTo}`);
    return request;
  } catch (err) {
    console.log(err);
  }
}

export const deleteFeedback = async (id) => {
  try {
    const request = await axiosInstance.get(`/feedback/delete/${id}`);
    return request;
  } catch (err) {
    console.log(err);
  }
};
//will use it in then when the popup request is done  and in then of calling this function call    dispatch(getFeedbacksRequest())

export const acceptFeedback = async (id) => {
  try {
    const request = await axiosInstance.get(`/feedback/accept/${id}`);
    return request;
  } catch (err) {
    console.log(err);
  }
};
/////////////Praise Functions Don't Touch 😕/////////
export const getEmployeesData = async () => {
  try {
    const { data } = await axiosInstance.get(`/user/usernames`);
    return data;
  } catch (error) {
    console.log("error from get", error);
  }
};
export const recievesVisiability = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/user/team-leader/${id}`);
    return data;
  } catch (error) {
    console.log("error from get", error);
  }
};
export const postsPraise = async (data) => {
  try {
    const request = await axiosInstance.post(`/feedback`, data);
    return request;
  } catch (error) {
    console.log("error from create", error);
  }
};
//////////////////////end Praise////////////////
export const getCompetenciesForSomeOne = async (id) => {
  try {
    const request = await axiosInstance.get(
      `competency/teams-competencies/${id}`,
    );
    return request.data;
  } catch (error) {
    console.log("error from get Competencies", error);
  }
};
