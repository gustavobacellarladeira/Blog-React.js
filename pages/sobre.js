import React from 'react'
import Link from 'next/link'

function Title(props) {
    return (
        <h1>{props.children}</h1>
    )
}

const sobre = () => {
    return (
        <div>
            <header>
                <Title>Pagina sobre</Title>
                <img
                style={{
                    height: 500,
                    margin: 20
                }}
                width="100%" 
                src="https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg" alt="dog" />
            </header>
            <Link href="/">
                <a>
                    Link para home!
                </a>
            </Link>
            <p>
                Esta pagina esta vazia !
            </p>
        </div>
    )
}

export default sobre