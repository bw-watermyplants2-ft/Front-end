import * as actions from "../actions";


const initialState = {
  plantList: [],
  waterList: [],
  currentPlant: {
    id: undefined,
    name: "",
    location: "",
    type: "",
    // can we put an object in here?
    water_schedule: '',
    user_id: undefined
  },
  isFetchingPlants: false,
  isFetchingPlant: false,
  errorMessage: ""
};

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PLANTS_REQUEST:
      return {
        ...state,
        isFetchingPlants: true
      };

    case actions.FETCH_PLANTS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        plantList: [...action.payload],
        isFetchingPlants: false
      };

    case actions.FETCH_PLANTS_FAILURE:
      return {
        ...state,
        isFetchingPlants: false,
        errorMessage: action.errorMessage
      };

    case actions.FETCH_PLANT_REQUEST:
      return { ...state, isFetchingPlant: true };

    case actions.FETCH_PLANT_SUCCESS:
      return {
        ...state,
        isFetchingPlant: false,
        currentPlant: {
          id: action.payload.id,
          name: action.payload.name,
          location: action.payload.location,
          type: action.payload.type,
        }
      };

    case actions.FETCH_PLANT_FAILURE:
      return {
        ...state,
        isFetchingPlant: false,
        errorMessage: action.errorMessage
      };

    case actions.CREATE_PLANT_REQUEST:
      return { ...state };

    case actions.CREATE_PLANT_SUCCESS:
      return { ...state };

    case actions.CREATE_PLANT_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    case actions.UPDATE_PLANT_REQUEST:
      return { ...state };

    case actions.UPDATE_PLANT_SUCCESS:
      return { ...state };

    case actions.UPDATE_PLANT_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    case actions.DELETE_PLANT_REQUEST:
      return { ...state };

    case actions.DELETE_PLANT_SUCCESS:
      return { ...state };

    case actions.DELETE_PLANT_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};

export const plantScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PLANT_SCHEDULE_REQUEST:
      return { ...state, isFetchingPlant: true };

    case actions.FETCH_PLANT_SCHEDULE_SUCCESS:
      return {
        ...state,
        waterList: [...action.payload],
        isFetchingPlants: false
      };

    case actions.FETCH_PLANT_SCHEDULE_FAILURE:
      return {
        ...state,
        isFetchingPlant: false,
        errorMessage: action.errorMessage
      };
    case actions.CREATE_PLANT_SCHEDULE_REQUEST:
      return { ...state };

    case actions.CREATE_PLANT_SCHEDULE_SUCCESS:
      return { ...state };

    case actions.CREATE_PLANT_SCHEDULE_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    case actions.UPDATE_PLANT_SCHEDULE_REQUEST:
      return { ...state };

    case actions.UPDATE_PLANT_SCHEDULE_SUCCESS:
      return { ...state };

    case actions.UPDATE_PLANT_SCHEDULE_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }}
