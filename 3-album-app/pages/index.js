import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> integrated with{" "}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <p className={styles.description}>
          {t("title")} <code className={styles.code}>pages/index.js</code>
        </p>
        <div>
          <Link href="/" locale={router.locale === "en" ? "fa" : "en"}>
            <button>
              {t("change-locale", {
                changeTo: router.locale === "en" ? "fa" : "en",
              })}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
