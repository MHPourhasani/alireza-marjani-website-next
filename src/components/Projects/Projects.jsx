import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

// data
import * as data from '../../data/projects';

const Projects = ({}) => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}

	let categories = data.projects;

	return (
		<div id='projects' className=' w-11/12 px-2 py-16 sm:px-0 lg:w-10/12'>
			<Tab.Group>
				<Tab.List className='flex space-x-1 rounded-xl bg-gray-400 bg-opacity-50 p-1 dark:bg-gray-700'>
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
									'outline-none',
									selected
										? 'text-primary'
										: 'text-black transition-all ease-in-out hover:text-primary dark:text-white'
								)
							}>
							{category}
						</Tab>
					))}
				</Tab.List>

				<Tab.Panels className='mt-2 sm:mt-4'>
					{Object.values(categories).map((items, idx) => (
						<Tab.Panel key={idx} className={classNames('outline-none')}>
							<ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4'>
								{items.map((item) => (
									<li
										key={item.id}
										className='w-full rounded-md bg-gradient-to-t from-gradientTwo to-gradientOne p-3 shadow-gray-200 hover:bg-gray-100 dark:from-darkGradientTwo dark:to-darkGradientOne sm:shadow-md dark:sm:shadow-gray-700'>
										<Link
											href={{
												pathname: `/${item.slug}`,
												query: item,
											}}
											className='flex w-full flex-col items-center justify-center gap-5'>
											<div className='w- flex aspect-square items-center justify-center rounded-md bg-white dark:bg-black'>
												<Image
													src={item.posterSrc}
													alt={item.slug}
													width={100}
													height={100}
													unoptimized
													className='h-full w-auto rounded-md'
												/>
											</div>

											<span className='text-sm font-light text-black transition-all ease-in hover:text-primary dark:text-white'>
												{item.name}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default Projects;
