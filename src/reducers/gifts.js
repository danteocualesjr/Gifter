import { createSelector } from 'reselect';

export default function gifts(state = {}, action = {}) {
    switch(action.type) {
        default: return state;
    }
}

//  SELECTORS 

export const giftsSelector = state => state.gifts;

export const allGiftsSelector = createSelector(giftsSelector, giftHash =>
    Object.values(giftsHash)
);
