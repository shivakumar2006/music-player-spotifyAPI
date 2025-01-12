import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '84ee0f49c6msh9371c7c4efa6dc9p161378jsnf187f3924881');
            headers.set('x-rapidapi-host', 'spotify23.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/search/?q=jhol&type=multi&offset=0&limit=67&numberOfTopResults=5',
        }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
