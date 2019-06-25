const EB = {};

EB.install = (Vue) => {
  const vue = Vue;
  vue.prototype.$bus = new Vue();
};

export default EB;
