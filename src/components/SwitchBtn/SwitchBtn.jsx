import * as React from 'react';
import { Switch } from '@headlessui/react';

// icons
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

// styles
import 'animate.css';

const SwitchBtn = ({ darkMode, setDarkMode }) => {
	return (
		<div>
			<Switch
				checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
				className='
          animate__animated animate__slideInRight relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-white shadow-md shadow-gray-300 outline-none transition-colors duration-200 ease-in-out dark:bg-gradient-to-r dark:from-darkGradientOne dark:to-darkGradientTwo dark:shadow dark:shadow-gray-700 sm:h-9 sm:w-[4.5rem] md:h-10 md:w-20'>
				<span
					aria-hidden='true'
					className={`${
						darkMode
							? '-translate-x-8 sm:-translate-x-10 md:-translate-x-11'
							: '-translate-x-1'
					}
            flex h-7 w-7 transform items-center justify-center rounded-full bg-primary text-white transition duration-200 ease-in-out sm:h-7 sm:w-7 md:h-8 md:w-8`}>
					{darkMode ? (
						<BsFillMoonStarsFill className='animate__animated animate__rotateIn' />
					) : (
						<BsFillSunFill className='animate__animated animate__rotateIn' />
					)}
				</span>
			</Switch>
		</div>
	);
};

export default SwitchBtn;
