import * as express from 'express';
import { Application } from 'express';
import { initRestApi } from './api';
import { apiErrorHandler } from './api/apiErrorHandler';

const bodyParser = require('body-parser');

const PORT = 8090;
const app: Application = express();

app.use(bodyParser.json());

initRestApi(app);

app.use(apiErrorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
