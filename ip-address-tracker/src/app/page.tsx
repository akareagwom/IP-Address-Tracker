"use client"
import Image from "next/image";
import { Heading } from "./components/heading";
import Mapper from "./components/map";
import dynamic from "next/dynamic";
import { useMemo } from "react";
// import { Mapper } from "./components/map";

export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('@/app/components/map'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
), [])
  return (
    <>
    <Heading/>
    {/* <Mappper/> */}
    <div>            
      {/* <Mapper/> */}
      <Map/>
    </div>
    </>
  );
}
