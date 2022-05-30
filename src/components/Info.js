import React from 'react'
import Profile from '../images/profile-photo.jpg'
import '../App.css'
import About from './About'
import Interest from './Interest'
import MyInfo from './MyInfo'
import Footer from './Footer'



export default function Info() {
    return (
        <>
            <img src={Profile} alt='Profile' className='profile' />
            <div className='profile-info'>
                <MyInfo />
                <div>
                    <About />
                    <Interest />
                </div>
                
            </div>
            <Footer />
        </>
    )
}