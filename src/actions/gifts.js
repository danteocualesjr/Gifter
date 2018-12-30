import { normalize } from 'normalizer';
import { GIFTS_FETCHED, GIFT_CREATED } from '../types';

const giftsFetched = data => ({
    type: GIFTS_FETCHED,
    data
});

