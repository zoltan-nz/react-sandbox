import { rest } from 'msw';

export const handlers = [
  rest.get('/accounts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accounts: [{ id: 1, name: 'First AccountPage', amount: 1000 }],
      }),
    );
  }),
];
