export const ADD_ITEM = 'items/ADD_ITEM'

const initialState = [
  {
    name: 'E.T.',
    species: ['anunnakis', 'greys'],
  },
  {
    name: 'Chewbacca',
    species: ['unknown'],
  },
  {
    name: 'Me',
    species: ['unknown'],
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { name, species } = action.data.item

      return [
        ...state,
        { name, species },
      ]
    }

    default:
      return state
  }
}

export const addItem = (item) => {
  const trigger = (dispatch) => {
    // dispatch({
    //   type: NEW_ITEM,
    // })

    dispatch({
      type: ADD_ITEM,
      data: { item },
    })
  }

  return trigger
}
