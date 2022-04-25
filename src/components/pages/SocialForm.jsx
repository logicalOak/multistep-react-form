import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { DataContext } from '../../context/DataContext';
import Animator from '../layout/Animator';

const SocialForm = () => {
	const { setSocial } = useContext(DataContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			twitter: '',
			facebook: '',
		},
	});

	const onSubmit = ({ twitter, facebook }) => {
		setSocial({ twitter, facebook });
		navigate('/review');
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
					How can we find you on social?
				</h2>

				{/* Input */}
				<div className='w-full'>
					<input
						className={`input focus:outline-none focus:shadow-outline focus:border-indigo-500 ${
							errors.twitter &&
							'border-red-500 focus:border-red-500'
						}`}
						type='text'
						name='twitter'
						placeholder='Your twitter'
						{...register('twitter', { required: true })}
					/>
					{errors.twitter && (
						<p className='text-red-600 mt-1 text-sm'>
							Please enter your twitter
						</p>
					)}
				</div>

				{/* Input */}
				<div className='w-full'>
					<input
						className={`input focus:outline-none focus:shadow-outline focus:border-indigo-500 ${
							errors.facebook &&
							'border-red-500 focus:border-red-500'
						}`}
						type='text'
						name='facebook'
						placeholder='Your facebook'
						{...register('facebook', { required: true })}
					/>
					{errors.facebook && (
						<p className='text-red-600 mt-1 text-sm'>
							Please enter your facebook
						</p>
					)}
				</div>

				{/* Button */}
				<button
					className='button hover:bg-indigo-700 focus:outline-none focus:shadow-outline disabled:bg-slate-400'
					type='submit'
					disabled={!isValid}
				>
					Next
				</button>
			</form>
		</Animator>
	);
};

export default SocialForm;
