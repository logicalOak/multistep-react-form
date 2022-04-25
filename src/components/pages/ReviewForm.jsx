import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../../context/DataContext';
import Animator from '../layout/Animator';

const ReviewForm = () => {
	const { register, handleSubmit } = useForm();
	const { name, email, twitter, facebook } = useContext(DataContext);
	const [isSubmit, setIsSubmit] = useState(false);

	const fillData = [
		{
			name: 'name',
			value: name,
			type: 'text',
		},
		{
			name: 'email',
			value: email,
			type: 'email',
		},
		{
			name: 'twitter',
			value: twitter,
			type: 'text',
		},
		{
			name: 'facebook',
			value: facebook,
			type: 'text',
		},
	];

	const onSubmit = () => {
		alert('Your data has been sent');
		setIsSubmit(true);
	};

	return (
		<Animator className='max-w-4xl m-auto grid gap-[20px]'>
			<form
				className='form'
				autoComplete='off'
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='font-semibold text-lg'>
					{isSubmit
						? 'Your data has been sent'
						: 'Review your details'}
				</h2>

				{/* Data */}
				{!isSubmit &&
					fillData.length !== 0 &&
					fillData.map((item, idx) => (
						<div
							className='w-full flex gap-[10px] items-center'
							key={idx}
						>
							<label
								htmlFor=''
								className='shrink-0 font-semibold'
							>
								Your {item.name}:
							</label>
							<input
								className='appearance-none rounded w-full py-2 text-gray-700 leading-tight pointer-events-none'
								type={item.type}
								name={item.name}
								{...register(`${item.name}`)}
								defaultValue={item.value}
							/>
						</div>
					))}

				{/* Button */}
				{!isSubmit && (
					<button className='button hover:bg-indigo-700 focus:outline-none focus:shadow-outline'>
						Submit
					</button>
				)}
			</form>
		</Animator>
	);
};

export default ReviewForm;
