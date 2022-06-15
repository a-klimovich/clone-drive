import ReactDOM from 'react-dom/client';
import ErrorBoundary from "./utils/Errors/ErrorBoundary";
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
