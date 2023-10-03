'use client';
import Image from 'next/image';

// images
import my_photo from '../../images/my-photo.png';

// icons
import {
    Camera,
    CuttingOne,
    Equalizer,
    GraphicDesign,
    GraphicStitchingFour,
    Instagram,
    SuccessPicture,
    Video,
    VideoTwo,
} from '@icon-park/react';

const Skills = () => {
    const mySkills = [
        {
            id: 1,
            icon: <CuttingOne theme="outline" size="24" fill="#838485" />,
            title: 'تدوین کلیپ',
        },
        {
            id: 2,
            icon: <Video theme="outline" size="24" fill="#838485" />,
            title: 'ساخت تیزر',
        },
        {
            id: 3,
            icon: <VideoTwo theme="outline" size="24" fill="#838485" />,
            title: 'ساخت نماهنگ',
        },
        {
            id: 4,
            icon: <GraphicStitchingFour theme="outline" size="24" fill="#838485" />,
            title: 'موشن گرافیک',
        },
        {
            id: 5,
            icon: <Equalizer theme="outline" size="24" fill="#838485" />,
            title: 'ادیت صدا',
        },
        {
            id: 6,
            icon: <GraphicDesign theme="outline" size="24" fill="#838485" />,
            title: 'طراحی لوگو',
        },
        {
            id: 7,
            icon: <SuccessPicture theme="outline" size="24" fill="#838485" />,
            title: 'طراحی بنر و پوستر',
        },
        {
            id: 8,
            icon: <Instagram theme="outline" size="24" fill="#838485" />,
            title: 'تولید محتوا شبکه های مجازی',
        },
        {
            id: 9,
            icon: <Camera theme="outline" size="24" fill="#838485" />,
            title: 'فیلم برداری و عکاسی',
        },
    ];

    return (
        <section
            id="skills"
            className="flex w-11/12 flex-col items-center justify-between gap-10 py-14 sm:flex-row md:py-20 lg:w-10/12 lg:py-20"
        >
            <div className="relative flex h-[28rem] w-full justify-center rounded-md bg-gradient-to-tr from-gradientTwo to-gradientOne shadow-xl shadow-gray-300 dark:from-darkGradientTwo dark:to-darkGradientOne dark:shadow-lg dark:shadow-gray-700 sm:h-[26rem] sm:flex-1 lg:h-[30rem]">
                <Image src={my_photo} alt="my photo" className="absolute bottom-0 h-auto w-10/12 sm:w-11/12 md:w-9/12 xl:w-8/12 2xl:w-6/12 2xl:max-w-4xl" />
            </div>

            <div className="flex flex-1 flex-col gap-4 md:gap-5">
                <span className="text-xl font-bold text-black dark:text-white">چه کمکی میتوانم به شما کنم؟</span>

                <span className="flex flex-col gap-3 text-sm font-light text-secondary lg:gap-5 lg:text-base">
                    {mySkills.map((skill) => (
                        <li key={skill.id} className="flex items-center gap-1.5">
                            {skill.icon}
                            <span>{skill.title}</span>
                        </li>
                    ))}
                </span>
            </div>
        </section>
    );
};

export default Skills;
