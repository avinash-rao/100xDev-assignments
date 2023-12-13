/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length !== str2.length)
        return false;

    const charactersInStr1 = str1.split("");
    const charactersInStr2 = str2.split("");

    for(let c of charactersInStr1) {
        if (charactersInStr2.includes(c)) {
            const index = charactersInStr2.indexOf(c);
            charactersInStr2.splice(index, 1);
        }
        else {
            return false;
        }
    }
    return true;
}

module.exports = isAnagram;
