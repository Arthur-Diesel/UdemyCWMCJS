import React from "react";
// import Filho from './Filho'

export default function Pai(props){
    return(
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>

                {   
                    React.Children.map(props.children, child => {
                        return React.cloneElement(child, {
                            ...props, ...child.props
                        })
                    })
                }

                {/* props.children */}                
                {/*
                <Filho nome="Pedro" sobrenome={props.sobrenome}/>
                <Filho {...props}/>
                <Filho {...props} nome="Arthur"/>
                */}
                
            </ul>
        </div>
    )
}