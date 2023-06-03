import React from 'react';
import MatchCard from "../components/matchCard";
import user from '../images/profile.jpg';

const Matches = () => {

    return (
        <div className="bg-white text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-48 sm:py-4 md:py-20">
            <MatchCard
                userImage={user}
                name={'Jai Bhalla'}
                rating={3}
                game={'Badminton'}
                address={'Vellore, Tamil Nadu'}
                time={'5:00pm-6:00pm'}
                solePoints={400}
                matchPlayed={2}
                playedFor={100}
            />
            <MatchCard
                userImage={user}
                name={'Dhruv Sharma'}
                rating={5}
                game={'Basketball'}
                address={'Vellore, Katpadi, Tamil Nadu'}
                time={'5:00pm-6:50pm'}
                solePoints={4000}
                matchPlayed={12}
                playedFor={180}
            />
            <MatchCard
                userImage={user}
                name={'Mridul Jain'}
                rating={4}
                game={'Tennis'}
                address={'Chennai, Tamil Nadu'}
                time={'5:00am-6:00am'}
                solePoints={2300}
                matchPlayed={9}
                playedFor={120}
            />
            <MatchCard
                userImage={user}
                name={'Harmanpreet Singh'}
                rating={3}
                game={'Basketball'}
                address={'Vellore, Katpadi, Tamil Nadu'}
                time={'2:30pm-4:00pm'}
                solePoints={800}
                matchPlayed={6}
                playedFor={100}
            />
        </div>
    );
};

export default Matches;