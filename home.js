const {Router} = require('express')
const router = Router()
const axios = require ('axios')




router.get('/about',(req,res)=>{
let isActive = true


const users = [
  {
    id: 1,
    name: "paco",
    lastname: "perez",
  },

  {
    id: 2,
    name: "paco2",
    lastname: "pena"
  }
]





  res.render('index', {title: 'index page',
  isActive,
  users
  })

});
