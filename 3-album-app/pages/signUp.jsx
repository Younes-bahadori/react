import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SignUp = () => {
  const { t } = useTranslation("signUp");

  return (
    <section>
      <h2>Sign Up Form</h2>
      <form action="/api/form" method="post">
        <label htmlFor="username">{t("user-name")}:</label>
        <input type="text" id="username" required name="userName" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required name="email" />

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

export default SignUp;
