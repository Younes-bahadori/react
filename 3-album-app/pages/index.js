import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}
