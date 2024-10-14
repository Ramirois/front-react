import PropTypes from "prop-types"

export const ProductDetail = ({handlerEdit, handlerRemove, product = {} }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
            <button onClick={() => handlerEdit(product)} className="btn btn-secondary btn-sm">
                    Edit
                </button>
            </td>
            <td>
                <button onClick={() => handlerRemove(product.id)} className="btn btn-danger btn-sm">
                    Remove
                </button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired
}