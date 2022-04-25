import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// store
import { DataProvider } from './context/DataContext';
// import { store } from './app/store';
// root component
import Root from './Root';
// styles
import './index.scss';

// Rendering the Root component, which is the top level component of our application.
render(
	<DataProvider>
		<Root />
	</DataProvider>,
	document.getElementById('root')
);
