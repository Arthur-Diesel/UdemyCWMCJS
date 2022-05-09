import React from "react"

export default function BomDia(props) {
    return( 
        <div style={{color: props.color}}> 
            <h1>Bom dia {props.nome}!</h1>
            <h2>Até breve!</h2>
        </div>
        /*
        <> // React Fragment = < /> 
            <h1>Bom dia {props.nome}!</h1>
            <h2>Até breve!</h2>
        </>
        */
        /*
        [
            <h1 key={1}>Bom dia {props.nome}!</h1>,
            <h2 key={2}>Até breve!</h2>
        ]
        */
    )
}