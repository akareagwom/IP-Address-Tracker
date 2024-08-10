"use client"
import Image from "next/image";
import { Heading } from "./components/heading";
// import Map from "./components/map";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Head from 'next/head';
import Map from "./components/map";
import Address from "./components/address";
import ApiTest from "./components/apiTest";
// import { Mapper } from "./components/map";

let ipData: any;


export default function Home() {


  return (
    <>
      <Head>
        <title>map</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css"
        />
      </Head>
      <div className="">

        <Heading/>
        <div className="overflow-none">
          <Address/>
        </div>
        <div className="">
          {/* <ApiTest ipData={ipData} /> */}
        </div>
        <div className="">              
          <Map/>
        </div>
      </div>
    </>
  );
}
