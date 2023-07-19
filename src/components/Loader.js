import { FaSpinner } from 'react-icons/fa';
import '../components/Loader.css';

const Loading = () => {
  return (
    <div>
            <p className="red-note"> ! Please be informed that our API currently operates using the free version of Render. While we strive to provide you with a seamless experience, please note that the database might take some time to spin up. We apologize for any inconvenience this may cause and appreciate your patience. </p>

    <div className='spinnerContainer'>
      <FaSpinner className='spins' />
    </div>
    </div>
    
  );
};

export default Loading;
