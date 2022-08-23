import { LOAD_JOB_LIST, SET_JOB_DETAIL } from '../constants/job';

import { getJobs } from '../../services/jobs';
import { isLoading, setError } from './ui';

// Action creator
export const loadJobList = (jobList) => ({ type: LOAD_JOB_LIST, payload: jobList });
export const setJobDetail = (jobDetail) => ({ type: SET_JOB_DETAIL, payload: jobDetail });

// Actions
export const fetchJobList = () => async (dispatch) => {
  try {
    dispatch(isLoading(true));
    const jobList = await getJobs();
    dispatch(loadJobList(jobList));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(isLoading(false));
  }
};
