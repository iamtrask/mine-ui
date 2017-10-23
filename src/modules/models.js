// Dummy models we use as stubs until mine.js has this fully implemented
import DUMMY_MODELS from './dummy/models';

export const ENQUEUE_MODEL = 'model/ENQUEUE_MODEL';
export const DEQUEUE_MODEL = 'model/DEQUEUE_MODEL';
export const ADD_MODEL = 'model/ADD_MODEL';
export const REMOVE_MODEL = 'model/REMOVE_MODEL';

const initialState = {
  modelQueue: [], // The queue of actively trained models
  models: DUMMY_MODELS // The list of all available models to train
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENQUEUE_MODEL:
      return {
        ...state,
        modelQueue: [...state.modelQueue, action.model]
      };

    case DEQUEUE_MODEL:
      return {
        ...state,
        modelQueue: [
          ...state.modelQueue.slice(0, action.index),
          ...state.modelQueue.slice(action.index + 1)
        ]
      };

    case ADD_MODEL:
      return {
        ...state,
        models: [...state.models, action.model]
      };

    case REMOVE_MODEL:
      return {
        ...state,
        models: [
          ...state.models.slice(0, action.index),
          ...state.models.slice(action.index + 1)
        ]
      };

    default:
      return state;
  }
};

// Adds a model to state.models.modelQueue
export const enqueueModel = model => {
  const currentTime = Math.floor(Date.now() / 1000);
  const trainingTime =
    (currentTime + Math.floor(Math.random() * 120) + 80) * 1000;

  model.timeRemaining = trainingTime;

  return dispatch => {
    dispatch(removeModel(model));

    dispatch({
      type: ENQUEUE_MODEL,
      model
    });
  };
};

// Removes a model from state.models.modelQueue
export const dequeueModel = model => {
  return (dispatch, getState) => {
    getState().models.modelQueue.forEach((item, index) => {
      if (item.id === model.id) {
        dispatch(addModel(model));

        dispatch({
          type: DEQUEUE_MODEL,
          index: index
        });
      }
    });
  };
};

// Adds a model to state.models.models
export const addModel = model => {
  delete model.timeRemaining;

  return dispatch => {
    dispatch({
      type: ADD_MODEL,
      model
    });
  };
};

// Removes a model from state.models.models
export const removeModel = model => {
  return (dispatch, getState) => {
    getState().models.models.forEach((item, index) => {
      if (item.id === model.id) {
        dispatch({
          type: REMOVE_MODEL,
          index: index
        });
      }
    });
  };
};
