import { WITHDRAW_MONEY } from '../constants';

export const withdrawMoney = amount => {
  return {
    type: WITHDRAW_MONEY,
    amount
  };
}
