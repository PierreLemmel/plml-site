import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { spring } from "../../services/animation";
import { translatePctX } from "../../services/helpers";

const Banneer = () => {

    const [folded, setFolded] = useState<boolean>(true);

    return <Link href="">
        <div
            className="w-full font-handwritten text-10xl leading-tight center-child py-4 hover:cursor-pointer"
        >
            <div
                className="centered-row"
                onMouseOver={() => setFolded(false)}
                onMouseLeave={() => setFolded(true)}
            >
                <div>p</div>
                <motion.div
                    animate={folded ? {
                        letterSpacing: '-0.25em',
                        marginRight: 0,
                        opacity: 0,
                    }: {
                        letterSpacing: 0,
                        marginRight: '0.25em',
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 8.9
                    }}
                >
                    ierre
                </motion.div>

                <div>l</div>
                <motion.div
                    animate={folded ? {
                        letterSpacing: '-0.25em',
                        opacity: 0,
                    } : {
                        letterSpacing: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    e
                </motion.div>

                <div>m</div>
                <motion.div
                    animate={folded ? {
                        letterSpacing: '-0.40em',
                        opacity: 0,
                    } : {
                        letterSpacing: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    m
                </motion.div>

                <motion.div
                    animate={folded ? {
                        transform: translatePctX(100),
                        opacity: 0,
                    }: {
                        transform: translatePctX(0),
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    e
                </motion.div>

                <motion.div
                    animate={folded ? {
                        transform: translatePctX(-190),
                    }: {
                        transform: translatePctX(0),
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    l
                </motion.div>

            </div>
            
        </div>
    </Link>
}

export default Banneer;