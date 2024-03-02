import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiLevelSlice= createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    tagTypes:["Levels"],
    endpoints:(builder)=>({
        getLevel:builder.query({
            query:()=>"/api/v1/levels",
            providesTags:["Levels"],
        }),
        createLevel:builder.mutation({
            query:(levelName)=>({
                url:"/api/v1/levels",
                method:"POST",
                body:{levelName}
            }),
            invalidatesTags:["Levels"],
        }),
    })
})
export const {useGetLevelQuery, useCreateLevelMutation}= apiLevelSlice