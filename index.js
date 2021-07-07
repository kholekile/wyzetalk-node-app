var express = require('express');
var cors = require('cors')
var artist = require('./routes/artist.js');

const app = express();
const PORT = 5000;

app.use(cors({origin: '*'}))
app.use('/api/artist', artist);

app.listen(PORT, ()=> console.log(`Server Running On PORT http://localhost:${PORT}`));