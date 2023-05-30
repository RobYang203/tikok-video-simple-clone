import createActionTypes from "redux-create-actiontype";

export const syncActionTypes = createActionTypes()("CACHE_INFO");

export const asyncActionTypes = createActionTypes({
  apiPostfixes: ["success", "error", "processing"],
})({ GET_TOTAL_BANK_LIST: { api: true } });

const totalActionTypes = {
  ...syncActionTypes,
  ...asyncActionTypes,
};

export default totalActionTypes;
