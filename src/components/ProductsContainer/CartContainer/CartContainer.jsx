
import PropTypes from "prop-types"
import Cart from "../Cart/Cart";
import CartLower from "../Products/Cartlower/Cartlower";


function CartContainer({cart, handlePrepareBtn, currentCart, time, calories}) {
    console.log(cart)
    return (
        <div className="col-span-2 border">
            <h1 className="text-2xl font-semibold border-b py-2 text-center w-2/3 mx-auto">Want to Cook: {cart.length}</h1>
            <div>
                <div className="flex gap-20 ml-12 text-gray-600 font-semibold my-2">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                {
                    cart.map((singleCart, idx) => <Cart handlePrepareBtn={handlePrepareBtn} key={idx} singleCart={singleCart}></Cart>)
                }
                <div>
                    <h1 className="text-2xl font-semibold py-2 text-center w-2/3 mx-auto">{
                        cart.length ? `Currently cooking: ${currentCart.length}` : ""
                    }</h1>

                    {
                        currentCart.map((current, idx) => <CartLower key={idx} current={current}></CartLower>)
                    }
                </div>

                <div>
                    <p>Total Time : {time}</p>
                    <p>Total Calories: {calories}</p>
                </div>
                
            </div>
        </div>
    );
}
CartContainer.propTypes = {
    cart: PropTypes.array.isRequired,
    handlePrepareBtn:PropTypes.func.isRequired,
    currentCart: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,

}

export default CartContainer;