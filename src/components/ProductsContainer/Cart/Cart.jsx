import PropTypes from "prop-types"

function Cart({singleCart, handlePrepareBtn}) {

    // console.log(singleCart)
    const {recipe_id, recipe_name, preparing_time, calories} = singleCart;
    return (
        <div>
            <div className='flex justify-around gap-6 bg-gray-200 my-6 py-3 items-center text-gray-600'>
                <p className="w-[30px] pl-4">{recipe_id}</p>
                <p className="w-[140px]">{recipe_name}</p>
                <p className="w-[150px]">{preparing_time} min</p>
                <p className="col-span-3">{calories} Calories</p>
                <button onClick={() => handlePrepareBtn(singleCart)} className="bg-[#0BE58A] py-1 px-3 rounded-full">Preparing</button>
            </div>
        </div>
    );
}
Cart.propTypes = {
    singleCart: PropTypes.object.isRequired,
    handlePrepareBtn: PropTypes.func.isRequired
}

export default Cart;