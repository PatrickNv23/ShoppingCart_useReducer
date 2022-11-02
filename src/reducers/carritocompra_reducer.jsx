/*funcion reducer */
import TYPES from "./actionTypes";

export const productosTienda = {
  productos: [
    {
      "id": 1,
      "nombre": "producto 1",
      "precio": 50
    },
    {
      "id": 2,
      "nombre": "producto 2",
      "precio": 30
    },
    {
      "id": 3,
      "nombre": "producto 3",
      "precio": 40
    },
    {
      "id": 4,
      "nombre": "producto 4",
      "precio": 78
    },
    {
      "id": 5,
      "nombre": "producto 5",
      "precio": 90
    },
    {
      "id": 6,
      "nombre": "producto 6",
      "precio": 60
    }
  ],
  carrito: []
}

export const reducerCarrito = (state, action) => {
  switch (action.type) {
    case TYPES.AGREGAR_AL_CARRITO: {
      let newItem = state.productos.find((producto) => producto.id === action.payload)
      return {
        ...state,
        carrito: [...state.carrito, newItem]
      };
    }
    case TYPES.ELIMINAR_PRODUCTO_DEL_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter((producto) => producto.id !== action.payload)
      }
    case TYPES.ELIMINAR_TODO_DEL_CARRITO: {
      return productosTienda;
    }

    default:
      return state;
  }

  throw Error("Acción desconocida: " + action.type);
}