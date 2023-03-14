
const initialState = []

export const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case '@form/dataUser': {
            return{
                ...state,
                name: action.payload
            }
        }

        case '@form/EmailUser': {
            return{
                ...state,
                email: action.payload
            }
        }

        case '@form/adress': {
            return{
                ...state,
                adress: action.payload
            }
        }

        case '@form/numberFloor': {
            return{
                ...state,
                numberFloor: action.payload
            }
        }

        case '@form/arraySpace': {
            return{
                ...state,
                arraySpace: action.payload
            }
        }


    default:
      return state
    }
}

// Insert user's information
export const insertInfoUser = (name) => {
    return {
        type: '@form/dataUser',
        payload: name,
    }
}

// Insert email when this pass of test of regex
export const insertEmailUser = (email) => {
    return {
        type: '@form/EmailUser',
        payload: email,
    }
}

// Insert adress and more information
export const insertAdress = (adress) => {
    return {
        type: '@form/adress',
        payload: adress
    }
}

// Insert number of floot that user select
export const insetNumberFloor = (numberFloor) => {
    return {
        type: '@form/numberFloor',
        payload: numberFloor,
    }
}

// Insert number of floot that user select
export const insertSpaces = (arraySpace) => {
    return {
        type: '@form/arraySpace',
        payload: arraySpace,
    }
}

