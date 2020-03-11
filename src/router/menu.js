const menu = [
    {
        path: "/index",
        name: "index",
        icon: "md-home",
        level: 1,
        sort: 1,
        children: [],
        fixed: false
    },
    {
        path: "/",
        name: "列表页",
        icon: "md-list",
        level: 0,
        fixed: false,
        children: [
            {
                path: "/chart",
                name: "chart",
                icon: "mk-link",
                level: 1,
                children: [],
                fixed: false
            },
            {
                path: "/list",
                name: "list",
                level: 1,
                children: [],
                fixed: false
            },
            {
                path: "/userInfo",
                name: "userInfo",
                icon: "ios-book",
                children: [],
                fixed: false,
                level: 1
            },
            {
                level: 1,
                path: "/userList",
                children: [],
                fixed: false,
                name: "userList"
            },
            {
                level: 1,
                path: "/table",
                name: "table",
                children: [],
                fixed: false,
                hidden: true
            },
            {
                level: 1,
                path: "/icon",
                name: "icon",
                children: [],
                fixed: false,
                icon: "ios-bowtie"
            },
            {
                level: 1,
                path: "/filter",
                name: "filter",
                children: [],
                fixed: false,
                icon: "ios-bowtie"
            }
        ]
    },
    {
        path: "/",
        name: "页面",
        level: 0,
        icon: "md-build",
        fixed: false,
        children: [
            {
                level: 1,
                path: "/error404",
                children: [],
                fixed: false,
                name: "404"
            },
            {
                level: 1,
                path: "/notfound",
                children: [],
                fixed: false,
                name: "Not found"
            },
            {
                level: 1,
                path: "/login",
                children: [],
                fixed: false,
                name: "登录"
            },
            {
                level: 1,
                path: "/register",
                children: [],
                fixed: false,
                name: "注册"
            }
        ]
    },
    {
        path: "/",
        name: "管理",
        level: 0,
        icon: "md-build",
        fixed: false,
        children: [
            {
                level: 1,
                path: "/setMenu",
                children: [],
                fixed: false,
                name: "setMenu"
            },
            {
                level: 1,
                path: "/setMenu2",
                children: [],
                fixed: false,
                name: "setMenu2"
            },
            {
                level: 1,
                path: "/notFound",
                children: [],
                fixed: false,
                name: "notFound"
            }
        ]
    },
    {
        path: "/index",
        name: "123",
        icon: "md-body",
        // hidden: true,
        level: 0,
        sort: 1,
        children: [],
        fixed: false
    },
    {
        path: "/index",
        name: "123",
        icon: "md-add-circle",
        // hidden: true,
        level: 0,
        sort: 1,
        children: [],
        fixed: false
    }
];

export default menu;
