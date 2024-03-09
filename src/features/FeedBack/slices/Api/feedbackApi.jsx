import axiosInstance from "../../../../components/GeneralApi/generalApi";
// to get all data
export const getAllData = async () => {
  try {
    const request = await axiosInstance.get(`...end point..`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};

//to insert new data
export const createData = async (newData) => {
  try {
    const request = await axiosInstance.post(`....end point..`, { newData });
    return request.data;
  } catch (error) {
    console.log("error from create", error);
  }
};

// to  update existing data
export const updateData = async (id, updatedData) => {
  //will know from back use post or  put
  try {
    const request = await axiosInstance.post(`..endpoint.../${id}`, {
      updatedData,
    });
    return request.data;
  } catch (error) {
    console.log("error from update", error);
  }
};

// to delete existing data
export const deleteData = async (id) => {
  try {
    const request = await axiosInstance.delete(`../endpoint/${id}`);
    return request;
  } catch (error) {
    console.log("error from delete", error);
  }
};

//////////////////////////////////////////////////////////////
export const getTeamLeaderId = async (userId) => {
  try {
    const request = await axiosInstance.get(`user/team-leader/${userId}`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
}

export const getAllUsersNames = async () => {
  try {
    const request = await axiosInstance.get(`/user/usernames`);
    return request;
  } catch (error) {
    console.log("error from get", error);
  }
}

export const getUserCompetencies = async (teamId) => {
  try {
    const request = await axiosInstance.get(`/competency/teams-competencies/${teamId}`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
}

