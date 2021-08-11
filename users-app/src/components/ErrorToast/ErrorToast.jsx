import './ErrorToast.scss';
import { FaExclamationTriangle, FaRegTimesCircle } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorToast = ({closeError, msg}) => {

  const close = () =>{
    closeError()
  }

  const errorMessage = `No results found for your search: 
                        Make sure all words are spelled correctly try again.
                        Check you internet connection.
                        Try again!`;

  const errorMessage2 = `404 not found:
                        This User doesn't exist or the URL is not correct.
                        Make sure all words are spelled correctly try again.
                        Check the URL and try again!`;

  return (
    <div className="error mt-5">
      <div className="error-header">
        <FaExclamationTriangle size={20} />
        <span>Something went wrong :/</span>
        {
            msg === "message2" ?
            <Link to="/">
                <Button className="btn-error"><FaRegTimesCircle /></Button>
            </Link>
            :
            <Button className="btn-error" onClick={()=>close()}><FaRegTimesCircle /></Button>
        }
      </div>
      <div className="error-message">
        <p>
          {msg==="message1" ? errorMessage : errorMessage2} 
        </p>
      </div>
    </div>
  );
};

export default ErrorToast;