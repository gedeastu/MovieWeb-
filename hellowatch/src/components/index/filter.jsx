import './filter.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Filter () {
  const navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate('/')}>back</button>
    </>
  );
}

export default Filter;