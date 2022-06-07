import React from "react";
import ContadorValor from './contadorValor'

interface ContadorValorProps {
    contador: number
}

export default (props: ContadorValorProps) => {
    return(
        <p>{ props.contador}</p>
    )
}