import { WITHDRAW_MONEY } from "../constants";

export default (state, action) => {
  switch (action.type) {
    case WITHDRAW_MONEY:
      return {
        ...state,
        balance: state.balance - action.amount
      };
    default:
      return state;
  }
};
