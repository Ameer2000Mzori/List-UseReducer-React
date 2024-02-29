import React, { useReducer, useEffect, useState } from 'react'
import { usersList } from './hooks/dataList.js'

const reducer = (state, action) => {
  if (action.type === 'REMOVE_ALL_ITEMS') {
    return []
  }
  if (action.type === 'REST_LIST') {
    return usersList
  }

  if (action.type === 'REMOVE_USER') {
    return state.filter((user) => {
      return user.id !== action.payload.id
    })
  }
  throw new Error(`Invalid action ${action.type}`)
}

const List = () => {
  const [userData, setUserData] = useState(usersList)
  const [state, dispatch] = useReducer(reducer, userData)

  const removeAllUsers = () => {
    dispatch({ type: 'REMOVE_ALL_ITEMS' })
  }

  const resetListUsers = () => {
    dispatch({ type: 'REST_LIST' })
  }

  const removeUser = (id) => {
    dispatch({ type: 'REMOVE_USER', payload: { id } })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw] bg-green-400 gap-4">
      <div className="flex flex-row text-center items-center justify-center gap-4">
        <button
          className="w-[140px] h-[40px] bg-yellow-100"
          onClick={removeAllUsers}
        >
          Clear List
        </button>
        <button
          className="w-[140px] h-[40px] bg-yellow-100"
          onClick={resetListUsers}
        >
          Reset List
        </button>
      </div>
      <div>
        {state.map((user) => {
          return (
            <div
              className="h-[100px] w-[200px] flex flex-row text-center items-center justify-center gap-2"
              key={user.id}
            >
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button
                className="w-[140px] h-[40px] bg-yellow-100"
                onClick={() => removeUser(user.id)}
              >
                remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
