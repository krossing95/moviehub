import axios from "axios";
import { baseUrl } from "../variables";

const useFetch = () => {

    const fetcher = async (url) => {
        const data = await axios.get(url)
            .then((response) => {
                const result = {status: response.status, data: response.data};
                return result;
            }).catch(() => {
                const result = {status: 'error', data: ''};
                return result;
            })
        ;
        return data;
    }
    
    const homepage = async (newPage) => {
        let url = `${baseUrl}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${newPage}`;
        const response = await fetcher(url);
        return response;
    }

    const discover = async (page) => {
        let url = `${baseUrl}discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`;
        const response = await fetcher(url);
        return response;
    }

    const tvSeries = async (page) => {
        let url = `${baseUrl}discover/tv?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`;
        const response = await fetcher(url);
        return response;
    }

    const trailerUrl = async (type, id) => {
        let url = `${baseUrl}${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        const response = await fetcher(url);
        return response;
    }

    const search = async (page, type, query) => {
        let url = `${baseUrl}search/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
        const response = await fetcher(url);
        return response;
    }
    
    return {
        homepage, tvSeries, discover, trailerUrl, search
    }
}

export default useFetch;