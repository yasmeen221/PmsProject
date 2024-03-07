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
    return request.data;
  } catch (error) {
    console.error("Error searching competencies:", error);
  }
};
// export const filterCompetencies = async (filterTerm) => {
//   try {
//     const request = await axiosInstance.get(
//       `/competency/......${filterTerm}`,
//     );
//     return request.data;
//   } catch (error) {
//     console.error("Error filtering competencies:", error);
//   }
// };
