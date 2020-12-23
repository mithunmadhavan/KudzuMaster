
import CONSTANTS from '../constants'

const sampleApi = (id='') => {
    return new Promise((resolve, reject) => {
            fetch(CONSTANTS.API_URL.SAMPLE_URL_DATA + id, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                })
                .catch((error) => {
                    reject(error);
                });
    });
}




export default {
    sampleApi
}