let products = [
    {id: "1", "slug": "godzillas-atomic-hot-sauce", "name": "Godzillas Atomic Hot Sauce", "price": 35}
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
    const id = Number(products[products.length - 1].id) + 1 + ""
    products.push({ id, ...product })
    return products[products.length - 1]
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, update, create, remove }