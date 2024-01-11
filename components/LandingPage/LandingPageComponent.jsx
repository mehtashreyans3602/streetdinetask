"use-client";
import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Link from "next/link";
import CountAnimation from "../Count Animation/CountAnimation";
import WP1 from '@/assets/WP1.jpg';
import WP2 from '@/assets/WP2.jpg';
import WP3 from '@/assets/WP3.jpg';
import WP4 from '@/assets/WP4.jpg';




const LandingPageComponent = () => {
    const [spaceXData, setSpaceXData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v4/company');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setSpaceXData(data);
            } catch (error) {
                console.error('Error fetching SpaceX data:', error.message);
            }
        };

        fetchData();
    }, []);

    if (!spaceXData) {
        // Data is still loading, you can add a loading spinner or message here
        return <div>Loading...</div>;
    }


    const heading1 = (
        <div className='w-full'>
            <p className="max-w-5xl text-pretty text-justify text-xl">
                SpaceX designs, manufactures, and launches advanced rockets and spacecraft.
                The company was founded in 2002 by {spaceXData.founder} with the ultimate goal of enabling
                people to live on other planets.
            </p>

        </div>
    );


    const paragraphClass = 'text-xs lg:text-xl text-center';
    const animationDivClass = 'flex gap-2 items-center';
    const heading2 = (
        <div className="flex justify-between pb-8 px-4 md:pb-0">
            <div className="flex gap-3 flex-col items-center justify-center">
                <p className={paragraphClass}>Launch Sites</p>
                <div className={animationDivClass}><CountAnimation duration={3000} endValue={3} /></div>
            </div>
            <div className="flex gap-3 flex-col items-center justify-center">
                <p className={paragraphClass}>Test Sites</p>
                <div className={animationDivClass}><CountAnimation duration={3000} endValue={3} /></div>
            </div>
            <div className="flex gap-3 flex-col items-center justify-center">
                <p className={paragraphClass}>Vehicles</p>
                <div className={animationDivClass}><CountAnimation duration={3000} endValue={4} /></div>
            </div>
            <div className="flex gap-3 flex-col items-center justify-center">
                <p className={paragraphClass}>Employees</p>
                <div className={animationDivClass}><CountAnimation duration={3000} endValue={9500} />+</div>
            </div>
        </div>
    );

    return (
        <div>

            <div className="w-full min-h-screen flex items-center justify-center mt-10">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to SpaceX</h1>
                    {heading1}
                    <div className="flex justify-between gap-8">
                        <div className="p-6 rounded-lg">
                            <h2 className="text-3xl font-bold mb-4">Key Information</h2>
                            <p className="border-b-2"><span className="font-bold">CEO:</span> {spaceXData.ceo}</p>
                            <p className="border-b-2"><span className="font-bold">CTO:</span> {spaceXData.cto}</p>
                            <p className="border-b-2"><span className="font-bold">COO:</span> {spaceXData.coo}</p>
                            <p className="border-b-2"><span className="font-bold">Founded:</span> {spaceXData.founded}</p>
                            <p className="border-b-2"><span className="font-bold">Valuation:</span> ${spaceXData.valuation}</p><br />
                            <br />
                            <h2 className="text-3xl font-bold mb-4">Headquarters</h2>
                            {spaceXData.headquarters ? (
                                <>
                                    <p className="border-b-2">{spaceXData.headquarters.address},</p>
                                    <p className="border-b-2">{spaceXData.headquarters.city},</p>
                                    <p className="border-b-2">{spaceXData.headquarters.state}</p>
                                    <p className="border-b-2">USA</p>

                                </>
                            ) : (
                                <p>No headquarters information available</p>
                            )}
                        </div>
                        <div className="p-6 rounded-lg flex flex-col justify-start">
                            <Image src={WP3} alt="alt" width={600} height={500} />
                        </div>

                    </div>
                    {heading2}
                </div>
            </div>
            <div className="p-6">
            
            </div>
        </div>
    )
}

export default LandingPageComponent