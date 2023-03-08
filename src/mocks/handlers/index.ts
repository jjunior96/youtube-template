import { productsHandler } from './api/products';
import { usersHandler } from './api/users';

export const handlers = [...usersHandler, ...productsHandler];
