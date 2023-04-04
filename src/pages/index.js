import Head from 'next/head';

// components
import Layout from '@/components/Layout/Layout';
import GeneralIntroduction from '@/components/GeneralIntroduction/GeneralIntroduction';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
	return (
		<>
				<Head>
					<title>علیرضا مرجانی | گرافیست</title>
					<meta name='description' content='علیرضا مرجانی هستم. گرافیست و ادیتور' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta name='theme-color' content='#21252A' />
					<link rel='icon' href='/favicon.ico' />
				</Head>

			<Layout>
				<GeneralIntroduction />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</Layout>
		</>
	);
}
