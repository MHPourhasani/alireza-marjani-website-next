import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { MdClose } from 'react-icons/md';

// images
import am_logo_dark from '../../images/logos/am-logo-dark.png';
import am_logo_light from '../../images/logos/am-logo-light.png';

const MobileMenu = ({ darkMode }) => {
	const [open, setOpen] = useState(true);

	const menuListItem = [
		{ href: '/', title: 'صفحه اصلی' },
		{ href: '#about', title: 'درباره من' },
		{ href: '#skills', title: 'مهارت های من' },
		{ href: '#projects', title: 'نمونه کار ها' },
		{ href: '#contact', title: 'ارتباط با من' },
	];

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-10 font-iranyekan font-light' onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'>
								<Dialog.Panel
									className={`pointer-events-auto w-56 ${
										darkMode ? 'dark bg-darkBgColor' : 'bg-bgColor'
									}`}>
									<div dir='rtl' className='flex h-full flex-col p-5 shadow-xl'>
										<div className='flex items-center justify-between'>
											<Link href='/'>
												<Image
													src={darkMode ? am_logo_dark : am_logo_light}
													alt='logo'
													className='h-auto w-16'
												/>
											</Link>

											<button
												onClick={() => setOpen(false)}
												className='text-secondary hover:text-primary'>
												<MdClose
													className='h-auto w-8'
													aria-hidden='true'
												/>
											</button>
										</div>

										<ul className='mt-5'>
											{menuListItem.map((item) => (
												<li
													key={item.href}
													onClick={() => setOpen(false)}
													className='my-5 text-black dark:text-white'>
													<a href={item.href}>{item.title}</a>
												</li>
											))}
										</ul>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default MobileMenu;
