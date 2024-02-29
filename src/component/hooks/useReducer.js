import { REMOVE_ALL_ITEMS, REST_LIST, REMOVE_USER } from './actionsJs.js'
import { usersList } from './dataList.js'
const reducer = (state, action) => {
  if (action.type === REMOVE_ALL_ITEMS) {
    return []
  }
  if (action.type === REST_LIST) {
    return usersList
  }

  if (action.type === REMOVE_USER) {
    return state.filter((user) => {
      return user.id !== action.payload.id
    })
  }
  throw new Error(`Invalid action ${action.type}`)
}

export default reducer
