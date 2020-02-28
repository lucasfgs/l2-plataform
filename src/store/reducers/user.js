const INITIAL_STATE = {
  data: {}
};

const user = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "@user/login":
      return {
        data: action.user
      };
    default:
      return state;
  }
};

export default user;
