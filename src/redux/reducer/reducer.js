import { types } from "../constants/types";
const initialState = {
  activeSection: 'home',
  activeSlide: 0,
  autoSlide: true,
  contactFormSubmit: false,
  fixNav: false,
  inactiveSlide: null,
  menuState: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CONTACT_FORM_SUBMIT:
      return { 
        ...state, 
        contactFormSubmit: action.payload
     }

     case types.SET_ACTIVE_SECTION:
      return { 
        ...state, 
        activeSection: action.payload 
      }

    case types.SET_AUTO_SLIDE:
      return { 
        ...state, 
        autoSlide: !action.payload 
      }

    case types.SET_FIX_NAV:
      return { 
        ...state, 
        fixNav: !action.payload 
      }

  case types.SET_INACTIVE_SLIDE:
    return { 
      ...state, 
      inactiveSlide: action.payload 
    }

    case types.SET_MENU:
      return { 
        ...state, 
        menuState: !action.payload 
      }

    case types.SET_SLIDE:
      return { 
        ...state, 
        activeSlide: action.payload 
      }
      
    default:
      return {
        ...state
      }
  }
};