const express = require('express') // Import Express framework
const app = express()              // Create an Express app instance
const jwt = require('jsonwebtoken')// Import JSON Web Token library for authentication


require('dotenv').config()  
app.use(express.json())

const posts = [
  {
    name: "CBIT",
    title: "Welcome to CBIT"
  },
  {
    name: "MGIT",
    title: "Welcome to MGIT"
  }
]
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  }
)
}

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.name === req.user.name))
})  

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
    res.json({ accessToken: accessToken })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
