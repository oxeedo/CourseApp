import React from 'react'


const courseContent = [
    {
        time: '5:35mins',
        title: 'Welcome to the Course'
    },
    {
        time: '7:35mins', title: 'Design Thinking - Intro'
    },
    {
        time: '10:35mins', title: 'Design Thinking Process'
    },
    {
        time: '5:35mins', title: 'Customer perspective'
    },
]

const courses = [
    {
        name: 'UX Design',
        totalCourse: '10',
        image: require('../../assets/image1.png'),
        price: '50',
        star: '4.1',
        students: '55',
        courseContent

    },
    {
        name: 'Marketing',
        totalCourse: '20',
        image: require('../../assets/image2.png'),
        price: '50',
        star: '4.1',
        students: '55',
        courseContent

    },
    {
        name: 'Photography',
        totalCourse: '30',
        image: require('../../assets/image3.png'),
        price: '50',
        star: '4.3',
        students: '10',
        courseContent

    },
    {
        name: 'Business photography',
        totalCourse: '50',
        image: require('../../assets/image4.png'),
        price: '50',
        star: '4.2',
        students: '35',
        courseContent

    }
]
export default courses