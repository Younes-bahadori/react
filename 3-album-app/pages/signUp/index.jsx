import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import React, { useState } from "react";
import axios from "axios";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    showPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.100.240:8000/register", {
        email: values.email,
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        router.push("/album");
      })
      .catch((err) => console.error(err));
  };
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elelvation={2} sx={{ padding: 5 }}>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="text"
                    fullWidth
                    label={t("user-name")}
                    placeholder={t("user-name")}
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    label={t("email")}
                    placeholder={t("email")}
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label={t("password")}
                    placeholder={t("password")}
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePassVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          ></IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item>
                  <Button type="submit" fullWidth variant="contained">
                    {t("submit")}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
