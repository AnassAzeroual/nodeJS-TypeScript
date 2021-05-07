import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send('test get /');
});

app.listen(5000, () => console.log('Server running'));