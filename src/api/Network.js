import * as API from './API';

const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * 获取电影列表
 */
export async function getMovies() {
  const response = await fetch(API.GET_MOVIES, {
    method: 'GET',
    headers: COMMON_HEADERS,
  });

  const responseJson = await response.json();
  console.log(`获取电影信息: ${JSON.stringify(responseJson)}`);

  return responseJson.movies;
}

/**
 * 获取电影列表
 */
export async function getWanBanner() {
  const api = API.WAN_BASE_URL + API.GET_WAN_BANNER;
  const response = await fetch(api, {
    method: 'GET',
    headers: COMMON_HEADERS,
  });

  const responseJson = await response.json();
  console.log(`获取WanBanner: ${JSON.stringify(responseJson)}`);

  return responseJson.data;
}
