"use client"
import Image from "next/image";
import { Heading } from "./components/heading";
import Mapper from "./components/map";
// import { Mapper } from "./components/map";

export default function Home() {
  return (
    <>
    <Heading/>
    {/* <Mappper/> */}
    <Mapper/>
    </>
  );
}
