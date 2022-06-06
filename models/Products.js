let products = [
    {id: "1", "slug": "godzillas-atomic-hot-sauce", "name": "Godzillas Atomic Hot Sauce"}
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const create = (product) => {
    products.push(product)
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, update, create, remove }