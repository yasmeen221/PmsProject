import axiosInstance from "../../../../components/GeneralApi/generalApi";

export const getLevelsData=async()=>{
    try{
        let response=await axiosInstance.get("/levels");
        let levelsData=response.data;
        return levelsData
    }catch(e){
        console.log(e);
        
    }

}