import styles from '../styles/About.module.css'
import PageLayout from "../components/PageLayout";
import Link from 'next/link';
import Image from 'next/image';
export default function About(){
    return  <PageLayout title="About">
                <div className={styles.section}>
                    <div className={styles.contenedor}>
                        <div className={styles.contenedorsection}>
                            <div className={styles.title}>
                                <h1>About me</h1>

                            </div>
                            <div className={styles.contenido}>
                                <h3>News App, developed with Next.js</h3>
                                <Link href={`https://www.linkedin.com/in/janina-roberto-full-stackdeveloper/`}> <p>By Janina Roberto Fullstack Web Developer</p> </Link>
                                <div className={styles.button}>
                                <Link href={`https://janina-roberto-portfolio.netlify.app/`}>More about me</Link>
                                </div>
                            </div>
                            {/* <div className={styles.social}>
                            <Link href='/facebook'>Facebook</Link>
                            <Link href='/instagram'>Instagram</Link>
                            

                            </div> */}

                        </div>
                        <div className={styles.image}>
                            <Image>
                                {/* ver */}
                            </Image>

                        </div>

                    </div>

                </div>
            </PageLayout>
   
}