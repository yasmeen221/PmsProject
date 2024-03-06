import axiosInstance from "../../../../components/GeneralApi/generalApi";

// to get all data
export const getAllData = async () => {
  try {
    const request = await axiosInstance.get(`/category`);
    return request.data;
  } catch (error) {
    console.log("error from get", error);
  }
};

//to insert new data
export const createData = async (newData) => {
  try {
    const request = await axiosInstance.post(`/category`,  newData );
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
    const request = await axiosInstance.post(`/category/${id}`, {
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
    const request = await axiosInstance.delete(`/category/${id}`);
    return request;
  } catch (error) {
    console.log("error from delete", error);
  }
};