const isAuthenticated = () => {
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  return authenticated;
};

export default isAuthenticated;
