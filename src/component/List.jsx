import React, { useReducer, useEffect } from 'react'
import { usersList } from './hooks/dataList.js'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_LIST':
      return []
    case 'RESET_LIST':
      return usersList
    case 'REMOVE_ITEM':
      return state.filter((user) => user.id !== action.payload.id)
    default:
      return state
  }
}

const List = () => {
  const [state, dispatch] = useReducer(reducer, usersList)

  const removeAllUsers = () => {
    dispatch({ type: 'CLEAR_LIST' })
  }

  const resetListUsers = () => {
    dispatch({ type: 'RESET_LIST' })
  }

  const removeUser = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      <div>
        <button onClick={removeAllUsers}>Clear List</button>
        <button onClick={resetListUsers}>Reset List</button>
      </div>
      <div>
        {state.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.id}</p>
              <button onClick={() => removeUser(user.id)}>remove</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
