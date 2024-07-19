"use client"
import Image from "next/image";
import { Heading } from "./components/heading";
// import Map from "./components/map";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Head from 'next/head';
import Map from "./components/map";
// import { Mapper } from "./components/map";

export default function Home() {
//   const Map = useMemo(() => dynamic(
//     () => import('@/app/components/map'),
//     {
//         loading: () => <p>A map is loading</p>,
//         ssr: false
//     }
// ), [])
  return (
    <>
      <Head>
        <title>map</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />
      </Head>
    <Heading/>
    <div>              
      <Map/>
    </div>
    </>
  );
}
