import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {FaEdit} from "react-icons/fa";
import Image from "next/image";
import {AiFillStar, AiOutlinePlus} from "react-icons/ai";
import axios from "axios";

const Dashboard = () => {
    const {data: session} = useSession();
    console.log(session);
    const [details, setDetails] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    console.log(session?.user?.id)

    //for fetching the user details
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`/api/userdashboard/${session?.user?.id}`);
                setDetails(res.data.user);
            } catch (err) {
                console.error(err);
                setDetails(null);
            }
        };
        fetchUserData();
    }, [session]);

    const handleEditProfileImage = () => {
        setEditModalOpen(true);
    };

    const handleModalSubmit = async () => {
        try {
            const response = await axios.post('/api/updateImageUrl', {
                userImage: imageUrl,
                id: details?.id,
            });

            if (response.status !== 200) {
                throw new Error('Failed to update image URL');
            }

            console.log('Image URL updated:', imageUrl);
            setEditModalOpen(false);
            setDetails((prevDetails) => ({ ...prevDetails, userImage: imageUrl }));
        } catch (error) {
            console.error(error);
        }
    };

    const arr = new Array(details?.rating);
    for(let i=0;i<details?.rating;i++){
        arr.push('lol');
    }
    console.log(details);
    return (
        <main className="bg-white text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-28 sm:py-4 md:py-20">
            <div className="shadow-gray-800 shadow-sm px-2 py-2 md:px-8 md:p-8 lg:py-8 lg:px-32 flex items center justify-between flex-col-reverse md:flex-row">
                <div className="flex items-center flow-col justify-center">
                    <div>
                        <div className="">
                            <p className="text-sm text-gray-800">Name</p>
                            <div className="text-sm md:text-xl font-bold">
                                {details?.fullName || (
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-4 animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-800">Phone-Number</p>
                            <div className="text-sm md:text-xl font-bold">
                                {details?.phoneNumber || (
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-4 animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-800">Email</p>
                            <div className="text-sm md:text-xl font-bold">
                                {details?.email || (
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-4 animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-800">Address</p>
                            <div className="text-sm md:text-xl font-bold">
                                {details?.address || (
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-4 animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-800">Favourite-Sports</p>
                            <div className="text-sm md:text-xl font-bold">
                                {details?.favouriteSports || (
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-4 animate-pulse"></div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-800">Rating</p>
                            <div className="text-sm md:text-xl font-bold flex">
                                {details?.rating ? (
                                    arr.map((i) => (
                                        <AiFillStar key={i} className={'text-yellow-500'}/>
                                    ))
                                ) : (
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-64 mb-4 animate-pulse"></div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative">
                        {
                            details?.userImage ? (<Image className="rounded-full" src={details?.userImage} alt="" width={250} height={250} />) : (
                                <div className="h-72 bg-gray-200 rounded-full dark:bg-gray-300 w-72 mb-4 animate-pulse"></div>
                            )
                        }
                        <div
                            onClick={handleEditProfileImage}
                            className="absolute bottom-0 right-5 rounded-full p-2 cursor-pointer flex justify-center items-center"
                        >
                            <FaEdit className="text-2xl text-gray-600 hover:scale-110 active:scale-90 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </div>

                <div className={'flex flex-col lg:flex-row justify-between my-4'}>
                    <div className={'shadow-sm shadow-gray-800 p-4 w-full flex items-center lg:w-3/5'}>
                        <div role="status" class="max-w-2xl p-4 mx-auto border border-gray-200 w-full rounded shadow animate-pulse md:p-6 dark:border-gray-300">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2.5"></div>
                            <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                            <div class="flex items-baseline mt-4 space-x-6">
                                <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-300"></div>
                                <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-300"></div>
                                <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-300"></div>
                                <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-300"></div>
                                <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-300"></div>
                            </div>
                            <span class="sr-only">Loading...</span>
                        </div>

                    </div>
                    <div className={'relative h-[500px] overflow-y-scroll shadow-sm shadow-gray-800 p-3 w-full lg:w-2/5'}>
                        <div className={'sticky top-0 bg-gray-200'}>
                            <div className={'flex justify-between shadow-gray-800 shadow-sm p-2'}>
                                <h1 className={'text-2xl flex items-center'}>
                                    My Matches
                                </h1>
                                <button
                                    className={'flex text-xl bg-green-400 p-2 rounded-sm hover:bg-green-500 hover:scale-105 active:scale-95 duration-300 transition-all focus:outline-none focus:border-none'}>
                                    Create
                                    <div className={'flex items-center'}>
                                        <AiOutlinePlus size={30} />
                                    </div>

                                </button>
                            </div>
                        </div>
                        {
                                <div className={'w-full'}>
                                    <div className={'h-[92px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                                    <div className={'h-[92px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                                    <div className={'h-[92px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                                    <div className={'h-[92px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                                </div>

                        }
                    </div>
                </div>
            <div className="shadow-gray-800 shadow-sm px-2 py-2 md:px-8 md:p-8">
                <h1 className={'text-3xl'}>
                    Matches Played History
                </h1>
                <div class={'w-full'}>
                    <div className={'h-[50px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                    <div className={'h-[50px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                    <div className={'h-[50px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                </div>
            </div>
            <div className="shadow-gray-800 shadow-sm px-2 py-2 my-4 md:px-8 md:p-8">
                <h1 className={'text-3xl'}>
                    Tips and tricks
                </h1>
                <div class={'w-full'}>
                    <div className={'h-[50px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                    <div className={'h-[50px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                    <div className={'h-[50px] bg-gray-200 rounded-sm dark:bg-gray-300 animate-pulse w-full my-2'}></div>
                </div>
            </div>
            {editModalOpen && (
                <div className="z-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white shadow-gray-800 shadow-sm rounded-sm p-4 w-10/12">
                        <form className="flex w-[100%] justify-between">
                            <input
                                type="text"
                                value={imageUrl}
                                placeholder="Enter your profile image url"
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="text-center focus:outline-none border-none p-2 bg-white w-[100%]"
                            />
                            <button onClick={handleModalSubmit} className="bg-white p-2 shadow-gray-800 shadow-sm">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </main>

    );
};

export default Dashboard;