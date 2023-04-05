import Image from 'next/image';

// images
import my_photo from '../../images/my-photo.png';
import ps_logo from '../../images/logos/ps-logo.png';
import pr_logo from '../../images/logos/pr-logo.png';
import ae_logo from '../../images/logos/ae-logo.png';

// icons
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa';

// styles
import 'animate.css';

const GeneralIntroduction = () => {
	const softwareLogos = [
		{
			id: 'ps',
			image: ps_logo,
		},
		{
			id: 'pr',
			image: pr_logo,
		},
		{
			id: 'ae',
			image: ae_logo,
		},
	];

	const communicationMethods = [
		{
			icon: <BiPhoneCall className='h-auto w-8' />,
			href: 'tel:+989357679157',
		},
		{
			icon: <HiOutlineMail className='h-auto w-8' />,
			href: 'mailto:alirezamarjani.pr@gmail.com',
		},
		{
			icon: <FaTelegramPlane className='h-auto w-6' />,
			href: 'https://t.me/+989357679157',
		},
	];

	return (
		<section className='flex w-11/12 items-center justify-between gap-10 py-10 sm:pt-14 md:pt-10 lg:w-10/12 lg:pt-20'>
			<section className='flex h-96 flex-1 flex-col justify-between'>
				<span className='flex flex-col items-center justify-center gap-1 sm:items-start'>
					<div className='animate__animated animate__lightSpeedInRight flex flex-col justify-center sm:gap-8 lg:gap-10'>
						<p className='flex flex-col items-center justify-center text-[40px] leading-relaxed text-black dark:text-white sm:items-start sm:leading-normal md:flex-row md:flex-wrap md:justify-start md:gap-2 md:text-[44px] lg:text-5xl'>
							سلام،
							<span className='font-extrabold text-primary'>علیرضا مرجانی</span>
							هستم
						</p>
						<p className='hidden font-semibold text-black dark:text-white lg:block lg:text-4xl'>
							یه گرافیست خلاق
						</p>
					</div>

					<p className='animate__animated animate__fadeInDown mt-10 text-center font-light text-secondary sm:hidden md:mt-5 md:block md:text-right lg:mt-10 xl:w-9/12 xl:leading-relaxed'>
						من از سال 1395 وارد حوزه گرافیک شدم و تا الان با افراد و سازمان های مختلفی
						همکاری کرده ام و ...
					</p>
				</span>

				<div className='mt-10 flex w-full flex-col items-center justify-between gap-5 sm:mt-0 sm:items-start md:flex-row'>
					{/* my skills */}
					<div className='flex-1'>
						<span className='font-light text-secondary'>مهارت های من</span>

						<span className='mt-2.5 flex items-center gap-3'>
							{softwareLogos.map((logo) => (
								<div
									key={logo.id}
									className='animate__animated animate__slideInDown h-11 w-11 rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne p-1.5 shadow-lg shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-md dark:shadow-gray-700'>
									<Image
										src={logo.image}
										alt={logo.id}
										className='h-auto w-full'
									/>
								</div>
							))}
						</span>
					</div>

					{/* contact me */}
					<div className='flex-1'>
						<span className='font-light text-secondary'>راه های ارتباطی</span>

						<span className='mt-2.5 flex items-center gap-3 text-black dark:text-white'>
							{communicationMethods.map((method) => (
								<a
									key={method.href}
									target='_blank'
									rel='noreferrer'
									href={method.href}
									className='animate__animated animate__slideInUp flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne p-2 shadow-lg shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-md dark:shadow-gray-700'>
									{method.icon}
								</a>
							))}
						</span>
					</div>
				</div>
			</section>

			<div className='animate__animated animate__slideInLeft relative hidden rounded-md bg-gradient-to-t from-gradientTwo to-gradientOne shadow-xl shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-lg dark:shadow-gray-700 sm:flex sm:h-[23rem] sm:w-72 sm:justify-center md:h-96 lg:h-[28rem] lg:w-96'>
				<Image src={my_photo} alt='my photo' className='h-auto w-10/12 absolute bottom-0' />
			</div>
		</section>
	);
};

export default GeneralIntroduction;
