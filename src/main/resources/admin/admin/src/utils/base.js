const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5l301/",
            name: "springboot5l301",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot5l301/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "亚洲杯志愿者管理系统小程序"
        } 
    }
}
export default base
