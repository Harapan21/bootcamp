const is_username_valid = username => {
  // ^ (dimulai dengan string), [a-z_] (setiap character terdiri dari hurup kecil dan _), {8} minimal 8 character, & akhir dari string
  let re = new RegExp(/^[a-z_]{8}$/);
  return re.test(username);
};
const is_password_valid = password => {
  // ^ (dimulai dengan string), \w = [a-zA-Z_0-9],!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?  karakter spesial,  {8} minimal 8 character, $ akhir dari string
  let re = new RegExp(/^[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8}$/);
  return re.test(password);
};
console.log(
  is_username_valid("_jakarta"),
  is_username_valid("solo_abc"),
  is_username_valid("soetami_"),
  is_password_valid("wsxE99##"),
  is_password_valid("sw1p3^UP")
);
