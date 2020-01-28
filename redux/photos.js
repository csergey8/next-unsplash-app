import { setLoading, clearLoading } from './ui';

const SET_PHOTOS = '@@PHOTOS/SET_PHOTOS';

export const initialState = {
  photos: null
}

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload
      }
    default:
      return state
  }
}

export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos
})

export const searchPhotos = (text) => async (dispatch) => {
  dispatch(setLoading());
  const resUrl = `https://api.unsplash.com/search/photos?page=1&query=${text}`;
  const res = await fetch(resUrl, {
    headers: {
      Authorization: `Client-ID 2032d48644d5da3b3251f6731fd848fa4f0708531c295d20c4d73eb943226ea1`
    }
  });
  const { results } = await res.json();
  dispatch(setPhotos(results));
  dispatch(clearLoading())
}

