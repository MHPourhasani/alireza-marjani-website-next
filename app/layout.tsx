import { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/hooks/useTheme';

export const metadata: Metadata = {
    title: 'علیرضا مرجانی | گرافیست',
    description: 'علیرضا مرجانی هستم. گرافیست و ادیتور',
    themeColor: '#21252A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // const { theme } = useTheme();

    return (
        <html lang="fa" dir="rtl">
            <body>
                <ToastContainer />
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
