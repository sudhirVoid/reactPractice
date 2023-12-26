import React from "react";
import { Header, Footer } from "./index";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/*This is the dynamic filed where things can change between Header and Footer.*/}
      <Footer />
    </>
  );
}
