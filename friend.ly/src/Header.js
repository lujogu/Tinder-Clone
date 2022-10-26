import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    //BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton, {replace: true})}>
          <ArrowBackIosIcon className="header_icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>

      )}

      <Link to="/">
        <img
          className="header_logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
          alt="tinder logo"/>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large"/>
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
