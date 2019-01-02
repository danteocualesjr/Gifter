import { createSelector } from 'reselect';
import { GIFTS_FETCHED, GIFT_CREATED } from '../types';

export default function gifts(state = {}, action = {}) {
    switch(action.type) {
        case GIFTS_FETCHED:
        case GIFT_CREATED:
            return { ...state, ...action.data.entities.gifts };
        default: 
            return state;
    }
}

//  SELECTORS 

export const giftsSelector = state => state.gifts;

export const allGiftsSelector = createSelector(giftsSelector, giftHash =>
    Object.values(giftsHash)
);
