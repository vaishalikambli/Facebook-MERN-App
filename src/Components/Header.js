import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontIcon from '@material-ui/icons/Storefront';
import ForumIcon from "@material-ui/icons/Forum";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt="Facebook logo"
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon font-size="large" />
        </div>
        <div className="header__option">
          <FlagIcon font-size="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon font-size="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon font-size="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon font-size="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQHksw_YpMcjdA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=jAMyDGMj7_P2GNeq_erdRVDv72m8EazObI3jNgwB7-0' />
          <h4>Vaishali Kambli</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
