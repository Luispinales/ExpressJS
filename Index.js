const express = require("express");
const morgan = require ("morgan")
const path = require ('path');
require("ejs")
   
const app = express();

const HomeRoutes = require("./src/routes/home")
const UserRoutes = require("./src/routes/users")


//Express Settings
app.set('case sensitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev')) 
app.use(express.json())

app.use(HomeRoutes)
app.use(UserRoutes)

//app.use((req,res, next)=> {
//if (req.query.login === 'luispamparo13.com'){
//next()
//}else {
//  res.send('no autorizado')
//}
//}) 


//static files
app.use("./static", express.static(path.join(__dirname, 'static')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))


//app listen
app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)

 
 
