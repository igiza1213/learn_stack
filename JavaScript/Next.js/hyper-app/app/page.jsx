import Link from "next/link";
import Contact from "./Contact";
import styles from "./page.module.css";

export default function Home() {
  const projectList = ["프로젝트 1", "프로젝트 2", "프로젝트 3"];
  return (
    <div>
      <header className={styles.header}>
        <h1>나의 포트폴리오</h1>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="#about">소개</Link>
          </li>
          <li>
            <Link href="#portfolio">포트폴리오</Link>
          </li>
          <li>
            <Link href="#contact">연락처</Link>
          </li>
        </ul>
      </nav>

      <section className={styles.section} id="about">
        <h2>소개</h2>
        <p>안녕하세요! 나의 포트폴리오 웹사이트에 오신 것을 환영합니다.</p>
      </section>
      <section className={styles.section} id="portfolio">
        <h2>포트폴리오</h2>
        {projectList.map((arg, index) => (
          <Link href={"/project"} key={index}>
            <div className={styles.project}>
              <h3>{arg}</h3>
              <p>이 곳에 프로젝트 설명을 추가하세요.</p>
            </div>
          </Link>
        ))}
      </section>
      <section className={styles.section} id="contact">
        <Contact email={"example@email.com"} tel={"010-1234-5678"} />
      </section>
      <footer className={styles.footer}>
        <p>© 2023 나의 포트폴리오</p>
      </footer>
    </div>
  );
}
