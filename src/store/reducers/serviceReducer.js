import { SHOW_SERVICES, SHOW_SERVICE_DETAIL } from "../actions/types";
import Services from "../../data/services";

const initialState = {
  services: Services,
  serviceDetail: [],
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
    default:
      return state;
  }
}
