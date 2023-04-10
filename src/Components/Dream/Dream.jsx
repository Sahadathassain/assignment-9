import React from 'react';

const Dream = () => {
    const useImg = 'https://herosapp.nyc3.digitaloceanspaces.com/heroHQ/1670513031775Jhankar-Mahbub.png'

    return (
        <div className='flex flex-col justify-between lg:flex-row bg-gradient-to-r from-green-100 via-lime-100 to-transparent '>
            <div className='mb-10 mx-3 mt-8 md:me-10 md:ms-20 md:max-w-2xl md:mb-0'>
                <h1 className="text-5xl font-bold">
                    One Step <br /> Closer To Your <br />{" "}
                    <span className="text-indigo-500">Dream Job</span>
                </h1>
                <p className='text-lg mt-10'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn mt-5"> Get Started </button>
            </div>
            <div className='md:me-20  md:-ms-10 mx-auto'>
                <img className='w-96 h-96' src={useImg} alt="" />
            </div>
        </div>
    );
};

export default Dream;