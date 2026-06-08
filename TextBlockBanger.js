const letterMap = {
  a: "ạ", A: "ᗩ",
  b: "ƅ", B: "ᗷ",
  c: "ϲ", C: "ᑕ",
  d: "ԁ", D: "ᗪ",
  e: "ẹ", E: "ᗴ",
  f: "ƒ", F: "ᖴ",
  g: "ɡ", G: "ᘜ",
  h: "һ", H: "ᕼ",
  i: "і", I: "Ꭵ",
  j: "ј", J: "ᒍ",
  k: "κ", K: "ᛕ",
  l: "ӏ", L: "ᒪ",
  m: "м", M: "ᗰ",
  n: "ո", N: "ᑎ",
  o: "ο", O: "Ｏ",
  p: "р", P: "ᑭ",
  q: "զ", Q: "ᑫ",
  r: "г", R: "ᖇ",
  s: "ʂ", S: "Ｓ",
  t: "τ", T: "Ꭲ",
  u: "υ", U: "ᑌ",
  v: "ν", V: "ᐯ",
  w: "ѡ", W: "ᗯ",
  x: "х", X: "᙭",
  y: "у", Y: "Ꭹ",
  z: "ʐ", Z: "⼄"
};
function BangTheBlockedText(sentence) {
  // Kitchen Gun! BANG BANG BANG! And it sparkles like new!
  return sentence.split(' ').map(word => {
    return word.split('').map((char, index) => {
      if ((Math.floor(Math.random() * 2) === 1 || index === word.length-1) && letterMap[char]) {
        return letterMap[char];
      }
      return char;
    }).join('');
  }).join(' ');
}
document.addEventListener("DOMContentLoaded", () => {
document.body.innerHTML = BangTheBlockedText(document.body.innerHTML);
}
