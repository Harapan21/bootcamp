function ganti_kata(kata, getHuruf, setHuruf) {
  let temp = kata.split("");
  temp.map((huruf, i) => {
    if (huruf === getHuruf) {
      temp[i] = setHuruf;
    }
  });
  return temp.join("");
}
console.log(ganti_kata("kalompok", "a", "e"));
