const count_handshake = number => {
  let count = 0;
  for (let person = 0; person < number; person++) {
    for (let shake = 0; shake < person; shake++) {
      count += 1;
    }
  }
  console.log(count);
};
count_handshake(3);
