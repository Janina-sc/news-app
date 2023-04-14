import Head from 'next/head'
import Image from 'next/image' //ir a next.config.js, ahí agregué algo
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'
import { useEffect, useState } from 'react'

export default function Home({articles}) {
 return (
    <PageLayout title='NewsApp- Home'>
    <div className={styles.container}>
      {articles.length===0 && <p>No tenemos artículos</p>}
      {articles.length > 0 && 
      articles.map((article, index)=>{
        return(
          <div key={index}>
          <Image alt={`Image for the article ${article.title}`} 
          src={article.urlToImage}
          width={450}
          height={300}
          
          
          />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          
          
        </div>
        )
        
      })}
      
    </div>
    </PageLayout>
  )
}

export async function getStaticProps(){ //lo ejecuta sólo una vez en build time (o para refrescar la página) y lo pre renderiza
  const response= await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` + process.env.APIKEY)
  
  const {articles}= await response.json()
   return {
    props:{
      articles
    }
   }
}

// export async function getServerSideProps(context){//lo ejecuta en cada request, es conveniente usarlo si necesitas que los datos sean muy segundo a segundo, o si tiene demasiado datos dinámicos
//   const response= await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey' + process.env.APIKEY)
//   const {articles}= await response.json()
//    return {
//     props:{
//       articles
//     }
//    }
// }

