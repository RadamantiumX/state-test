# Redux + ReactJS

REDUX nos resuelve la problematica del manejo de los estados, es mucho mas global y dinamico que el CONTEXT. Con REDUX podemos contar con una sola **fuente de la verdad**.
No forma parte (particularmente) de REACT, es otra forma que podemes optar para manejar los estados de una forma eficiente, siempre y cuando nuestra apliacion lo amerite. 

![example image](./src/assets/redux.jpg)

Lo que permite el **estado**, es poder renderizance en la VISTA, esto activa una ACCION que modfica el **estado** y el ciclo vuelve a empezar.


## Actions

Son objetos literales, que estan compuestos por dos propiedades, una que se llama TYPE y otra que se llama PAYLOAD.

TYPE: Que tipo de comportamiento queremos desencadenar con la ACTION. Admite un dato STRING.

PAYLOAD: Es la informacion que queremos enviar al ESTADO para que se actulice. Admite cualquier tipo de dato.

```
const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
}
```

## Actions Creator

Reciben el PAYLOAD de forma dinámica y retorna un OBJETO, es una función.

## Reducers

Es una función que toma dos argumentos, el primero e inicial, será el STATE, y el segundo será la ACTION. 
Este función se va a encargar de actualizar el estado, toma este estado previo, el PAYLOAD.
No muta el estado (Ya que es inmutable), solo crea una nueva version de el.


## Store

Aqui es donde se recibe todo el STATE de la aplicación. Es como unión de los REDUCERS.

```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: conterReducer })

console.log(store.getState())
// {value: 0}
```