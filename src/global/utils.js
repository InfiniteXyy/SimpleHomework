import { groupData } from "../utils/DemoServer";

const NEWS_HOST = "http://118.25.8.154/tp5/public/spider/index/category/";

const fetchData = (url, method, successCallback, failCallback) => {
  fetch(url, {
    method: method
  })
    .then(response => response.json())
    .then(responseJSON => {
      successCallback(responseJSON);
    })
    .catch(err => {
      failCallback(err);
    });
};

const fetchNews = (newsType, successCallback) => {
  return fetchData(NEWS_HOST + newsType, "GET", successCallback);
};

//TODO: 网络读取
const fetchCourseGroups = (cid, successCallback) => {
  successCallback(groupData)
};



export { fetchNews, fetchCourseGroups };
