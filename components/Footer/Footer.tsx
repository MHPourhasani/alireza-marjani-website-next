'use client';
import * as React from 'react';

const Footer = () => (
    <footer className="flex w-11/12 items-center justify-center gap-2 py-5 lg:w-10/12">
        <span className="font-extralight text-black dark:text-secondary">توسعه یافته توسط</span>

        <a
            target="_blank"
            href="https://mh-pourhasani.vercel.app/"
            className="font-light text-primary transition-all ease-in hover:text-rose-900 dark:text-white dark:hover:text-primary"
        >
            محمد حسن پورحسنی
        </a>
    </footer>
);

export default Footer;
