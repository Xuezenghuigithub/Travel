let defaultCity = '西安'
try { // 防止用户关闭localStorage后浏览器抛出异常
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default { // 全局共用数据
  city: defaultCity
}
