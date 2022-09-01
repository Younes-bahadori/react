import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       
					<LanguageSwitcher lang="fa">fa</LanguageSwitcher> |{' '}
					<LanguageSwitcher lang="en">en</LanguageSwitcher>
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signUp">Sign up</Button>
          <Button color="inherit" href="/album">
            Albums
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// import {useTranslations} from 'next-intl';
// import Link from 'next/link';
// import {useRouter} from 'next/router';

// export default function LocaleSwitcher() {
//   const t = useTranslations('LocaleSwitcher');

//   const {locale, locales, route} = useRouter();
//   const otherLocale = locales?.find((cur) => cur !== locale);

//   return (
//     <Link href={route} locale={otherLocale}>
//       <a>{t('switchLocale', {locale: otherLocale})}</a>
//     </Link>
//   );
// }