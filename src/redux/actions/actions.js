import { types } from "../constants/types";

export const contactFormSubmit = (data) => (dispatch) => {
  dispatch({
    type: types.CONTACT_FORM_SUBMIT,
    payload: data,
  })
}

export const setActiveSection = (data) => (dispatch) => {
  dispatch({
    type: types.SET_ACTIVE_SECTION,
    payload: data,
  })
}

export const setAutoSlide = (data) => (dispatch) => {
  dispatch({
    type: types.SET_AUTO_SLIDE,
    payload: data,
  })
}

export const setFixNav = (data) => (dispatch) => {
  dispatch({
    type: types.SET_FIX_NAV,
    payload: data,
  })
}

export const setMenu = (data) => (dispatch) => {
  dispatch({
    type: types.SET_MENU,
    payload: data,
  })
}

export const setSlide = (data) => (dispatch) => {
  dispatch({
    type: types.SET_SLIDE,
    payload: data,
  })
}

export const setInactiveSlide = (data) => (dispatch) => {
  dispatch({
    type: types.SET_INACTIVE_SLIDE,
    payload: data,
  })
}