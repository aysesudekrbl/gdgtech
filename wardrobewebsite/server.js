const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'src', 'public')));

app.listen(5173, () => {
    console.log('Server is listening on port 5173');
});