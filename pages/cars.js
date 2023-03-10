import React from "react";
import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import Head from "next/head";

const cars = ({ carsDataList }) => {
  const cars = carsDataList.photos;

  return (
    <>
      <Head>
        <title>Cars</title>
      </Head>
      <Gallery images={cars} obj="car" />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=car&per_page=6`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    }
  );
  const carsList = await res.json();
  return {
    props: { carsDataList: carsList },
  };
}

export default cars;
