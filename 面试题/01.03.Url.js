// /.../g  \s 代表空格
// 是正则表达式的属性, 表示全文匹配, 而不是找到一个就停止.

var replaceSpaces = function(S, length) {
  // return S.slice(0,length).replace(/\s/g,"%20") //正则匹配
  // split分割成数组，join合并为字符串
  return S.slice(0,length).split(' ').join('%20');
};