import React from 'react'
import Link from 'next/link'


export default function Home(props) {
console.log(props)
console.log(props.props)
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
        <h2>Repossitorios</h2>
        {
          props.props.map((project)=>{
            return (
              <article key={project.repo} className="postsContainer__post">
                <a href="/">
                  {project.repo}
                </a>
                <p>
                  {
                    project.description
                  }
                </p>
              </article>
            )
          })
        }

       
      </section> 
    </div>
  )
}



Home.getInitialProps = async (ctx) => {

const res = await fetch('https://gh-pinned-repos.now.sh/?username=gustavobacellarladeira')
const json = await res.json()
return { props: json}
    
}
