import H5Calendar from './calendar.vue';

H5Calendar.install = Vue => Vue.component('H5Calendar', H5Cropper);//注册组件
// 标签的方式引入，留到后面再另开新篇讨论
const install = function (Vue, opts = {}) {
    Vue.component('H5Calendar', H5Calendar);
}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default H5Calendar;