import { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ThemeProvider } from '@/hooks/useTheme';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
    title: 'علیرضا مرجانی | گرافیست',
    description: 'علیرضا مرجانی هستم. گرافیست و ادیتور',
    applicationName: 'Alireza Marjani',
    themeColor: '#21252A',
    viewport: 'initial-scale=1.0, width=device-width',
    keywords: ['Editor', 'photographer', 'film editor', 'camera', 'camera man', 'film maker', 'design', 'designer'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body className="flex flex-col justify-center items-center font-iranyekan">
                <ToastContainer />
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
