import fetch from "./fetch";

export const apiClassAll = () => {
	return fetch.get(`/api/class/all`);
};
export const apiClassTreeAll = data => {
	return fetch.get(`/api/class/tree/all`, { params: data });
};
export const admClassDrop = id => {
	return fetch.get(`/adm/class/drop/${id}`);
};
export const admClassChgShow = data => {
	return fetch.post(`/adm/class/chg/show`, data);
};
export const apiClassGet = id => {
	return fetch.get(`/api/class/get/${id}`);
};
export const admClassReCache = () => {
	return fetch.get(`/adm/class/recache`);
};
export const admClassAdd = data => {
	return fetch.post(`/adm/class/add`, data);
};
export const admClassEdit = data => {
	return fetch.post(`/adm/class/edit`, data);
};
