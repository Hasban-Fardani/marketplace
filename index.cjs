const app = require('./api/index.cjs');
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});