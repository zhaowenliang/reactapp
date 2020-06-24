import { GET_MOVIES } from './API'

/**
 * 获取电影列表
 */
export async function getMovies() {
    try {
        const response = await fetch(GET_MOVIES, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const responseJson = await response.json();
        console.log(`获取电影信息: ${JSON.stringify(responseJson)}`);

        return responseJson.movies;
    } catch (e) {
        console.error(e);
    }
}