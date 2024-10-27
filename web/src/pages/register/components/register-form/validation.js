export const validateConfirmPassword = (confirmPassword, password) => {
  if (password) {
    return confirmPassword === password ? undefined : 'Passwords must match';
  }

  // this validation doesn't have to kick in if the password field is empty
  return undefined;
};
