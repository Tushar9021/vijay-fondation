import { SHOW_SERVICES, SHOW_SERVICE_DETAIL } from "./types";
import Services from "../../data/services";

export const showAllServices = (serviceId) => (dispatch) => {
  const selectedService = Services.find((service) => {
    if (serviceId === service.serviceTitle) {
      return service;
    }
  });
 
  dispatch({
    type: SHOW_SERVICE_DETAIL,
    payload: selectedService.subServices,
  });
};
