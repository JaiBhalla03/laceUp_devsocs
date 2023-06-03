import React, {useEffect, useState} from 'react';
import MatchCard from "../components/matchCard";
import user from '../images/profile.jpg';
import axios from "axios";


const Matches = () => {
    const [data, setData] = useState(null);
    const getData = async()=>{
        try{
            const res = await axios.get('/api/getMatches');
            setData(res.data);
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        getData().then(()=>{
            console.log(data);
            const da = getUserDetailsById(data?.user, '647b3a6aafe09ea637f599ad')
            console.log(da)
        })
    },[])

    function getUserDetailsById(users, userId) {
        const user = users?.find((user) => user.id === userId);

        if (user) {
            const { userImage, fullName, rating, slayPoints } = user;
            return { userImage, fullName, rating, slayPoints };
        }

        return null;
    }

    return (
        <div className="bg-white text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-48 sm:py-4 md:py-20">
            {
                data?.match?.map((mat)=>(
                    <MatchCard
                        userImage={user}
                        name={'Jai Bhalla'}
                        rating={3}
                        game={mat.game}
                        address={mat.venue}
                        time={mat.time}
                        solePoints={400}
                        matchPlayed={2}
                        playedFor={mat.betFor}
                    />
                ))
            }

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