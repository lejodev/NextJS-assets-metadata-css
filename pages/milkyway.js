import React from "react";
import { Gallery } from "@/components/Gallery";
import { headers } from "@/next.config";

const milkyway = ({ milkyWayImagesList }) => {
  console.log(milkyWayImagesList);
  const milkyWayPhotos = milkyWayImagesList.photos;
  return <Gallery images={milkyWayPhotos} obj="milky way" />;
};

export async function getStaticProps() {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=milky way&per_page=6`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    }
  );
  const milkyWay = await res.json();

  return {
    props: {
      milkyWayImagesList: milkyWay,
    },
  };
}

export default milkyway;
