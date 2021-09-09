import Head from "next/head"

import basePath from "../basePath"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={basePath + "/favicon.ico"} />
      </Head>
      <h1>Hello</h1>
    </div>
  )
}