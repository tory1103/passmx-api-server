const express = require("express")
const cors = require('cors');
const router_v1 = require("./routes/v1")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use("/api/v1", router_v1)

app.listen(port, () => {
    console.log(`[*] API is listening on port ${port}`)
})