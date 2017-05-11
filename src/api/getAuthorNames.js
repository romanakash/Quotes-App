import api from './init';
import seedAuthorNames from '../realm/seed/seedAuthorNames';

const getAuthorNames = () => {
    api
        .get('./authors')
        .then((res) => {
            if (res.data !== undefined) {
                seedAuthorNames(res.data)
            }
        })
        .catch(err => console.error(err))
}

export default getAuthorNames;
