import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import { Avatar } from "@material-ui/core";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
	return (
		<div className='header'>
			<div className='header__left'>
				<MenuIcon />
				<img
					src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
					alt='gmail icon'
				/>
			</div>
			<div className='header__middle'>
				<div className='header__searchContainer'>
					<SearchIcon />
					<input type='text' placeholder='Search Mail' />
					<ArrowDropDownIcon />
				</div>
			</div>
			<div className='header__right'>
				<div className='headerRightIcons'>
					<HelpOutlineOutlinedIcon />
					<SettingsOutlinedIcon />
					<DialpadOutlinedIcon />
				</div>
				<div
					className='headerAvatar'
					style={{
						cursor: "pointer",
					}}
				>
					<Avatar />
				</div>
			</div>
		</div>
	);
};

export default Header;
