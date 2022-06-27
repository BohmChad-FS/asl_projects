const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const productRouter = require('./routes/Products')
const variantsRouter = require('./routes/Variants')
const imagesRouter = require('./routes/Images')
const storefrontRouter = require('./routes/StoreFront')
const { index } = require('./controllers/StoreFront')

app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')
app.use("/public", express.static('public'))

app.get('/', 
    index
    // (req, res) => {
    //     res.render("views/home")
    // }
)

app.use("/products", productRouter)
app.use("/variants", variantsRouter)
app.use("/images", imagesRouter)
app.use("/storefront", storefrontRouter)

app.listen(3000)