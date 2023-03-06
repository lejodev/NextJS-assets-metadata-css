import { headers } from "@/next.config";
import React from "react";
import { Gallery } from "@/components/Gallery";
import styles from "../styles/gallery.module.scss";
import Head from "next/head";

const cats = ({ bikesList }) => {
  console.log(bikesList);
  const images = bikesList.photos;

  return (
    <>
      <Head>
        <title>Bikes</title>
      </Head>
      <Gallery images={images} obj="bikes" />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=bikes&per_page=6`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    }
  );

  const cats = await res.json();
  console.log(cats);
  return { props: { bikesList: cats } };
}

export default cats;
