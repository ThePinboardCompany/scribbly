'use client';
import { motion } from 'motion/react';
import { HeroHighlight, Highlight } from './ui/hero-highlight';

export function Hero() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug"
			>
				Collaborate, sketch, and create on your digital whiteboard{' '}
				<Highlight className="text-nowrap text-black dark:text-white">
					in real time.
				</Highlight>
			</motion.h1>
		</HeroHighlight>
	);
}
