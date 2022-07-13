import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { Todo } from '../components';
import { useTodoContext } from '../context/todoContext';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { list, addTodo } = useTodoContext();


  const onClickSubmitButton = () => {
    addTodo(title, desc)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BSSM NextJs Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My Todo List!</a>
        </h1>

        <p className={styles.input_content}>
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            placeholder="Description"
          />
          <button onClick={onClickSubmitButton}>등록</button>
        </p>

        {list.map((i, ix) => <Todo {...i} key={ix} />)}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
