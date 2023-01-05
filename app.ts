import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express'
const express = require('express')
require('dotenv').config()

const { PORT } = process.env;

const start = async () => {
  const app = express()
  const admin = new AdminJS({})

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.get('/', (req, res)=>{
    res.send('oi')
  })
  
  app.use(admin.options.rootPath, adminRouter)

  

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}`)
  })
}

start()