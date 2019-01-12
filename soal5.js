function count_handshake(people) {
  count = 0;
  for (let action = 0; action < people; action++) {
    count += 1;
  }
  return count;
}

console.log(count_handshake(6));
