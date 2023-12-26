import React from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Root() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
      );
}
