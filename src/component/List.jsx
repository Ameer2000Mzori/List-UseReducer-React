import React, { useReducer, useEffect, useState } from 'react'
import { usersList } from './hooks/dataList.js'
import reducer from './hooks/useReducer.js'
import {
  removeAllUsers,
  resetListUsers,
  removeUser,
} from './hooks/removeAllUsers.js'

const List = () => {
  const [userData, setUserData] = useState(usersList)
  const [state, dispatch] = useReducer(reducer, userData)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw] bg-green-400 gap-4">
      <div className="flex flex-row text-center items-center justify-center gap-4">
        <button
          className="w-[140px] h-[40px] bg-yellow-100"
          onClick={() => {
            removeAllUsers(dispatch)
          }}
        >
          Clear List
        </button>
        <button
          className="w-[140px] h-[40px] bg-yellow-100"
          onClick={() => {
            resetListUsers(dispatch)
          }}
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
                onClick={() => removeUser(dispatch, user.id)}
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
