import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          Posts
        </main>
      </div>
    </>
  )
}