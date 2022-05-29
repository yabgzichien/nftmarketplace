import React from 'react'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Header = () => {
  return (
    <div className="bg-[black] p-3 flex items-center justify-around">
        <Link href='/' > 
            <div className='flex items-center'>
                <img className='w-[130px]' src='https://upload.wikimedia.org/wikipedia/commons/a/a8/JoJo%27s_Bizarre_Adventure_-_Diamond_Is_Unbreakable_logo_-_updated.png'/>
                <p className='text-[30px] text-white font-bold cursor-pointer ml-5 mr-5 w-[100px]'>JoJoSea</p>
            </div>

        </Link>
        
        <div className='flex items-center w-[40%] h-[50px] rounded-[10px] bg-[grey] ml-10 p-[5px]'>
            <SearchIcon className='cursor-pointer' />
            <input className='w-[100%] h-[35px] rounded-[10px] bg-[grey] p-[5px]' placeholder='Search' />
        </div>

        <div className='flex items-center'>
            <div>
                <p className='text-[22px] text-white font-bold cursor-pointer p-[5px] mx-[15px]'>Explore</p>
            </div>
            <div>
                <AccountCircleIcon className='text-white text-[32px] cursor-pointer mx-[15px]' />
            </div>
            <div>
                <AccountBalanceWalletIcon className='text-white text-[32px] cursor-pointer mx-[15px]'/>
            </div>
        </div>
        
    </div>
  )
}

export default Header