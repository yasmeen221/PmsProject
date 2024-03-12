import axiosInstance from "../../../../components/GeneralApi/generalApi";
export const getTeamLeaderId = async (userId) => {
  try {
    const request = await axiosInstance.get(`user/team-leader/${userId}`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};

export const getAllUsersNames = async () => {
  try {
    const request = await axiosInstance.get(`/user/usernames`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};

export const getUserCompetencies = async (teamId) => {
  try {
    const request = await axiosInstance.get(
      `/competency/teams-competencies/${teamId}`,
    );
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};
export const getFeedbacks = async () => {
  try {
    const request = await axiosInstance.get(`/feedback/?page=4&pageSize=5&type=normal`);
    return request;
  } catch (err) {
    console.log(err);
  }
};
export const deleteFeedback = async (id) => {
  try {
    const request = await axiosInstance.get(`/feedback/delete/${id}`);
    return request.data;
  } catch (err) {
    console.log(err);
  }
};
//will use it in then when the popup request is done  and in then of calling this function call    dispatch(getFeedbacksRequest())

export const acceptFeedback = async (id) => {
  try {
    const request = await axiosInstance.get(`/feedback/accept/${id}`);
    return request.data;
  } catch (err) {
    console.log(err);
  }
};
