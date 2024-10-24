import PropTypes from "prop-types"

function Product({product, handleWantToCook}) {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = product;
    return (
        <div className="border space-y-4 p-4">
            <img src={recipe_image} alt="" />
            <h3 className="text-xl font-semibold">{recipe_name}</h3>
            <p className="text-gray-600">{short_description}</p>
            <h3 className="text-xl font-semibold">Ingredients: 6</h3>
            <ul className="text-gray-600 text-sm">
                {
                    ingredients.map((gradients, idx) => <li key={idx}>{gradients}</li> )
                }
            </ul>
            <div className="flex gap-6 text-gray-700">
                <p>{preparing_time}</p>
                <p>{calories}</p>
            </div>
            <button onClick={() => handleWantToCook(product)} className="bg-[#0BE58A] py-2 px-4 rounded-full font-semibold">Want to Cook</button>
        </div>
    );
}
Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}


export default Product;