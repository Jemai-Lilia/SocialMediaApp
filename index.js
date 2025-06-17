const express = require('express');
require('dotenv').config()



const app = express();



app.get('/', ( req , res )=>{
    res.send('Hello Social Media Application')
})

app.listen(process.env.PORT, () => {
    console.log(`Server runing on port ${process.env.PORT}`);
});