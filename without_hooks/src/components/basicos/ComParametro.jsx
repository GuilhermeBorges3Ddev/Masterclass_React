import React from "react"

export default props => {
                            //Nunca modifique props na declaração, props é leitura apenas!!
                            //props.titulo  = "Outro título";
                            return (
                                <>
                                    <h3>{props.titulo}</h3>
                                    <p>{props.subtitulo}</p>
                                </>
                            );
                        }