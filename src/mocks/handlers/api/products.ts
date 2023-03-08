import { rest } from 'msw';
import { NODE_ENV, uri } from 'src/constants/environment-variables';
import { resWithDelay } from 'src/mocks/utils/resWithDelay';

export const BASE_URL = uri[NODE_ENV];

export const productsHandler = [
  rest.get(`${BASE_URL}/products`, (_req, _res, ctx) => {
    return resWithDelay(
      ctx.status(200),
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          name: 'Product name',
          description:
            'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!'
        }
      ])
    );
  })
];
