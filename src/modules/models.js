// Dummy models we use as stubs until mine.js has this fully implemented
import DUMMY_MODELS from './dummy/models';

import { addNotification } from './notifications';

export const GET_AVAILABLE_MODELS = 'model/GET_AVAILABLE_MODELS';
export const GET_CURRENT_MODELS = 'model/GET_CURRENT_MODELS';
export const ENQUEUE_MODEL = 'model/ENQUEUE_MODEL';
export const DEQUEUE_MODEL = 'model/DEQUEUE_MODEL';
export const ADD_MODEL = 'model/ADD_MODEL';
export const REMOVE_MODEL = 'model/REMOVE_MODEL';

const initialState = {
  currentModels: [], // The queue of actively trained models
  availableModels: [] // The list of all available models to train
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AVAILABLE_MODELS:
      return {
        ...state,
        availableModels: action.models
      };

    case GET_CURRENT_MODELS:
      return {
        ...state,
        modelsQueue: action.models
      };

    case ENQUEUE_MODEL:
      return {
        ...state,
        currentModels: [...state.currentModels, action.model]
      };

    case DEQUEUE_MODEL:
      return {
        ...state,
        currentModels: [
          ...state.currentModels.slice(0, action.index),
          ...state.currentModels.slice(action.index + 1)
        ]
      };

    case ADD_MODEL:
      return {
        ...state,
        availableModels: [...state.availableModels, action.model]
      };

    case REMOVE_MODEL:
      return {
        ...state,
        availableModels: [
          ...state.availableModels.slice(0, action.index),
          ...state.availableModels.slice(action.index + 1)
        ]
      };

    default:
      return state;
  }
};

// Gets all the current models that we have appropriate data to train from the Sonar blockchain
export const getAvailableModels = () => {
  // TODO: Replace DUMMY_MODELS with an actual fetch to mine.js (which calls PySyft)

  return dispatch => {
    dispatch({
      type: GET_AVAILABLE_MODELS,
      models: DUMMY_MODELS
    });
  };
};

// Gets all the current models from PySyft that we have threads currently training
export const getCurrentModels = () => {
  // TODO: Replace [] with an actual fetch to mine.js (which calls PySyft)

  return dispatch => {
    dispatch({
      type: GET_CURRENT_MODELS,
      models: []
    });
  };
};

// Adds a model to state.models.currentModels
export const enqueueModel = model => {
  // TODO: Replace this training time estimate with a realistic timestamp (in seconds, not milliseconds)
  const currentTime = Math.floor(Date.now() / 1000);
  const trainingTime =
    (currentTime + Math.floor(Math.random() * 120) + 30) * 1000;

  model.timeRemaining = trainingTime;

  return dispatch => {
    dispatch(removeModel(model));

    // TODO: Fire off a call to mine.js which calls PySyft to start training
    // Pysyft should return an estimated timestamp of completion to mine.js which forwards
    // the request back here... then we enqueue the model in the UI
    dispatch({
      type: ENQUEUE_MODEL,
      model
    });

    dispatch(
      addNotification({
        type: 'success',
        text: `Added ${model.name} to training queue`
      })
    );
  };
};

// Removes a model from state.models.currentModels
export const dequeueModel = model => {
  return (dispatch, getState) => {
    getState().models.currentModels.forEach((item, index) => {
      if (item.id === model.id) {
        dispatch(addModel(model));

        // TODO: Fire off a call to mine.js which calls PySyft to stop training
        // PySyft should close any threads related to training a dataset and return to
        // mine.js a confirmation that training has halted... then we dequeue the model in the UI
        dispatch({
          type: DEQUEUE_MODEL,
          index: index
        });

        dispatch(
          addNotification({
            type: 'success',
            text: `Removed ${model.name} from training queue`
          })
        );
      }
    });
  };
};

// Adds a model to the available models to be trained
// Called only internally in the reducer when dequeueing a model
const addModel = model => {
  delete model.timeRemaining;

  return dispatch => {
    dispatch({
      type: ADD_MODEL,
      model
    });
  };
};

// Removes a model from from the available models to be trained
// Called only internally in the reducer when enqueueing a model
const removeModel = model => {
  return (dispatch, getState) => {
    getState().models.availableModels.forEach((item, index) => {
      if (item.id === model.id) {
        dispatch({
          type: REMOVE_MODEL,
          index: index
        });
      }
    });
  };
};
