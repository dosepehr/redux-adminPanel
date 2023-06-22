import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://redux-cms.iran.liara.run/api/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
        getCourses: builder.query({
            query: () => 'courses',
        }),
        getArticles: builder.query({
            query: () => 'articles',
        }),
    }),
});

export const { useGetUsersQuery, useGetCoursesQuery, useGetArticlesQuery } =
    apiSlice;
