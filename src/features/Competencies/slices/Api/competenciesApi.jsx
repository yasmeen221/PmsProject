import axiosInstance from "../../../../components/GeneralApi/generalApi";

// to get all data
export const getAllDataCompetencies = async () => {
  try {
    const request = await axiosInstance.get(`/competency`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};
//og get all competencies assigned to specific team
export const getAllTeamCompetencies = async (competencyId) => {
  try {
    const request = await axiosInstance.get(
      `/competency/teams-competencies/${competencyId}`,
    );
    // console.log(request.data)
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};
//to insert new data
export const createData = async (newData) => {
  try {
    const request = await axiosInstance.post(`/competency`, newData);
    return request.data;
  } catch (error) {
    console.log("error from create", error);
    throw error;
  }
};

// to  update existing data
export const updateData = async (id, updatedData) => {
  //will know from back use post or  put
  try {
    const request = await axiosInstance.post(`/competency/${id}`, {
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
    const request = await axiosInstance.delete(`/competency/${id}`);
    return request.data;
  } catch (error) {
    console.log("error from delete", error);
  }
};
export const searchCompetencies = async (searchTerm) => {
  try {
    const request = await axiosInstance.get(
      `/competency/search?comp=${searchTerm}`,
    );
    console.log(request);
    return request.data;
  } catch (error) {
    console.log("Error searching competencies:", error);
  }
};

export const filterWithCategory = async (categoryId) => {
  try {
    const request = await axiosInstance.get(
      `/competency/filter?categoryId=${categoryId}`,
    );
    return request.data;
  } catch (error) {
    console.log("Error filter with category competencies:", error);
  }
};
export const filterWithTeam = async (teamId) => {
  try {
    const request = await axiosInstance.get(
      `/competency/filter?teamId=${teamId}`,
    );
    return request.data;
  } catch (error) {
    console.log("Error filter with team competencies:", error);
  }
};
export const filterWithLevel = async (levelId) => {
  try {
    const request = await axiosInstance.get(
      `/competency/filter?levelId=${levelId}`,
    );
    return request.data;
  } catch (error) {
    console.log("Error filter with level competencies:", error);
  }
};
export const getDataCompetenciesByID = async (id) => {
  try {
    const request = await axiosInstance.get(`/competency/${id}`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};