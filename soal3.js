const draw_kotak = number => {
  let char = [];
  for (let i = 0; i < number; i++) {
    char.push([]);
    if (i % 2 == 0) {
      for (let j = 0; j < number; j++) {
        if (j % 2 == 0) {
          char[i].push("*");
        } else {
          char[i].push(" ");
        }
      }
    } else {
      for (let j = 0; j < number; j++) {
        if (j % 2 == 0) {
          char[i].push(" ");
        } else {
          char[i].push("*");
        }
      }
    }
  }
  char.map(print => console.log(print.join(" ")));
};
// menggunakan nodejs
draw_kotak(5);
