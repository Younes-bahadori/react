import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";

import { Stack } from "@mui/system";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getList, request } from "./constant/constant";
import axios from "axios";
import { useRouter } from "next/router";

export default function BasicTable() {
  const [albumList, setAlbumList] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const router = useRouter();

  const getList = () => {
    axios({
      method: "get",
      url: request.albumListUrl,
      auth: request.auth,
    })
      .then((res) => {
        setAlbumList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getList, []);

  const addAlbum = () => {
    axios({
      method: "post",
      data: { name: albumName },
      url: request.albumListUrl,
      auth: request.auth,
    })
      .then((res) => {
        albumList(...albumList, res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <h2>albums</h2>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <TextField
            type="text"
            label="add new album"
            placeholder="album name"
            variant="outlined"
            required
            onChange={(e) => setAlbumName(e.target.value)}
          />
          <Grid item>
            <Button onClick={addAlbum} variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="album list">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albumList.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained">Edit</Button>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() =>
                        router.push(
                          {
                            pathname: "./picture",
                            query: {
                              id: item.id,
                            },
                          },
                          { scroll: false }
                        )
                      }
                    >
                      SHow Details
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
