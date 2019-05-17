/**
 * Types
 */

export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  email: '',
  password: '',
  token: '',
  error: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  loginRequest: data => ({
    type: Types.REQUEST,
    payload: { data },
  }),

  loginSuccess: token => ({
    type: Types.SUCCESS,
    payload: { token },
  }),

  loginFailure: err => ({
    type: Types.FAILURE,
    error: err,
  }),
};
