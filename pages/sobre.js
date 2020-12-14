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
                <img src="..." alt="..." />
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