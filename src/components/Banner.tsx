import React, {useState} from 'react'
import Image from 'next/image';

import bannerPref from '../assets/images/bannerHeader.jpg'

const Banner = () => {   
    const [showOptions, setShowOptions] = useState(false);

    const handleDropdown = () => {
        setShowOptions(!showOptions);      
    };  

    return (
        <div className="z-0">
            <div className="display:block z-1 " >
                 <Image className="bg-cover bg-no-repeat z-2 " src={bannerPref} layout="responsive" height={350} />          
            </div>                                 
        </div>
    )
}

export default Banner