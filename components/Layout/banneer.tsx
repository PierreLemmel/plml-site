import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { translatePctX } from "../../services/helpers";

const Banneer = () => {

    const [lastState, setLastState] = useState<"pierreLemmel"|"peleMele">("peleMele");
    const [state, setState] = useState<"folded"|"pierreLemmel"|"peleMele">("peleMele");

    const displayPierreLemmelParts = (state === "pierreLemmel" || state === "folded");
    const displayPeleMeleParts = (state === "peleMele" || state === "folded");

    return <Link href="./">
        <div
            className={`
                w-full center-child
                font-handwritten 2xl:text-10xl xl:text-8xl text-7xl leading-tight
                hover:cursor-pointer
            `}
            onMouseEnter={() => {
                const nextState = lastState === "pierreLemmel" ? "peleMele" : "pierreLemmel";

                setState(nextState);
                setLastState(nextState);
            }}
            onMouseLeave={() => setState("folded")}
        >
            <motion.div
                initial="folded"
                animate={state}
                className="centered-row"
                
            >
                <div>p</div>
                {/* Pierre Lemmel */}
                {displayPierreLemmelParts && <motion.div
                    variants={{
                        "folded":{
                            letterSpacing: '-0.25em',
                            marginRight: 0,
                            opacity: 0,
                        },
                        "pierreLemmel":{
                            letterSpacing: 0,
                            marginRight: '0.25em',
                            opacity: 1,
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 8.9
                    }}
                >
                    ierre
                </motion.div>}
                {/* Pèle-mêle */}
                {displayPeleMeleParts && <motion.div
                    variants={{
                        "folded":{
                            letterSpacing: '-0.25em',
                            opacity: 0,
                        },
                        "peleMele":{
                            letterSpacing: 0,
                            opacity: 1,
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 8.9
                    }}
                >
                    è
                </motion.div>}

                <div>l</div>
                {/* Pierre Lemmel */}
                {displayPierreLemmelParts && <motion.div
                    variants={{
                        "folded":{
                            letterSpacing: '-0.25em',
                            opacity: 0,
                        },
                        "pierreLemmel":{
                            letterSpacing: 0,
                            opacity: 1,
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    e
                </motion.div>}
                {/* Pèle-mêle */}
                {displayPeleMeleParts && <motion.div
                    variants={{
                        "folded":{
                            letterSpacing: '-0.25em',
                            opacity: 0,
                        },
                        "peleMele":{
                            letterSpacing: 0,
                            opacity: 1,
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 8.9
                    }}
                >
                    e-
                </motion.div>}

                <div>m</div>
                {/* Pierre Lemmel */}
                {displayPierreLemmelParts && <motion.div
                    variants={{
                        "folded":{
                            letterSpacing: '-0.40em',
                            opacity: 0,
                        },
                        "pierreLemmel":{
                            letterSpacing: 0,
                            opacity: 1,    
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    m
                </motion.div>}
                {/* Pèle-mêle: 'ê' */}
                {displayPeleMeleParts && <motion.div
                    variants={{
                        "folded":{
                            transform: translatePctX(100),
                            letterSpacing: '-0.25em',
                            opacity: 0,
                        },
                        "peleMele":{
                            transform: translatePctX(0),
                            letterSpacing: '0em',
                            opacity: 1,
                        }
                    }}
                    transition={{
                        duration: 1.3,
                        type: 'spring',
                        damping: 8.9
                    }}
                >
                    ê
                </motion.div>}

                {/* Pierre Lemmel */}
                {displayPierreLemmelParts && <motion.div
                    variants={{
                        "folded":{
                            transform: translatePctX(100),
                            opacity: 0,
                        },
                        "pierreLemmel":{
                            transform: translatePctX(0),
                            opacity: 1,    
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    e
                </motion.div>}

                {/* l */}
                <motion.div
                    variants={{
                        "folded":{
                            transform: translatePctX(-190)
                        },
                        "pierreLemmel":{
                            transform: translatePctX(0)
                        },
                        "peleMele":{
                            transform: translatePctX(0)
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 12
                    }}
                >
                    l
                </motion.div>

                {/* Pèle-mêle */}
                {displayPeleMeleParts && <motion.div
                    variants={{
                        "folded":{
                            letterSpacing: '-0.25em',
                            opacity: 0,
                        },
                        "peleMele":{
                            letterSpacing: 0,
                            opacity: 1,
                        }
                    }}
                    transition={{
                        duration: 0.9,
                        type: 'spring',
                        damping: 8.9
                    }}
                >
                    e
                </motion.div>}

            </motion.div>
            
        </div>
    </Link>
}

export default Banneer;