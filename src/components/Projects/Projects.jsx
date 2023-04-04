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
				<Tab.List className='flex space-x-1 rounded-xl bg-gray-700 bg-opacity-50 p-1'>
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
									'outline-none',
									selected
										? 'text-primary'
										: 'text-white transition-all ease-in-out hover:text-primary'
								)
							}>
							{category}
						</Tab>
					))}
				</Tab.List>

				<Tab.Panels className='mt-2'>
					{Object.values(categories).map((items, idx) => (
						<Tab.Panel key={idx} className={classNames('outline-none')}>
							<ul className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
								{items.map((item) => (
									<li
										key={item.id}
										className='flex w-full flex-col items-center gap-5 rounded-md bg-gradient-to-t from-gradientTwo to-gradientOne p-3 hover:bg-gray-100 dark:from-darkGradientTwo dark:to-darkGradientOne'>
										<Image
											src={item.posterSrc}
											alt={item.slug}
											width={100}
											height={100}
											className='aspect-square w-full rounded-md'
										/>

										<Link
											href={`/${item.slug}`}
											state={{ item: item }}
											className='text-sm text-white transition-all ease-in hover:text-primary lg:text-base'>
											{item.name}
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
