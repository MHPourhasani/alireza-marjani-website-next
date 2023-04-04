import { useState } from 'react';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<section
			dir='rtl'
			className={`flex w-full flex-col items-center justify-center font-iranyekan ${
				darkMode ? 'dark bg-darkBgColor' : 'bg-bgColor'
			}`}>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />

			<main className='flex w-full flex-col items-center justify-center'>{children}</main>

			<Footer />
		</section>
	);
};

export default Layout;
