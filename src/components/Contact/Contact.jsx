import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// icons
import { BiPhoneCall } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const Contact = () => {
	const form = useRef();
	const [error, serError] = useState(null);

	const communicationMethods = [
		{
			social_icon: <BiPhoneCall className='h-auto w-8 lg:w-9' />,
			title: 'شماره تماس',
			detail: '9357679157 98+',
			action: 'برقراری تماس',
			href: 'tel:+989357679157',
		},
		{
			social_icon: <FaTelegramPlane className='h-auto w-7 lg:w-8' />,
			title: 'تلگرام',
			detail: '9357679157 98+',
			action: 'ارسال پیام',
			href: 'https://t.me/+989357679157',
		},
	];

	const inputsItems = [
		{
			type: 'text',
			name: 'user_name',
			placeholder: 'نام شما',
		},
		{
			type: 'email',
			name: 'user_email',
			placeholder: 'ایمیل شما',
		},
	];

	// send email function
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_5qqvqvm', 'template_2u87qwf', form.current, 'p4hqvptU_QHTZdlGj')
			.then(
				(result) => {
					toast.success('پیام شما با موفقیت ارسال شد', {
						position: 'bottom-left',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				},
				(error) => {
					if (error.text) {
						serError(error.text);
					}
					toast.error('متاسفانه پبام شما ارسال نشد...', {
						position: 'bottom-left',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				}
			);
	};

	return (
		<section
			id='contact'
			className='flex w-11/12 flex-col items-center justify-between gap-10 py-14 lg:w-10/12 xl:w-8/12'>
			<p className='text-lg font-bold text-black dark:text-white md:text-xl'>ارتباط با من</p>

			<section className='flex w-full flex-col items-start justify-center sm:flex-row sm:justify-between sm:gap-5 md:gap-10'>
				{/* Reach me on social media section */}
				<ul className='flex w-full flex-col items-center justify-center gap-3 sm:w-7/12 md:w-8/12 lg:w-9/12 xl:max-w-xs'>
					{communicationMethods.map((method, index) => (
						<li
							key={index}
							className='flex w-full flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne py-5 text-black shadow-md shadow-gray-300 ease-in-out dark:from-darkGradientTwo dark:to-darkGradientOne dark:text-white dark:shadow-sm dark:shadow-gray-700 sm:py-3.5'>
							{method.social_icon}
							<p className='text-lg text-black dark:text-white'>{method.title}</p>
							<p className='text-sm font-light text-secondary'>{method.detail}</p>
							<a
								target='_blank'
								rel='noreferrer'
								href={method.href}
								className='mt-1 flex items-center justify-center font-light text-primary'>
								<span className='mr-0.5 text-sm lg:text-sm'>{method.action}</span>
								<MdOutlineKeyboardArrowLeft className='mt-1 h-auto w-5 text-sm' />
							</a>
						</li>
					))}
				</ul>

				{/* Contact me form including name and email and message inputs */}
				<form
					ref={form}
					onSubmit={sendEmail}
					className='text-blck mt-3 flex w-full flex-col items-center justify-center gap-3.5 text-sm font-light dark:text-white sm:mt-0'>
					{inputsItems.map((items, index) => (
						<input
							key={index}
							type={items.type}
							name={items.name}
							placeholder={items.placeholder}
							required
							className='w-full rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne px-2.5 py-3 shadow-md shadow-gray-300 outline-none dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-sm dark:shadow-gray-700 md:p-3.5'
						/>
					))}

					{/* user message textarea */}
					<textarea
						type='text'
						name='message'
						placeholder='پیام شما ...'
						required
						className='h-40 max-h-40 w-full rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne px-2.5 py-3 shadow-sm shadow-gray-300 outline-none dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-sm dark:shadow-gray-700 sm:w-full md:p-3.5'
					/>

					{/* send message btn */}
					<button
						type='submit'
						className='w-full rounded-md bg-primary p-3 text-white shadow-md shadow-rose-400 transition-all ease-in hover:bg-rose-700 dark:shadow-rose-800 sm:w-full md:p-3.5'>
						ارسال پیام
					</button>

					{/* show the error to the user  */}
					{error && <p className='text-red-600'>{error}</p>}
				</form>
			</section>
		</section>
	);
};

export default Contact;
