const INITIAL_STATE = {
  email: "",
  nome: "",
  login: ""
};

const user = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "@user/login":
      return {
        email: action.email,
        name: action.name,
        login: action.login
      };
    default:
      return state;
  }
};

export default user;
