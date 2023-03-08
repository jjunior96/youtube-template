import { createResponseComposition } from 'msw';

/**
 * HOF to add delay to a mocked request
 *
 * @example
 *
 * resWithDelay(ctx.json({ hello: 'world' })
 */
export const resWithDelay = createResponseComposition({
  delay: 1000
});
