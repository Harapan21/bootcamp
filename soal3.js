function rectangle(param) {
  let char = [];
  for (var i = 0; i < param; i++) {
    char.push([]);

    if (i % 3 == 0) {
      for (var j = 0; j < param; j++) {
        char[i].push("*");
      }
    } else {
      for (var j = 0; j < param; j++) {
        if (j % 3 == 0) {
          char[i].push("*");
        } else {
          char[i].push(" ");
        }
      }
    }
  }
  char.map(print => console.log(print.join(" ")));
}
// menggunakan nodejs
rectangle(7);
