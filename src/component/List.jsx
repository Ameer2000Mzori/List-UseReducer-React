import React, { useState, useReducer, useEffect } from 'react'
import { usersList } from './hooks/dataList.js'

const reducer = (state, action) => {
  if (action.type === 'CLEAR_LIST') {
    return { state: {} }
  }
  if (action.type === 'REST_LIST') {
    return { state: usersList }
  }
}

const List = () => {
  const [userData, setUserData] = useState(usersList)

  const [state, dispatch] = useReducer(reducer, userData)

  const removeAllUsers = () => {
    dispatch({ type: 'CLEAR_LIST' })
  }

  const resetListUsers = () => {
    dispatch({ type: 'REST_LIST' })
  }

  const removeUser = (id) => {
    dispatch({ type: 'REMOVE_ITEMS', payload: { id } })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      <div>
        <button onClick={removeAllUsers}>Clear List</button>
        <button onClick={resetListUsers}>Rest List</button>
      </div>
      <div>
        {userData.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.id}</p>
              <button
                onClick={() => {
                  removeUser(user.id)
                }}
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
