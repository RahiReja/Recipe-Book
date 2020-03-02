const { prisma} = require('./prisma/generated/prisma-client')
const  express = require('express')
const bodyParser = require('body-parser')

const RecipeRoutes = require('./routes/recipes')

const app = express()

app.use(bodyParser.json())
app.use ((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');// Here we can specify the domains that we want to allow to access our api//
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');// Here we are specifying the methods thats are allowed//
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');// Here we are specifying the headers that are allowed//
    next();
})

app.use('/recipe', RecipeRoutes)





  app.listen(8080, () =>
  console.log('Server is running on http://localhost:8080'),
)