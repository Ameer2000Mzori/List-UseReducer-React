import { REMOVE_ALL_ITEMS, REST_LIST, REMOVE_USER } from './actionsJs.js'

export const removeAllUsers = (dispatch) => {
  dispatch({ type: REMOVE_ALL_ITEMS })
}

export const resetListUsers = (dispatch) => {
  dispatch({ type: REST_LIST })
}

export const removeUser = (dispatch, id) => {
  dispatch({ type: REMOVE_USER, payload: { id } })
}
