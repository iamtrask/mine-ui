import DUMMY_MODELS from './dummy/models';

export const ENQUEUE_MODEL = 'model/ENQUEUE_MODEL';
export const DEQUEUE_MODEL = 'model/DEQUEUE_MODEL';

const initialState = {
  modelQueue: [],
  models: DUMMY_MODELS
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

    default:
      return state;
  }
};

export const enqueueModel = model => {
  const currentTime = Math.floor(Date.now() / 1000);
  const trainingTime = currentTime + Math.floor(Math.random() * 12000) + 8000;

  model.timeRemaining = trainingTime;

  return dispatch => {
    dispatch({
      type: ENQUEUE_MODEL,
      model
    });
  };
};

export const dequeueModel = ({ id }) => {
  return (dispatch, getState) => {
    getState().models.modelQueue.forEach((item, index) => {
      if (item.id === id) {
        dispatch({
          type: DEQUEUE_MODEL,
          index: index
        });
      }
    });
  };
};
