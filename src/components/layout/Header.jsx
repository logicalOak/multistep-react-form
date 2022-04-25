import { FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Toggle } from '../index';

/**
 * @description Header
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => (
	<header className='bg-white p-3 shadow md:py-5 lg:px-5 dark:bg-primary text-secondary relative'>
		<div className='flex flex-col items-center gap-1 sm:flex-row sm:justify-between'>
			{/* Logo */}
			<Link
				className='flex flex-col items-center gap-1 font-semibold sm:flex-row'
				to='/'
			>
				<FaUserAstronaut className='text-lg' />
				Multistep React Form
			</Link>

			{/* Theme Toggle */}
			<div className='absolute z-10 right-2 rounded-[50%] bg-white hover:shadow hover:text-indigo-500 transition-all sm:static dark:bg-secondary dark:hover:text-accent'>
				<Toggle />
			</div>

			{/* Nav */}
			<div className='flex gap-2 sm:gap-3'>
				<Link
					to='/'
					className='font-bold text-sm text-indigo-500 hover:text-indigo-800 transition-all sm:text-base dark:text-secondary dark:hover:text-accent'
				>
					Home
				</Link>
				<Link
					to='/about'
					className='font-bold text-sm text-indigo-500 hover:text-indigo-800 transition-all sm:text-base dark:text-secondary dark:hover:text-accent'
				>
					About
				</Link>
			</div>
		</div>
	</header>
);

export default Header;
