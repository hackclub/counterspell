// "use client";
// import { wrap } from "@motionone/utils";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
//   useVelocity,
// } from "framer-motion";
// import { Sarpanch } from "next/font/google";
// import { useEffect, useRef, useState } from "react";
// import styles from "./desktop_about_me.module.css";

// const sarpanch = Sarpanch({ subsets: ["latin"], weight: "400" });

// function Box({ text, img }) {
//   const textRef = useRef(null);
//   const [textWidth, setTextWidth] = useState(0);

//   useEffect(() => {
//     if (textRef.current) {
//       setTextWidth(textRef.current.offsetWidth);
//     }
//   }, [text]);

//   return (
//     <div className="px-1">
//       <div
//         className={`${styles.box} flex justify-evenly items-center bg-[#0c2029] rounded-[6px] h-12 ${sarpanch.className} `}
//         style={{
//           minWidth: `calc(${textWidth}px + 40px + 40px)`, // Text width + image width + padding
//         }}
//       >
//         <h3
//           ref={textRef}
//           className={`text-white text-xl font-normal ${sarpanch.className}`}
//         >
//           {text}
//         </h3>
//         <img src={img} alt={text} height={20} className="ml-2" />
//       </div>
//     </div>
//   );
// }

// function ParallaxTextOne({ baseVelocity = 100, speed }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   // Magic wrapping for the length of the text
//   const x = useTransform(baseX, (v) => {
//     const amplitude = 80; // Half the range of your oscillation
//     const midpoint = -90; // Midpoint of the range (-20 and -40)
//     const frequency = speed; // Adjust this to slow down the oscillation
//     return `${midpoint + amplitude * Math.sin(v * frequency)}%`;
//   });

//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     // Change the direction of the scroll once we switch scrolling directions
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   // The number of times to repeat the child text should be dynamically calculated
//   return (
//     <div className={styles.parallax}>
//       <motion.div className={styles.scroller} style={{ x }}></motion.div>
//     </div>
//   );
// }

// function ParallaxTextTwo({ baseVelocity = 100, speed }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   // Magic wrapping for the length of the text
//   const x = useTransform(baseX, (v) => {
//     const amplitude = 80; // Half the range of your oscillation
//     const midpoint = -90; // Midpoint of the range (-20 and -40)
//     const frequency = speed; // Adjust this to slow down the oscillation
//     return `${midpoint + amplitude * Math.sin(v * frequency)}%`;
//   });

//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     // Change the direction of the scroll once we switch scrolling directions
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   // The number of times to repeat the child text should be dynamically calculated
//   return (
//     <div className={styles.parallax}>
//       <motion.div className={styles.scroller} style={{ x }}></motion.div>
//     </div>
//   );
// }

// function ParallaxTextThree({ baseVelocity = 100, speed }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   // Magic wrapping for the length of the text
//   const x = useTransform(baseX, (v) => {
//     const amplitude = 80; // Half the range of your oscillation
//     const midpoint = -90; // Midpoint of the range (-20 and -40)
//     const frequency = speed; // Adjust this to slow down the oscillation
//     return `${midpoint + amplitude * Math.sin(v * frequency)}%`;
//   });

//   const directionFactor = useRef(1);

//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     // Change the direction of the scroll once we switch scrolling directions
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//     // console.log(baseX.get());
//   });

//   // The number of times to repeat the child text should be dynamically calculated
//   return (
//     <div className={styles.parallax}>
//       <motion.div className={styles.scroller} style={{ x }}></motion.div>
//     </div>
//   );
// }

// export default function MobileSponserScroll() {
//   const speed = 0.05;

//   return (
//     <section className="w-full">
//       <ParallaxTextOne baseVelocity={-5} speed={speed} />
//       <ParallaxTextTwo baseVelocity={5} speed={speed} />
//       <ParallaxTextThree baseVelocity={-5} speed={speed} />
//     </section>
//   );
// }
