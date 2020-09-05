import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients:null,
  totalPrice: 4,
  error:false
};
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.3,
  bacon: 0.7,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients, //clonings the inner object so that inner object doesnt point to old object
          //this syntax is used to extract the name of the payload we receive and use it as a propertyname of the particular ingredient which is changed and is changed in state.ingredients
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients, //clonings the inner object so that inner object doesnt point to old object
          //this syntax is used to extract the name of the payload we receive and use it as a propertyname of the particular ingredient which is changed and is changed in state.ingredients
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
      case actionTypes.SET_INGREDIENTS:
      return{
        ...state,
        ingredients:action.ingredients,
        error:false
      };
      case actionTypes.FETCH_INGREDIENTS_FAILED:
        return{
          ...state,
          error:true
        }
    default:
      return state;
  }
};

export default reducer;
