import ReactDOM from 'react-dom';
import App from './App';
import { ModalStateProvider } from './providers/State';
import "./styles/global.css";


ReactDOM.render(
    <ModalStateProvider>
      <App />
    </ModalStateProvider>,
    
  document.getElementById('root')
);