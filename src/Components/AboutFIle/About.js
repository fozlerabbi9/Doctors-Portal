import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h2>this is about page</h2>
            <div class="flex flex-col justify-center py-6 lg:py-12">
                <div class="w-full mx-auto lg:max-w-4xl">

                    <div class="relative">

                        <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
                        <div class="space-y-12 lg:space-y-8">
                            <div>
                                <div class="flex flex-col items-center">
                                    <div class="flex items-center justify-start w-full mx-auto">
                                        <div class="w-full lg:w-1/2 lg:pr-8">
                                            <div class="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                                                <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                        <span class="text-white">1</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex flex-col items-center">
                                    <div class="flex items-center justify-end w-full mx-auto">
                                        <div class="w-full lg:w-1/2 lg:pl-8">
                                            <div class="p-4 bg-white rounded shadow-lg shadow-red-300">
                                                <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                        <span class="text-white">2</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex flex-col items-center">
                                    <div class="flex items-center justify-start w-full mx-auto">
                                        <div class="w-full lg:w-1/2 lg:pr-8">
                                            <div class="p-4 bg-white rounded shadow-lg shadow-yellow-300">
                                                <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                        <span class="text-white">3</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex flex-col items-center">
                                    <div class="flex items-center justify-end w-full mx-auto">
                                        <div class="w-full lg:w-1/2 lg:pl-8">
                                            <div class="p-4 bg-white rounded shadow-lg shadow-lime-300">
                                                <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                                        <span class="text-white">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;