const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';

const initialState = {
  items: [],
  totalPrice: 0,
};

const calcTotalPrice = items =>
  items.reduce((sum, obj) => {
    return sum + obj.price;
  }, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItems = [action.item, ...state.items];

      return {
        ...state,
        items: newItems,
        totalPrice: calcTotalPrice(newItems),
      };
    }

    case REMOVE_ITEM: {
      const newItems = state.items.filter(
        item => item.id !== action.id || item.type !== action.itemType
      );

      return {
        ...state,
        items: newItems,
        totalPrice: calcTotalPrice(newItems),
      };
    }

    case REMOVE_ALL_ITEMS:
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;

export const addItem = item => ({ type: ADD_ITEM, item });
export const removeItem = (id, itemType) => ({
  type: REMOVE_ITEM,
  id,
  itemType,
});
export const removeAllItems = () => ({ type: REMOVE_ALL_ITEMS });
