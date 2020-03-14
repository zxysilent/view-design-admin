import fetch from "./fetch";
export const apiEntGet = id => {
	return fetch.get(`/api/ent/get/${id}`);
};
export const admEntSelf = () => {
	return fetch.get(`/adm/ent/self`);
};
export const apiEntAll = () => {
	return fetch.get(`/api/ent/all`);
};
export const apiEntPage = data => {
	return fetch.get(`/api/ent/page`, { params: data });
};
export const admEntAdd = data => {
	return fetch.post(`/adm/ent/add`, data);
};
export const admEntEdit = data => {
	return fetch.post(`/adm/ent/edit`, data);
};
export const admEntDrop = id => {
	return fetch.get(`/adm/ent/drop/${id}`);
};
export const apiDeviceClassAll = data => {
	return fetch.get(`/api/device/class/tree/all`, { params: data });
};

export const admDevicePage = (cid, data) => {
	return fetch.get(`/adm/device/page/${cid}`, { params: data });
};

export const admDeviceInnerPage = (cid, data) => {
	return fetch.get(`/adm/device/inner/page/${cid}`, { params: data });
};
export const admDeviceCheckPage = data => {
	return fetch.get(`/adm/device/check/page`, { params: data });
};
export const admDeviceCheckReset = (id, data) => {
	return fetch.get(`/adm/device/check/reset/${id}`, { params: data });
};
export const admDeviceCheckNext = (id, data) => {
	return fetch.get(`/adm/device/check/next/${id}`, { params: data });
};
export const admDeviceAdd = data => {
	return fetch.post(`/adm/device/add`, data);
};

export const admDeviceDrop = id => {
	return fetch.get(`/adm/device/drop/${id}`);
};
export const apiDeviceGet = id => {
	return fetch.get(`/api/device/get/${id}`);
};
export const admDeviceEdit = data => {
	return fetch.post(`/adm/device/edit`, data);
};
export const admRecordAdd = data => {
	return fetch.post(`/adm/record/add`, data);
};
export const apiRecordAll = data => {
	return fetch.get(`/api/record/all`, { params: data });
};

export const admExportDevice = data => {
	return fetch.post(`/adm/export/device`, data);
};
export const admExportEnt = data => {
	return fetch.post(`/adm/export/ent`, data);
};
