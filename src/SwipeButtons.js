import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';


import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className = "swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon fontsize="large "/>
      </IconButton>
      <IconButton className="swipeButtons_left">
        <CloseIcon fontsize="large "/>
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon fontsize="large "/>
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontsize="large "/>
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon fontsize="large "/>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
