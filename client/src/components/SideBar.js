import { GoStack } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { PiListMagnifyingGlass } from 'react-icons/pi';
import SideBarNavItem from './SideBarNavItem';
import { RiBarChart2Line } from 'react-icons/ri';
import { FaBook } from 'react-icons/fa';
import { SignedIn, UserButton } from "@clerk/clerk-react"

const SideBar = () => {
  return (
    <aside className='sticky h-auto bg-zinc-700'>
      <nav className='flex h-screen flex-col justify-between'>
        <ul>
          <SideBarNavItem
            label='Accounts'
            path='/accounts'
            icon={<GoStack />}
          />
          <SideBarNavItem
            label='Cash Flow'
            path='/cash-flow'
            icon={<RiBarChart2Line />}
          />
          <SideBarNavItem
            label='Overview'
            path='/overview'
            icon={<PiListMagnifyingGlass />}
          />
          <SideBarNavItem
            label='Transactions'
            path='/transactions'
            icon={<GrTransaction />}
          />
          <SideBarNavItem
            label='Education Resources'
            path='/education-resources'
            icon={<FaBook />} // New icon for Education Resources
          />
        </ul>
        <div className='flex justify-evenly p-5'>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
