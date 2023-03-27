import axios from 'axios';

const searchImages = async (term) =>{
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID c_RIJS1CQ62cosCbXJrZolVB7OfuKUrPP80M-Eg1R0c',
        },
        params: {
            query: term,

        }
    });

    console.log(response.data.results);

    return response.data.results;
};

export default  searchImages;