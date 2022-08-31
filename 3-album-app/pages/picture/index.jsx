import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function album() {
  return (
    <ImageList sx={{ width: 1200, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "./6.jpeg",
    title: "Breakfast",
  },
  {
    img: "./2.jfif",
    title: "Burger",
  },
  {
    img: "./3.png",
    title: "Camera",
  },
  {
    img: "./4.png",
    title: "Coffee",
  },
  {
    img: "./5.png",
    title: "Hats",
  },
  {
    img: "./6.jpeg",
    title: "Breakfast",
  },
  {
    img: "./2.jfif",
    title: "Burger",
  },
  {
    img: "./3.png",
    title: "Camera",
  },
  {
    img: "./4.png",
    title: "Coffee",
  },
  {
    img: "./5.png",
    title: "Hats",
  },
];
