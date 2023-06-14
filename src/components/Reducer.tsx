import { useReducer } from "react";

const initialState = {
  contador: 10
}

type ActionType = { type: 'incrementar' } | { type: 'decrementar' } | { type: 'custom', payload: number };

// Reducer function
const contadorReducer = (state: typeof initialState, action: ActionType) => {

  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1,
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1,
      }
    case 'custom':
      return {
        ...state,
        contador: action.payload,
      }

    default:
      return state;
  }
  return state;
}

export const Reducer = () => {

  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <div>Contador: {contadorState.contador}</div>
      <button onClick={() => dispatch({ type: 'decrementar' })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'incrementar' })}>
        +1
      </button>

      <button onClick={() => dispatch({ type: 'custom', payload: 100 })}>
        100
      </button>
    </>

  )
}
