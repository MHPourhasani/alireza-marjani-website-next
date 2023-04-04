import Image from 'next/image';

// images
import myPhoto from '../../images/my-photo.png';

const About = () => {
	return (
		<section
			id='about'
			className='flex w-11/12 flex-col items-center justify-between gap-5 pb-16 pt-44 sm:flex-row sm:py-14 md:mt-0 md:gap-10 md:py-20 lg:w-10/12 lg:py-16 xl:gap-14'>
			<div className='relative flex h-[26rem] w-full justify-center rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne shadow-xl shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-lg dark:shadow-gray-700 sm:h-[26rem] sm:flex-1 lg:h-[32rem]'>
				<Image
					src={myPhoto}
					alt='my photo'
					className='absolute bottom-0 h-auto w-10/12 sm:w-11/12 md:w-9/12 xl:w-8/12'
				/>
			</div>

			<div className='flex flex-1 flex-col gap-4 md:gap-5'>
				<span className='text-xl font-bold text-black dark:text-white'>من کیم؟</span>

				<span className='flex flex-col gap-3 text-sm font-light leading-loose text-secondary lg:gap-5 lg:text-base'>
					<p className='leading-loose'>
						وی در ۱۶ فروردین ۱۳۸۰ در خانواده ای مذهبی در جنوب شرق تهران دیده به جهان
						گشود 😂 و در حال حاضر دانشجوی کارشناسی صنایع هوایی می باشد.
					</p>

					<p className='leading-loose'>
						خب، از سال ۹۵ بود وارد حوزه کار های گرافیکی شدم و در زمینه های مختلفی همچون
						ساخت تیزر، نماهنگ، لوگو موشن، موشن گرافیک، تدوین و … با ارگان های مختلف
						مذهبی و خصوصی و … کار کردم.
					</p>

					<p className='leading-loose'>
						از سال ۱۴۰۰ بطور حرفه ای کار تدوین رو شروع کردم و وارد کار های موشن و vfx
						نیز شدم.
					</p>
				</span>

				<a
					href='#skills'
					className='w-32 rounded-md bg-primary py-2.5 text-center text-sm font-light text-white shadow-md shadow-rose-400 transition-all ease-in hover:bg-rose-700 dark:shadow-rose-800 lg:w-36 lg:text-base'>
					مهارت های من
				</a>
			</div>
		</section>
	);
};

export default About;
