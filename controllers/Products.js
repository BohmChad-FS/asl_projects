const Products = require('../models/Products')

const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index', { products })
}

const form = (req, res) => {
    if (req.params.id) {
        const product = Products.find(req.params.id)
        res.render('views/products/edit', { product })
    } else {
        res.render('views/products/create')
    }
}

const show = (req, res) => {
    const product = Products.find(req.params.id)
    res.render('views/products/show', { product })
}

const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.redirect('/products/' + req.params.id)
}

const create = (req, res) => {
    const product = Products.create(req.body)
    res.redirect('/products/' + product.id)
}

const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.json(products)
}

module.exports = { index, show, update, create, remove }