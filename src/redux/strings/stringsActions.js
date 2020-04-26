// @flow
import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILED,
  UPDATE_STRING,
  UPDATE_STRING_SUCCESS,
  UPDATE_STRING_FAILED,
  DELETE_STRING,
  DELETE_STRING_SUCCESS,
  DELETE_STRING_FAILED,
} from "../../constants/actionTypes";

export const addString = (something) => ({
  type: ADD_STRING,
  payload: something,
});

export const addStringSuccess = (something) => ({
  type: ADD_STRING_SUCCESS,
  payload: something,
});

export const addStringFailed = (error) => ({
  type: ADD_STRING_FAILED,
  payload: error,
});

export const updateString = (something) => ({
  type: UPDATE_STRING,
  payload: something,
});

export const updateStringSuccess = (something) => ({
  type: UPDATE_STRING_SUCCESS,
  payload: something,
});

export const updateStringFailed = (error) => ({
  type: UPDATE_STRING_FAILED,
  payload: error,
});

export const deleteString = (something) => ({
  type: DELETE_STRING,
  payload: something,
});

export const deleteStringSuccess = (something) => ({
  type: DELETE_STRING_SUCCESS,
  payload: something,
});

export const deleteStringFailed = (error) => ({
  type: DELETE_STRING_FAILED,
  payload: error,
});
