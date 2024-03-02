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
  }),
});
export const { useGetLevelQuery, useCreateLevelMutation } = apiLevelSlice;
