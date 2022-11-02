import { useReducer } from 'react';
import './App.css'
import ProductItem from './components/ProductItem';
import ShoppingCartProduct from './components/ShoppingCartProduct';
import { reducerCart, productsInitialState } from './reducers/shoppingCart_reducer';
import TYPES from './reducers/actionTypes';

function App() {

  const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART
    })
  }


  return (
    <>
      <h1>E-COMMERCER</h1>
      <hr />
      <h2>Products in Stock</h2>
      <div>
        {
          state.products.map((product) => {
            return <ProductItem key={product.id} data={product} addToCart={addToCart} />
          })
        }
      </div>

      <hr />
      <h2>Shopping Cart</h2>
      <button onClick={() => clearCart()}>Clear cart</button>
      <div>
        {
          state.cart.length === 0 && <p>There are no products in the cart</p>
        }

        {
          state.cart.map((productCart) => {
            return <ShoppingCartProduct key={productCart.id} data={productCart} deleteFromCart={deleteFromCart} />
          })
        }
      </div>
    </>
  )
}

export default App
