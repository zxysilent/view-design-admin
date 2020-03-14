import fetch from "./fetch";

// 判断当前账号是否已经存在

//分页

//更新用户状态
export const admUserChgAtv = data => {
	return fetch.post(`/adm/user/chg/atv`, data);
};
//重置用户密码
export const admUserReset = id => {
	return fetch.get(`/adm/user/reset/${id}`);
};
//修改用户
export const userEdit = data => {
	return fetch.post("/api/user/edit", data);
};
//删除用户
export const admUserDrop = id => {
	return fetch.get(`/adm/user/drop/${id}`);
};

export const apiUserExist = num => {
	return fetch.get(`/api/user/exist/${num}`);
};
export const admUserAdd = data => {
	return fetch.post("/adm/user/add", data);
};
export const admUserEdit = data => {
	return fetch.post("/adm/user/edit", data);
};
export const admUserPage = data => {
	return fetch.get(`/adm/user/page`, { params: data });
};
export const admUserGet = id => {
	return fetch.get(`/adm/user/get/${id}`);
};
