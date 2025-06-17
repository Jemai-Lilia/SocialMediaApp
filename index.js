const express = require('express');

const app = express();

const port =3000;

app.get('/', ( req , res )=>{
    res.send('Hello Social Media Application')
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});