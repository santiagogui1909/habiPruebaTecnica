
export const stateBtns = (state = true, action) => {

    switch (action.type) {
        case '@stateBtns/activeBtn': {
            return action.payload
        }

    default:
      return state
    }
}

// active btns when tests is corrects
export const activeBtn = (value) => {
    return {
        type: '@stateBtns/activeBtn',
        payload: value,
    }
}
