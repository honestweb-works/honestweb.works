import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <h5>honestweb.works</h5>
        <h1>Integrity-Driven Web Solutions for a Digital World</h1>
      </div>
      <div className={styles.sub}>
        Contact: <a href="mailto:b@honestweb.works">b@honestweb.works</a>
      </div>
    </main>
  )
}
