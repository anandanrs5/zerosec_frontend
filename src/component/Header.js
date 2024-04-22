import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className='flex justify-between px-5 text-white p-5'>
            <div className='flex'>
                <div className='w-[50px]'><RxHamburgerMenu size={"40px"} /></div>
                <div className='text-xl mt-2 '>Workers Time Tracking</div>
            </div>
            <div>
                <CgProfile size={"40px"} />
            </div>
        </div>
    )
}
export default Header;