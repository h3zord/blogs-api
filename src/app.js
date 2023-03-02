const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerDocument = require('./swagger-output.json');
const routes = require('./routes/routers');
const errorMiddleware = require('./middlewares/error');
// ...

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_req, res) => res.json({ ok: true }));

app.use(routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
