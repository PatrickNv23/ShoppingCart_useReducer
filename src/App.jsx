import { useReducer } from 'react';
import './App.css'
import ProductoItem from './components/ProductoItem';
import ProductoCarritoCompras from './components/ProductoCarritoCompras';
import { reducerCarrito, productosTienda } from './reducers/carritocompra_reducer';
import TYPES from './reducers/actionTypes';

function App() {

  const [state, dispatch] = useReducer(reducerCarrito, productosTienda);

  const añadirAlCarrito = (id) => {
    dispatch({
      type: TYPES.AGREGAR_AL_CARRITO,
      payload: id
    })
  }

  const eliminarDelCarrito = (id) => {
    dispatch({
      type: TYPES.ELIMINAR_PRODUCTO_DEL_CARRITO,
      payload: id
    })
  }

  const limpiarCarrito = () => {
    dispatch({
      type: TYPES.ELIMINAR_TODO_DEL_CARRITO
    })
  }


  return (
    <>
      <h1>TIENDA ONLINE</h1>
      <hr />
      <h2>Productos en Stock</h2>
      <div>
        {
          state.productos.map((producto) => {
            return <ProductoItem key={producto.id} data={producto} añadirAlCarrito={añadirAlCarrito} />
          })
        }
      </div>

      <hr />
      <h2>Carrito de Compras</h2>
      <button onClick={() => limpiarCarrito()}>Limpiar carrito</button>
      <div>
        {
          state.carrito.length === 0 && <p>No hay productos en el carrito</p>
        }

        {
          state.carrito.map((productoCarrito) => {
            return <ProductoCarritoCompras key={productoCarrito.id} data={productoCarrito} eliminarDelCarrito={eliminarDelCarrito} />
          })
        }
      </div>
    </>
  )
}

export default App
