import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/Dishes";
import { baseURL } from "../shared/baseURL";
import { actions, actionTypes } from "react-redux-form";

/* Fetch Dishes Starts */
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseURL + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});
export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

/* Fetch Dishes Ends */
/* Fetch Comments starts */
export const fetchComments = () => (dispatch) => {
  return fetch(baseURL + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};
export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
/* Fetch Comments Ends */
/* Fetch Promos Starts */
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));
  return fetch(baseURL + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosFailed = (errMess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errMess,
});
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});
export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
/* Fetch Promos Ends */
