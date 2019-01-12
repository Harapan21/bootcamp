function is_username(username) {
  let re = new RegExp(/^[a-z_]{8}$/); // ^ (dimulai dengan string), [a-z_] (setiap character terdiri dari hurup kecil dan _), {8} minimal 8 character, & akhir dari string
  return re.test(username);
}
function is_password(password) {
  let re = new RegExp(/^\w{8}$/); // ^ (dimulai dengan string), \w = [a-zA-Z_0-9], {8} minimal 8 character, $ akhir dari string
  return re.test(password);
}
console.log(is_username("bigboss_"), is_password("qaWz_123"));
