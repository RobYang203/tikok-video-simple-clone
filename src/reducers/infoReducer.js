import types from "actions/types";
import { infoState } from "./initialState";

export default function infoReducer(info = infoState, { type, payload }) {
  switch (type) {
    case types.CACHE_INFO:
      return { ...info, cache: { ...payload } };
    default:
      return info;
  }
}
