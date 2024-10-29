import Navbar from '@/components/Header/Navbar'
import React from 'react'
import LandingHeroSection from '@/components/landing/LandingHeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import PricingTable from '@/components/Pricing/PricingTable'
import Footer from '@/components/Footer/Footer'

const page = () => {
    return (
        <div>
            <div className=' min-h-dvh flex flex-col'>
                <Navbar />
                <div className=' flex-1 flex flex-col'>
                    <LandingHeroSection />
                </div>
            </div>
            <FeaturesSection />
            <PricingTable />
            <Footer />
        </div>
    )
}

export default page
