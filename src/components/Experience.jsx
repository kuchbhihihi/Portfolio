import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'SKYVIEW Smart Solutions',
        period: 'Dec 2024 - Jan 2025',
        description: 'Developed and optimized a feature-rich website using React, ensuring a seamless and responsive user experience. Successfully completed all assigned tasks, implementing dynamic components, state management, and performance enhancements to meet company requirements.',
      },
    //   {
    //     company: 'Second Company',
    //     period: '2020 - Present',
    //     description: 'Description of your experience in this company.',
    //   },
    //   {
    //     company: 'Third Company',
    //     period: '2020 - Present',
    //     description: 'Description of your experience in this company.',
    //   },
    //   {
    //     company: 'Fourth Company',
    //     period: '2020 - Present',
    //     description: 'Description of your experience in this company.',
    //   },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>
                    <a href="https://drive.google.com/file/d/1Z9Cy0AJnz_U0FvBhovQ0Q2Rqyb6MuIWy/view?usp=drive_link" className='text-purple-500 hover:underline' target='_blank' rel='noopener noreferrer'>Certificate Link</a>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience