import { rest } from 'msw';

export const usersHandler = [
  rest.get('/users', (_req, res, ctx) => {
    return res(
      ctx.delay(2500),
      ctx.status(200),
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          name: 'John Maverick',
          bio: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!'
        }
      ])
    );
  })
];
