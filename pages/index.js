import React from 'react'
import styled from "styled-components"
import Link from 'next/link'


export default function Home(props) {
console.log(props)
  return (
    <div>
      <header className="headerContainer">
        <img src="https://avatars1.githubusercontent.com/u/61608608?v=4" />
      <Link href="/sobre">
        <a>
          <h1>Link para home!</h1>
        </a>
      </Link>
      </header>
      <section className="postsContainer">
        <article className="postsContainer__post">
        <h2>Posts</h2>
        <a href='/'>
          titulo do post
        </a>
        <p>
          Resumo do post
        </p>
        </article>
      </section>
    </div>
  )
}



export async function getInitialProps() {


const repos = await fetch('https://gh-pinned-repos.now.sh/?username=gustavobacellarladeira').then(res => res.json())
   
  return {
    props: {
      repos,
    }
  }
}
