import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const shazamCoreApi = createApi({
     reducerPath: "shazamCoreApi",
     baseQuery : fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '84ee0f49c6msh9371c7c4efa6dc9p161378jsnf187f3924881')

            return headers;
        }
     }),
     endpoints: (builder) => ({
        getTopCharts: builder.query({ query: '/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv'})
     })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi; 