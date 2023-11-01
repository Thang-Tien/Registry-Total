const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('App is listening on port', port);
})

