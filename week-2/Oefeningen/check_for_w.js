const str2 = "don't know why?";
let output = "nee";

for (let i = 0; i < str2.length; i++) {
  if (str2[i] === "w" || "W") {
    output = "ja";
  }
}
console.log(output);
