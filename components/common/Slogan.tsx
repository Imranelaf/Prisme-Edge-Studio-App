import React from "react";

export const Slogan = () => {
    return (
        <>
            <div
                className="cover w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/images/coverTest.webp')" }}
            >
                <div className="p-8 bg-teal-800/70 text-slate-50 rounded-lg m-6 md:m-20 border-black border-2 shadow-md text-center">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                        <span>Made to be played</span>
                    </h1>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
                        The Best in Gaming
                    </h3>
                </div>
            </div>
        </>
    );
};
