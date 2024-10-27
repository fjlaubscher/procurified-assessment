const express = require('express');
const dotenv = require('dotenv');

// routers
const appUserRouter = require('./routers/app-user');
const searchRouter = require('./routers/search');

const init = async () => {
  try {
    const app = express();
    app.use(express.json());

    app.use('/api/auth/', appUserRouter);
    app.use('/api/search/', searchRouter);

    app.get('/', (_, res) => res.status(200).send('API is running'));

    const port = process.env.PORT ? Number(process.env.PORT) : 5000;
    app.listen(port, () => console.log(`API running on port ${port}`));
  } catch (ex) {
    console.log(ex.stack);
  }
};

dotenv.config();
init();
