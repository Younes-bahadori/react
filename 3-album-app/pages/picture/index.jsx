import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Link from "@mui/material/Link";
import { request } from "../album/constant/constant";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Album(req) {
  const [album, setAlbum] = useState({});

  const query = req.query;

  const getAlbum = () => {
    axios({
      method: "get",
      url: request.albumUrl + albumId,
      auth: request.auth,
    })
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getAlbum, []);

  return (
    <section>
      <section>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {/* {album.pictures.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </section>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </section>
  );
}
