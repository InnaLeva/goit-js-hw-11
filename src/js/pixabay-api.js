export default function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45303563-302093c4a665963323dd6d400";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}