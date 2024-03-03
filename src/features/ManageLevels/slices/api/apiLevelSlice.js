import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = import.meta.env.VITE_API_URL;
export const apiLevelSlice = createApi({
  reducerPath: "apilevel",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Levels"],
  endpoints: (builder) => ({
    getLevel: builder.query({
      query: () => "/levels",
      providesTags: ["Levels"],
    }),
    createLevel: builder.mutation({
      query: (levelName) => ({
        url: "/levels",
        method: "POST",
        body: { levelName },
      }),
      invalidatesTags: ["Levels"],
    }),
  
    updateLevel: builder.mutation({
      query: ( {levelName,id} ) => {
        return {
          url: `/levels/edit/${id}`, 
          method: "POST",
          body: { levelName }, 
        };
      },
      invalidatesTags: ["Levels"],
    }),
    
    
    
    deleteLevel: builder.mutation({
      query: (id) => ({
        url: `/levels/delete/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Levels"],
    }),
  }),
});
export const { useGetLevelQuery, useCreateLevelMutation, useDeleteLevelMutation ,useUpdateLevelMutation} = apiLevelSlice;

