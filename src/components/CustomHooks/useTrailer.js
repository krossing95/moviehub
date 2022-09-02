import useFetch from "./useFetch";
import { youtubeUrl } from "../variables";

const useTrailer = () => {
    const fetch = useFetch();

    const openVideo = async (type, id) => {
        const target = document.querySelector(`#vid-${id}`);
        target.innerHTML = "OPENING...";
        const url = await fetch.trailerUrl(type, id);
        target.innerHTML = "TRAILER";
        if(url.status !=="error") {
            if(url.data.results[0] !== undefined) {
                let videoUrlKey = url.data.results[0].key;
                window.open(`${youtubeUrl}${videoUrlKey}`, '_blank');
            } else{
                alert('Trailer does not exists for this movie');
            }
        } else{
            alert('The requested movie could not be fetched!');
        }
    }

    return { openVideo }
}

export default useTrailer;