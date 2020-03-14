// import Router from "@/router";
import { Base64 } from "js-base64";

const storage = process.env.NODE_ENV === "development" ? localStorage : sessionStorage;

const utils = {};
const tokenKey = "bearer";
utils.title = function(title) {
	title = title || "--";
	window.document.title = title;
};

//保存数据
utils.setToken = token => {
	storage.setItem(tokenKey, token);
};
utils.getToken = () => {
	return storage.getItem(tokenKey);
};
// 获取保存的用户信息
utils.getAuth = () => {
	try {
		let token = Base64.decode(storage.getItem(tokenKey).split(".")[1]);
		let auth = JSON.parse(token);
		if (!auth.hasOwnProperty("id") || !auth.hasOwnProperty("role")) {
			storage.clear();
			// Router.push({ name: "login" });
		}
		return auth;
	} catch (e) {
		storage.clear();
		// Router.push({ name: "login" });
	}
};
utils.getRole = r => {
	let rl = utils.getAuth().role;
	rl = rl
		.toString(2)
		.split("")
		.reverse();
	return rl[r] == "1";
};
// 不需要也可登录页面集合
utils.noAuth = r => {
	return ["login", "errjwt", "err401", "err50x", "err404", "index", "list", "detail", "signin"].indexOf(r) > -1;
};
utils.roleSets = function(rl) {
	rl = rl
		.toString(2)
		.split("")
		.reverse();
	let rls = [];
	for (let i = 0; i <= rl.length; i++) {
		if (rl[i] == "1") {
			rls.push(i);
		}
	}
	return rls;
};

// yyyy-MM-dd hh:mm:ss
utils.fmtDate = (date, fmt) => {
	var o = {
		"M+": date.getMonth() + 1, //月份
		"d+": date.getDate(), //日
		"h+": date.getHours(), //小时
		"m+": date.getMinutes(), //分
		"s+": date.getSeconds() //秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return fmt;
};
export { storage };
export default utils;
