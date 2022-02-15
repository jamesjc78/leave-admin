export const loginValid = (loginError, username, password) => {
  let valid = true;

  // validate form errors being empty
  Object.values(loginError).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  username === null && (valid = false);
  password === null && (valid = false);

  return valid;
};
