export default function gifts(state = {}, action = {}) {
    switch(action.type) {
        default: return state;
    }
}

//  SELECTORS 

export const giftsSelector = state => state.gifts;

export const allGiftsSelector = createSelector(booksSelector, bookHash =>
    Object.values(booksHash)
);

