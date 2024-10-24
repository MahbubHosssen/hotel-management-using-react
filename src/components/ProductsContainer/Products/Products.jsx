import Product from "../Product/Product";
import PropTypes from "prop-types"

function Products({products, handleWantToCook}) {
    return (
        <div className="col-span-3 gap-4 grid grid-cols-2">
            {
                products.map(product => <Product 
                    handleWantToCook={handleWantToCook} 
                    key={product.recipe_id} 
                    product={product}
                    ></Product>)
            }
        </div>
    );
}
Products.propTypes = {
    products: PropTypes.array.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}


export default Products;