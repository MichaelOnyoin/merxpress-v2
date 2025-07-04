import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';


export default function Layout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
    }