import { normalize } from 'normalizer';
import { GIFTS_FETCHED, GIFT_CREATED } from '../types';
import api from '../api';
import { giftSchema } from '../schemas';

const giftsFetched = data => ({
    type: GIFTS_FETCHED,
    data
});

const giftCreated = data => ({
    type: GIFT_CREATED,
    data
});

