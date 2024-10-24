import { useState } from "react";
import CartContainer from "./CartContainer/CartContainer";
import Products from "./Products/Products";
import { useEffect } from "react";

function ProductsContainer() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [currentCart, setCurrentCart] = useState([])
    const [time, setTime] = useState(0)
    const [calories, setCalories] = useState(0)

    useEffect(() => {
        fetch("fake.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleWantToCook = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    const handlePrepareBtn = (singleCart) => {
        const newCurrentCart = [...currentCart, singleCart]
        setCurrentCart(newCurrentCart)

        const filterCart = cart.filter(cart => cart.recipe_id !== singleCart.recipe_id)
        setCart(filterCart)

        const newTime = time + Number(singleCart.preparing_time);
        setTime(newTime)

        const newCalories = calories + Number(singleCart.calories)
        setCalories(newCalories)
    }

    return (
        <div className="">
            <div className="text-center">
                <h1 className=" text-3xl font-bold">Our Receips</h1>
                <p className="w-3/5 mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="grid grid-cols-5 my-8 gap-4">
                <Products 
                    handleWantToCook={handleWantToCook} 
                    products={products}
                ></Products>
                <CartContainer 
                    calories={calories}
                    time={time}
                    currentCart={currentCart}
                    handlePrepareBtn={handlePrepareBtn}
                    cart={cart}
                    products={products}
                ></CartContainer>
            </div>
        </div>
    );
}

export default ProductsContainer;