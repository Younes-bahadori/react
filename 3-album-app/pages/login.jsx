import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation("login");

  return (
    <section>
      <h2>Login Form </h2>
      <form action="/send-data-here" method="post">
        <label htmlFor="username">{t("user-name")}:</label>
        <input type="text" id="username" required name="username" />

        <label htmlFor="password">{t("password")}:</label>
        <input
          type="password"
          id="password"
          required
          minLength={6}
          name="password"
        />
        <button type="submit">{t("submit")}</button>
        <button>
          {t("change-locale", {
            changeTo: router.locale === "en" ? "fa" : "en",
          })}
        </button>
      </form>
    </section>
  );
};

export default Login;
