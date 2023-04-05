import Head from 'next/head';
import Image from 'next/image';

// components
import Layout from '@/components/Layout/Layout';

// images
import error_404 from '../images/404-error.png';
import Link from 'next/link';

const Custom404 = () => {
	return (
		<>
			<Head>
				<title>صفحه مورد نظر یافت نشد</title>
				<meta name='description' content='صفحه مورد نظر یافت نشد' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<section className='flex min-h-screen w-11/12 flex-col items-center justify-center gap-14 py-14 lg:w-10/12'>
					<Image src={error_404} alt='404 error' />
					<span>صفحه مورد نظر یافت نشد</span>
					<Link
						href='/'
						className='rounded-md bg-primary py-2.5 text-black dark:text-white'>
						بازگشت به صفحه اصلی
					</Link>
				</section>
			</Layout>
		</>
	);
};

export default Custom404;
