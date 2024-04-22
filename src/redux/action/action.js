import axios from "axios";
import {
  SignupSuccess, StartTrackingSuccess, GetAllTrackRecordsSuccess,
  SignupFailure, StartTrackingFailure, GetAllTrackRecordsFailure,
  LoginSuccess, StopTrackingSuccess,
  LoginFailure, StopTrackingFailure
} from "./actionType";
const apiUrl = process.env.REACT_APP_API_URL;

export const SignupUser = (userData) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .post(apiUrl + "/api/signup", userData, config)
      .then((response) => {
        dispatch(SignupSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(SignupFailure(error.data));
        return error;
      });
  };
};
export const LoginUser = (userData) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .post(apiUrl + "/api/login", userData, config)
      .then((response) => {
        dispatch(LoginSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(LoginFailure(error.data));
        return error;
      });
  };
};
export const startTracking = (userData) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .post(apiUrl + "/api/tracking/start", userData, config)
      .then((response) => {
        dispatch(StartTrackingSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(StartTrackingFailure(error.data));
        return error;
      });
  };
};
export const stopTracking = (userData) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .post(apiUrl + "/api/tracking/stop", userData, config)
      .then((response) => {
        dispatch(StopTrackingSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(StopTrackingFailure(error.data));
        return error;
      });
  };
};

export const getAllTrackRecords = () => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .get(apiUrl + "/api/tracking/total-work-status", config)
      .then((response) => {
        dispatch(GetAllTrackRecordsSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(GetAllTrackRecordsFailure(error.data));
        return error;
      });
  };
};