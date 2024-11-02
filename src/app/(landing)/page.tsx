import Navbar from '@/components/Header/Navbar'
import React from 'react'
import LandingHeroSection from '@/components/landing/LandingHeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import PricingTable from '@/components/Pricing/PricingTable'
import WorkShowCaseSection from '@/components/landing/WorkShowCaseSection'
import FooterSection from '@/components/Footer/FooterSection'
// import TestimonialSection from '@/components/landing/TestimonialSection'

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
            <WorkShowCaseSection />
            <PricingTable />
            {/* <TestimonialSection /> */}
            <FooterSection />
        </div>
    )
}

export default page
