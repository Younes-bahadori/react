import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LanguageSwitcher lang="fa">fa</LanguageSwitcher> |{" "}
            <LanguageSwitcher lang="en">en</LanguageSwitcher>
          </Typography>
          <MenuItem onClick={() => router.push("/album")}>
            <Typography textAlign="center">Album</Typography>
          </MenuItem>

          <MenuItem onClick={() => router.push("/signUp")}>
            <Typography textAlign="center">SignUp</Typography>
          </MenuItem>

          <MenuItem onClick={() => router.push("/login")}>
            <Typography textAlign="center">login</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
