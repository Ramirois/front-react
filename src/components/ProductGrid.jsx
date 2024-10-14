import PropTypes from "prop-types"
import { ProductDetail } from "./ProductDetail"

export const ProductGrid = ({handlerEdit, handlerRemove, products = [] }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>description</th>
                    <th>edit</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return <ProductDetail product={product} key={product.id} handlerRemove = {handlerRemove} handlerEdit ={handlerEdit}/>
                })}
            </tbody>
        </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired
}