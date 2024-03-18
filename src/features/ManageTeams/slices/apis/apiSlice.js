import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = import.meta.env.VITE_API_URL;
import Cookies from "universal-cookie";

export const apiSlice = createApi({
  reducerPath: "apiTeams",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers, { getState }) => {
      const cookie = new Cookies();
      let token = cookie.get("userToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Teams"],
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => "/teams", //end point for get //true
      providesTags: ["Teams"],
    }),
    getTeamsName: builder.query({
      query: () => "/teams/teams-names", //to use in drop down
      providesTags: ["Teams"],
      keepUnusedDataFor:0 //to not cache data
    }),
    addTeam: builder.mutation({
      query: (team) => ({
        url: "/teams", //end point for add //true
        method: "POST",
        body: team, //body of request
      }),
      invalidatesTags: ["Teams"],
    }),
    editTeam: builder.mutation({
      query: (data) => ({
        url: `/teams/edit/${data._id}`,
        method: "POST",
        body: {
          teamName: data.teamName,
          teamLeader: data.teamLeader,
          parentTeam: data.parentTeam,
        },
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
