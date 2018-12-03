export default function gifts(state = {}, action = {}) {
    switch(action.type) {
        default: return state;
    }
}

//  SELECTORS 

export const giftsSelector = state => state.gifts;