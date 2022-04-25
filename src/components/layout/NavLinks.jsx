import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

const NavLinks = () => {
	const { name, email, twitter, facebook } = useContext(DataContext);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const isProfileDone = name.length !== 0 && email.length !== 0;
	const isSocialDone = twitter.length !== 0 && facebook.length !== 0;

	useEffect(() => {
		if (!isProfileDone && !isSocialDone) navigate('/');
	}, []);

	return (
		<div className='pt-5  flex gap-[20px] items-center justify-center'>
			{/* 1 link */}
			<Link
				className={`pb-3 border-b-2 ${
					pathname === '/' && 'border-b-slate-800 font-semibold'
				}`}
				to='/'
			>
				Profile
			</Link>

			{/* 2 link */}
			{isProfileDone ? (
				<Link
					className={`pb-3 border-b-2 ${
						pathname === '/social' &&
						'border-b-slate-800  font-semibold'
					}`}
					to='/social'
				>
					Social
				</Link>
			) : (
				<span className='pb-3 text-slate-500 border-b-2'>Social</span>
			)}

			{/* 3 link */}
			{isProfileDone && isSocialDone ? (
				<Link
					className={`pb-3 border-b-2 ${
						pathname === '/review' &&
						'border-b-slate-800 font-semibold'
					}`}
					to='/review'
				>
					Review
				</Link>
			) : (
				<span className='pb-3 text-slate-500 border-b-2'>Review</span>
			)}
		</div>
	);
};

export default NavLinks;
