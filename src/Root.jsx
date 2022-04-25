import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	About,
	Footer,
	Header,
	ProfileForm,
	NotFound,
	SocialForm,
	ReviewForm,
} from './components';
import NavLinks from './components/layout/NavLinks';

/**
 * @description - Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () => (
	<Router>
		{/* Wrapper */}
		<div className='flex flex-col bg-slate-100 min-h-screen dark:bg-secondary'>
			{/* Header */}
			<Header />
			<NavLinks />
			{/* Content */}
			<main className='container mx-auto px-3 pb-12 flex-grow pt-[20px]'>
				{/* Pages */}
				<AnimatePresence>
					<Routes>
						<Route path='/' exact element={<ProfileForm />} />
						<Route path='/social' exact element={<SocialForm />} />
						<Route path='/review' exact element={<ReviewForm />} />

						<Route path='/about' exact element={<About />} />
						{/*<Route path="/user/:login" exact element={<User/>}/>*/}
						<Route path='/*' exact element={<NotFound />} />
					</Routes>
				</AnimatePresence>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	</Router>
);

export default Root;
