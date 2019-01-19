const print_abc = (kolom, baris) => {
  let abjad = "abcdefghijklmnopqrstuvwxyz".split("");
  let table = [];
  for (let i = 0; i < baris; i++) {
    table.push([]);
    for (let j = 0; j < kolom; j++) {
      table[i].push(abjad[j]);
    }
    abjad.splice(0, kolom);
  }
  table.map(huruf => console.log(huruf.join(" ")));
};
print_abc(3, 4);
