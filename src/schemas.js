import { schema } from 'normalizr';

export const giftSchema = new schema.Entity(
    "gifts",
    {},
    { idAttribute: '_id' }
);