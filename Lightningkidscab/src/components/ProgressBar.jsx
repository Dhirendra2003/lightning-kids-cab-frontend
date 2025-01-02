import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="flex justify-center items-center my-8 font-geist">
            <ol className="flex ">
                {/* Step 1 */}
                <li className="relative mb-6">
                    <div className='flex items-center'><div className="z-10 flex items-center justify-center w-8 h-8 bg-white  font-semibold rounded-full ring-4 ring-white shrink-0">
                        {props.num1}
                    </div>
                    <hr className="w-full border-t-2 border-white mx-2" />
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class=" font-semibold text-lg text-gray-900 dark:text-white">Login / Sign Up</h3>
                        
                        <p class="text-base font-normal text-gray-200">Create or access your account.</p>
                    </div>
                </li>

                {/* Step 2 */}
                <li className="relative mb-6">
                    <div className='flex items-center'><div className="z-10 flex items-center justify-center w-8 h-8 bg-white  font-semibold rounded-full ring-4 ring-white shrink-0">
                        {props.num2}
                    </div>
                    <hr className="w-full border-t-2 border-white mx-2" />
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class=" font-semibold text-lg text-gray-900 dark:text-white">Add Child</h3>
                        
                        <p class="text-base font-normal text-gray-200">Add your child's details.</p>
                    </div>
                </li>

                {/* Step 3 */}
                <li className="relative mb-6">
                    <div className='flex items-center'><div className="z-10 flex items-center justify-center w-8 h-8 bg-white  font-semibold rounded-full ring-4 ring-white shrink-0">
                        {props.num3}
                    </div>
                    <hr className="w-full border-t-2 border-white mx-2" />
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class=" font-semibold text-lg  dark:text-white">Select Booking Date
                        & Days</h3>
                      
                        <p class="text-base font-normal text-gray-200">Choose the desired date <br/>and schedule.</p>
                    </div>
                </li>
                <li className="relative mb-6">
                    <div className='flex items-center'><div className="z-10 flex items-center justify-center w-8 h-8 bg-white  font-semibold rounded-full ring-4 ring-white shrink-0">
                        {props.num4}
                    </div>
                    
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class=" font-semibold text-lg text-white ">Book your ride</h3>
                       
                        <p class="text-base font-normal text-gray-200 ">Confirm your booking<br/> based on availability.</p>
                    </div>
                </li>

            </ol>
        </div>
    );
};

export default ProgressBar;
