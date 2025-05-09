/**
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

 

示例 1:

输入：s = "egg", t = "add"
输出：true
示例 2：

输入：s = "foo", t = "bar"
输出：false
示例 3：

输入：s = "paper", t = "title"
输出：true
 */

var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  
  const map1 = new Map()
  const map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) {
      map1.set(s[i], t[i])
    }
    if (!map2.has(t[i])) {
      map2.set(t[i], s[i])
    }

    if (map1.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i]) {
      return false
    }
  }
  return true;
};

const s = "badc",t = "baba"

// const s = "paper", t = "title"

console.log(isIsomorphic(s, t))