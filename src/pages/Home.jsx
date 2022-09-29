import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Luxurious Rooms" subtitle="Explore great deals on Hotel Bookings">
                <Link to="/rooms" className="btn btn-primary">
                      CLICK HERE FOR HOTEL BOOKINGS
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
