"use client"
import Image from "next/image";
import { Heading } from "./components/heading";
// import Map from "./components/map";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Head from 'next/head';
import Map from "./components/map";
import Address from "./components/address";
// import { Mapper } from "./components/map";

export default function Home() {

  return (
    <>
      <Head>
        <title>map</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css"
        /> */}
      </Head>
    <Heading/>
    <div className="">              
      <Map/>
    </div>
      <Address/>
    <div className="">
    </div>
    </>
  );
}
