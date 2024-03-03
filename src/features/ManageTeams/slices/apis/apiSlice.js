import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setTeamsData } from "../addTeamTogglePopUp";
const URL = import.meta.env.VITE_API_URL;
export const apiSlice = createApi({
  reducerPath: "apiTeams",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ["Teams"],
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => "/teams",

      // onSuccess: (data, { dispatch, getState }) => {
      //   const globalData = getState().global.globalData;
      //   dispatch(setTeamsData(globalData));
      //   console.log("hhhh", globalData);
      // },
      //end point for get //true
      providesTags: ["Teams"],
    }),

    getTeamsName: builder.query({
      query: () => "/teams/teams-names", //to use in drop down
      providesTags: ["Teams"],
    }),

    addTeam: builder.mutation({
      query: (team) => ({
        url: "/teams/edit", //end point for add //true
        method: "POST",
        body: { team }, //body of request
      }),
      invalidatesTags: ["Teams"],
    }),
    editTeam: builder.mutation({
      query: (id) => ({
        url: `/teams/edit/${id}`,
        method: "POST",
        body: { team },
      }),
      invalidatesTags: ["Teams"],
    }),
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/teams/delete/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Teams"],
    }),
  }),
});
export const {
  useGetTeamsQuery,
  useAddTeamMutation,
  useEditTeamMutation,
  useDeleteTeamMutation,
  useGetTeamsNameQuery,
} = apiSlice;
