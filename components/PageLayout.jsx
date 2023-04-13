import Head from "next/head"
import Link from "next/link"

export default function PageLayout({children, title="NewsApp"}){
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="The best app to read news." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <div>
                <Link href='/'>🗞 news app</Link>
            </div>
            <div>
                <Link href='/about'>About</Link>

            </div>

            </header>
            <main>
                {children}
            </main>
            <style jsx>{`
  header{
    display: flex;
    justify-content:space-between;
    padding:20px;
    background-color: #f0f3f0;

  }`}
            </style>
            </>

    )
}