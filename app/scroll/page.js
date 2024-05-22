'use client'
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import styles from './page.module.css'
import Execom from "../execom/page";
import Events from "../events/page";
import Awards from "../awards/page";
import Support from "../support/page";
import Hackathon from "../hackathon/page";

const page = () => {


  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>

      <main className={styles.main}>
      <Hackathon></Hackathon>
      <Events></Events>
      <Awards></Awards>
      <Execom></Execom>
      <Support></Support>
      </main>
    </>
  );
};

export default page;
