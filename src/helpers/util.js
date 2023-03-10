function friendlyDate(dataStr) {
  let dateObj = typeof dataStr === "object" ? dataStr : new Date(dataStr);
  let time = dateObj.getTime();
  let now = Date.now();
  let space = now - time;
  let str;

  switch (true) {
    case space < 60000:
      str = "刚刚";
      break;
    case space < 1000 * 3600:
      str = Math.floor(space / 60000) + "分钟前";
      break;
    case space < 1000 * 3600 * 24:
      str = Math.floor(space / (1000 * 3600)) + "小时前";
      break;
    default:
      str = Math.floor(space / (1000 * 3600 * 24)) + "天前";
  }
  return str;
}

export default {
  install(Vue) {
    Vue.prototype.friendlyDate = friendlyDate;
  }
};
