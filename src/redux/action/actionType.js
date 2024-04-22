export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const START_TRACKING_SUCCESS = "START_TRACKING_SUCCESS";
export const START_TRACKING_FAILURE = "START_TRACKING_FAILURE";
export const STOP_TRACKING_SUCCESS = "STOP_TRACKING_SUCCESS";
export const STOP_TRACKING_FAILURE = "START_TRACKING_FAILURE";

export const GET_ALL_TRACK_RECORDS_SUCCESS = "GET_ALL_TRACK_RECORDS_SUCCESS";
export const GET_ALL_TRACK_RECORDS_FAILURE = "GET_ALL_TRACK_RECORDS_FAILURE";


export const SignupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};
export const SignupFailure = (data) => {
  return {
    type: SIGNUP_FAILURE,
    payload: data,
  };
};
export const LoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const LoginFailure = (data) => {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
};

export const StartTrackingSuccess = (data) => {
  return {
    type: START_TRACKING_SUCCESS,
    payload: data,
  };
};
export const StartTrackingFailure = (data) => {
  return {
    type: START_TRACKING_FAILURE,
    payload: data,
  };
};

export const StopTrackingSuccess = (data) => {
  return {
    type: STOP_TRACKING_SUCCESS,
    payload: data,
  };
};
export const StopTrackingFailure = (data) => {
  return {
    type: STOP_TRACKING_FAILURE,
    payload: data,
  };
};

export const GetAllTrackRecordsSuccess = (data) => {
  return {
    type: GET_ALL_TRACK_RECORDS_SUCCESS,
    payload: data,
  };
};
export const GetAllTrackRecordsFailure = (data) => {
  return {
    type: GET_ALL_TRACK_RECORDS_FAILURE,
    payload: data,
  };
};


