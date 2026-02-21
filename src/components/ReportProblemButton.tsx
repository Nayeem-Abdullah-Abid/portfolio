"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function ReportProblemButton() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleHover = () => {
        // Calculate random new position within a reasonable range (e.g., -150px to 150px)
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300;

        // Ensure it doesn't just jitter in place
        const newX = position.x + (randomX > 0 ? Math.max(50, randomX) : Math.min(-50, randomX));
        const newY = position.y + (randomY > 0 ? Math.max(50, randomY) : Math.min(-50, randomY));

        setPosition({ x: newX, y: newY });
    };

    return (
        <div className="relative w-full py-6 flex flex-col items-center justify-center overflow-visible">
            <h3 className="text-zinc-500 text-xs uppercase tracking-widest mb-4 text-center">
                Found an issue? Let us know.
            </h3>

            {/* 
              We use a larger invisible trigger area around the button so it runs away 
              even before the cursor exactly touches the visible edge.
            */}
            <div
                className="relative p-12 -m-12"
                onMouseEnter={handleHover}
            >
                <motion.button
                    ref={buttonRef}
                    animate={{ x: position.x, y: position.y }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, mass: 0.5 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-colors cursor-not-allowed"
                >
                    <AlertCircle size={18} />
                    <span className="font-medium">Report a Problem</span>
                </motion.button>
            </div>

            {/* Optional cheeky text that appears when it moves far enough */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: Math.abs(position.x) > 100 || Math.abs(position.y) > 100 ? 1 : 0 }}
                className="absolute -bottom-8 text-sm text-zinc-600 transition-opacity"
            >
                Nice try! We don&apos;t make mistakes here. 😉
            </motion.p>
        </div>
    );
}
