import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";


import ProfileImage from "./components/ProfileImage";
import PersonalInfo from "./components/PersonalInfo";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Message from "./components/Message";

const Yonas = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Yonas Father</title>
                <meta name="description" content="Generated By Alamondai" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col w-full bg-slate-700 min-h-screen lg:w-[360px] lg:mx-auto">
                {/* <ProfileImage /> */}

                <section className="flex flex-col items-start justify-center py-1 px-10 gap-10 min-h-screen">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="text-5xl text-white">Company Name</h1>
                            <hr className="w-1/3" />
                        </div>
                        <div>
                            <p className="text-3xl text-white">Owner Name</p>
                            <hr className="w-1/3" />
                        </div>
                    </div>


                </section>

                <section className="flex flex-col gap-8 w-full bg-white px-5 min-h-screen py-5 ">
                    <Contact />

                    <hr className="text-black bg-black border border-black rounded-full w-5/6 mx-auto" />

                    <section className="flex flex-col gap-4 flex-wrap">
                        {/* Shops */}
                        <Shop />

                        {/* Work */}
                        <Work />

                        {/* Project */}
                        <Project />

                        {/* Message */}
                        <Message />

                    </section>
                    <section>
                        <Social />
                    </section>
                </section>

                <Footer />
            </main>
        </>
    );
}

export default Yonas;
