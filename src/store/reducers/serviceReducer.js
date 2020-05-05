import {
  SHOW_SERVICES,
  SHOW_SERVICE_DETAIL,
  SHOW_NEW_SCHEMES,
} from "../actions/types";
import Services from "../../data/services";
import NewSchemes from "../../data/newschemes";

const initialState = {
  services: Services,
  serviceDetail: [],
  newSchemes : NewSchemes
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_SERVICES:
      return {
        ...state,
      };
    case SHOW_SERVICE_DETAIL: {
      return {
        serviceDetail: action.payload,
      };
    }
    case SHOW_NEW_SCHEMES :{
      return {
        ...state
      }
    }
    default:
      return state;
  }
}
