import React from 'react'
import CardPackage from './CardPackage'
import ProgressBar from './ProgressBar'


const Schedule = () => {

    return (
        <div className='flex flex-col container px-5 mx-auto items-center w-full gap-5 justify-between mt-5'>
            <div><ProgressBar num1="1" num2="2" num3="3" num4="4"/></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <CardPackage heading="Single ride 32 one-way" information="Round trip will receive a 20% discount." pay="25$" />
                <CardPackage heading="2-3 Rides Per Week." information="Round trip will receive a 20% discount." pay="25$" />
                <CardPackage heading="5 Rides Per Week" information="Round trip will receive a 20% discount." pay="25$" />
                <CardPackage heading="Book Your Ride As Per Availability" information="Round trip will receive a 20% discount." pay="25$" />

            </div>

        </div>
    )
}

export default Schedule