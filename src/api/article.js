import fetch from "./fetch";

export const apiArticleGet = id => {
	return fetch.get(`/api/article/get/${id}`);
};
export const apiArticlePage = (cid, data) => {
	return fetch.get(`/api/article/page/${cid}`, { params: data });
};
export const admArticleAdd = data => {
	return fetch.post(`/adm/article/add`, data);
};
export const admArticleEdit = data => {
	return fetch.post(`/adm/article/edit`, data);
};
export const admArticleDrop = id => {
	return fetch.get(`/adm/article/drop/${id}`);
};

export const admArticleChgTop = data => {
	return fetch.post(`/adm/article/chg/top`, data);
};
export const apiArticleLimit = (cid, data) => {
	return fetch.get(`/api/article/limit/${cid}`, { params: data });
};