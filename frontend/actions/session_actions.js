export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_FORMTYPE = "RECEIVE_FORMTYPE";
export const FETCH_ARTIST = "FETCH_ARTIST";

export const login = (user) => ({
  type: LOGIN,
  user
})

export const logout = () => ({
  type: LOGOUT,
})

export const signup = (user, redirect) => ({
  type: SIGNUP,
  user,
  redirect
})

export const fetchArtist = (artistId) => ({
  type: FETCH_ARTIST,
  artist_id
})

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
})

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const receiveFormType = (formType) => ({
  type: RECEIVE_FORMTYPE,
  formType
})
