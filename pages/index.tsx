import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Tar from "../components/Tar";
import Script from "next/script";

import { useRef } from "react";
/* const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {
  return (
    <div className="h-fit w-full over">
      <Tar></Tar>
      <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
    </div>
  );
}
