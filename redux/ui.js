const SET_LOADING = '@@UI/SET_LOADING';
const CLEAR_LOADING = '@@UI/CLEAR_LOADING';

export const initialState = {
  loading: false
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export const setLoading = () => ({
  type: SET_LOADING
})

export const clearLoading = () => ({
  type: CLEAR_LOADING
})
