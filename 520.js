/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return word.toLocaleUpperCase() === word || word.toLocaleLowerCase() === word ||
  word.substring(1,word.length).toLocaleLowerCase() === word.substring(1,word.length)
};