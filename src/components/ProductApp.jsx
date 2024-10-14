import { useEffect, useState } from "react"
import { create, findAll, remove, update } from "../services/ProductServices"
import { ProductGrid } from "./ProductGrid"
import PropTypes from "prop-types"
import { ProductForm } from "./ProductForm"

export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([])

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })

    const getProducts = async () => {
        const result = await findAll();
        setProducts(result.data._embedded.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    //? Agregar producto
    const handlerAddProduct = async (product) => {
        // console.log(product);
        if (product.id > 0) {
            const response = await update(product);
            console.log(response);
            
            setProducts(products.map(prod => {
                if (prod.id == response.data.id) {
                    return { ...response.data }
                }
                return prod
            }))
        } else {
            const response = await create(product);
            setProducts([...products, { ...response.data}])
        }
    }

    //? remover producto
    const handlerRemoveProduct = (id) => {
        // console.log(products);
        remove(id)
        setProducts(products.filter(product => product.id != id))
    }
    //? seleccionar producto a editar
    const handlerProductSelected = (product) => {
        setProductSelected({ ...product })
    }
    return (
        <div className="container my-4">
            <h2>{title}</h2>
            <div className="row">
                <div className="col">
                    {
                        products.length > 0
                            ? <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerEdit={handlerProductSelected} />
                            : <div className="alert alert-warning">No hay productos en el sistema!</div>
                    }
                </div>
                <div className="col">
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
            </div>
        </div>
    )
}

ProductApp.propType = {
    title: PropTypes.string.isRequired
}