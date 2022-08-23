import { IS_LOADING, OPEN_MODAL, SET_ERROR } from '../constants/ui';

export const isLoading = (loading) => ({ type: IS_LOADING, payload: loading });
export const openModal = (modal) => ({ type: OPEN_MODAL, payload: modal });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
