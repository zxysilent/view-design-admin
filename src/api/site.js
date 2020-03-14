import fetch from "./fetch";
export const apiSiteGet = id => {
	return fetch.get(`/api/site/get/${id}`);
};
export const admSiteEdit = data => {
	return fetch.post(`/adm/site/edit`, data);
};
