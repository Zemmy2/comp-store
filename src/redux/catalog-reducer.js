const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

const initialState = {
  activeCategory: 0,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.category,
      };
    default:
      return state;
  }
};

export const setActiveCategory = category => ({
  type: SET_ACTIVE_CATEGORY,
  category,
});

export default catalogReducer;
