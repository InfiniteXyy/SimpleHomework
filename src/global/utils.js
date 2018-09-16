import { groupData } from '../global/DemoServer';

const NEWS_HOST = 'http://118.25.8.154/tp5/public/spider/index/category/';
const NEWS_HOST_BY_ID = 'http://118.25.8.154/tp5/public/spider/index/categoryById/';
const RSS_HOST = 'http://118.25.8.154/tp5/public/spider/index/category_list';

const fetchData = (url, method, successCallback, failCallback) => {
  if (failCallback === undefined) failCallback = console.log;
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

const fetchRSSList = successCallback => {
  return fetchData(RSS_HOST, 'GET', successCallback);
};

const fetchNews = (newsType, successCallback) => {
  return fetchData(NEWS_HOST + newsType, 'GET', successCallback);
};
const fetchNewsById = (categoryId, successCallback) => {
  return fetchData(NEWS_HOST_BY_ID + categoryId, 'GET', successCallback);
};

//TODO: 网络读取
const fetchCourseGroups = (cid, successCallback) => {
  successCallback(groupData);
};

const debounce = (method, delay) => {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      method();
    }, delay);
  };
};

const arrayEquals = (array1, array2) => {
  return array1.length === array2.length && array1.every(value => array2.indexOf(value) !== -1);
};

export { fetchNews, fetchNewsById, fetchCourseGroups, fetchRSSList, debounce, arrayEquals };
