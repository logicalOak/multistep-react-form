import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { DataContext } from '../../context/DataContext';
import Animator from '../layout/Animator';

const ProfileForm = () => {
	const { setProfile } = useContext(DataContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			terms: false,
			policy: false,
		},
	});

	const onSubmit = ({ name, email, terms, policy }) => {
		setProfile({ name, email, terms, policy });
		navigate('/social');
	};

	return (
		<Animator className='max-w-4xl mx-auto grid gap-[20px] text-center'>
			<form
				className='form'
				autoComplete='off'
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='font-semibold text-lg'>
					Please fill in the information about yourself
				</h2>

				{/* Input */}
				<div className='w-full'>
					<input
						className={`input focus:outline-none focus:shadow-outline focus:border-indigo-500 ${
							errors.name && 'border-red-500 focus:border-red-500'
						}`}
						type='text'
						name='name'
						placeholder='Your name'
						{...register('name', {
							required: 'Please enter a name',
							minLength: {
								value: 5,
								message: 'Min 5 characters',
							},
						})}
					/>
					{errors.name && (
						<p className='text-red-600 mt-1 text-sm'>
							{errors.name?.message}
						</p>
					)}
				</div>

				{/* Input */}
				<div className='w-full'>
					<input
						className={`input focus:outline-none focus:shadow-outline focus:border-indigo-500 ${
							errors.name && 'border-red-500 focus:border-red-500'
						}`}
						type='email'
						name='email'
						placeholder='Your Email'
						{...register('email', {
							required: true,
							pattern:
								/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
					/>
					{errors.email && (
						<p className='text-red-600 mt-1 text-sm'>
							Please enter a valid email
						</p>
					)}
				</div>

				{/* Checkbox */}
				<div className='flex items-center'>
					<label className='flex items-center'>
						<input
							type='checkbox'
							name='terms'
							className='form-checkbox h-5 w-5 text-gray-600 mr-2'
							// onChange={() => setProfile({ terms })}
							{...register('terms', { required: true })}
						/>
						<span>
							I accept the{' '}
							<a className='text-blue-400 underline' href='#'>
								Terms and Conditions
							</a>
						</span>
					</label>
				</div>

				{/* Checkbox */}
				<div className='flex items-center'>
					<input
						type='checkbox'
						name='policy'
						className='form-checkbox h-5 w-5 text-gray-600 mr-2'
						{...register('policy', { required: true })}
					/>
					<span>
						I accept the{' '}
						<a className='text-blue-400 underline' href='#'>
							Privacy and Policy
						</a>
					</span>
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

export default ProfileForm;
