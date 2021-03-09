function counts(article) {
  article = article.trim().toUpperCase();
  const array = article.match(/[A-Z]+/g);
  article = " " + array.join(" ") + " ";
  let max = num = 0, maxWord = "";
  for (let i = 0; i < array.length; i++) {
    num = article.match(new RegExp(" " + array[i] + " ", 'g')).length;
    if (num > max) {
      max = num;
      maxWord = array[i]
    }
  }
  return { maxWord: max }
}
console.log(counts("Age has reached the end of the beginning of a word. May be guilty in his seems to passing a lot of different life became the appearance of the same day;"));
