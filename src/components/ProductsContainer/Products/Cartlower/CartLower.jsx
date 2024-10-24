import PropTypes from "prop-types"

function CartLower({current}) {
    // console.log(cartLower)
    const {recipe_id, recipe_name, preparing_time, calories} = current;
    return (
        <div>
            
            <div className='flex justify-around gap-6 bg-green-300 my-6 py-3 items-center text-gray-600'>
                <p className="w-[30px] pl-4">{recipe_id}</p>
                <p className="w-[140px]">{recipe_name}</p>
                <p className="w-[150px]">{preparing_time} min</p>
                <p className="col-span-3">{calories} Calories</p>
            </div>  
        </div>
    );
}
CartLower.propTypes = {
    current: PropTypes.object.isRequired
}
export default CartLower;