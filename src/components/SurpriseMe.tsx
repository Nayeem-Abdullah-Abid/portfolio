"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import Spline from "@splinetool/react-spline";

const surprises = [
    {
        fact: "The first computer bug was an actual moth found trapped in a Harvard Mark II relay in 1947.",
        splineUrl: "https://prod.spline.design/6Wq1Q7YGyMsq1jId/scene.splinecode", // 3D Keyboard
    },
    {
        fact: "There are more than 700 computing languages in active use today, but only a handful power 90% of the web.",
        splineUrl: "https://prod.spline.design/Z959L4U07W3H3C8o/scene.splinecode", // 3D Robot
    },
    {
        fact: "The Apollo 11 Guidance Computer that put man on the moon had less processing power than a basic modern USB-C charger.",
        splineUrl: "https://prod.spline.design/qZf9M7-q0e4h7eM2/scene.splinecode", // 3D Retro Mac
    },
    {
        fact: "A single Google query uses 1,000 computers in 0.2 seconds to retrieve an answer.",
        splineUrl: "https://prod.spline.design/y3y3D2-n2D5g4M2/scene.splinecode", // 3D Futuristic shape
    },
];

export function SurpriseMe() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSurprise, setCurrentSurprise] = useState(surprises[0]);
    const [isLoading, setIsLoading] = useState(true);

    const triggerSurprise = () => {
        // Pick a random surprise
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        setCurrentSurprise(randomSurprise);
        setIsLoading(true);
        setIsOpen(true);
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={triggerSurprise}
                className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 p-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center group"
            >
                <Sparkles size={24} className="group-hover:animate-pulse" />
                <span className="absolute -top-10 right-0 w-max bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                    Surprise Me!
                </span>
            </motion.button>

            {/* Fullscreen Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 md:p-12"
                    >
                        {/* Modal Content Container */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl h-[80vh] bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            {/* 3D Model Section */}
                            <div className="relative flex-1 h-1/2 md:h-full w-full bg-[#1e1e1e] flex items-center justify-center overflow-hidden">
                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                                <Spline
                                    scene={currentSurprise.splineUrl}
                                    onLoad={() => setIsLoading(false)}
                                    className="w-full h-full cursor-grab active:cursor-grabbing"
                                />
                                <div className="absolute bottom-4 left-4 text-xs text-zinc-500 pointer-events-none">
                                    Drag to rotate &bull; Scroll to zoom
                                </div>
                            </div>

                            {/* Fun Fact Section */}
                            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-black">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                                        <Sparkles size={14} />
                                        Tech Fun Fact
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
                                        {currentSurprise.fact}
                                    </h3>

                                    <button
                                        onClick={triggerSurprise}
                                        className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-indigo-500 hover:text-white transition-colors duration-300 w-max"
                                    >
                                        Generate Another
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
