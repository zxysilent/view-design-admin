import fetch from "./fetch";

export const login = data => {
	return fetch.post("/api/login", data);
};
export const logoff = data => {
	//   return fetch.post("/api/logoff", data);
};
export const admAuth = () => {
	return fetch.get("/adm/auth");
};
export const admRetoken = () => {
	return fetch.get("/adm/retoken");
};
export const admNaver = () => {
	return fetch.get("/adm/naver");
};
export const admRoleSets = () => {
	return fetch.get("/adm/role/sets");
};
export const admEditInfo = data => {
	return fetch.post("/adm/edit/info", data);
};
export const admEditPass = data => {
	return fetch.post("/adm/edit/pass", data);
};
// 服务器信息
export const admSrvStat = () => {
	return fetch.get("/adm/srv/stat");
};
