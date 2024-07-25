import React from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { FaSun, FaMoon, FaLaptop } from 'react-icons/fa';
import { useDarkModeToggle } from '@/context/DarkModeContext';

//模式切换组件
const DarkModeSwtichComponent = () => {
  const {
    isDark,
    followSystem,
    toggleDarkMode,
    followSystemTheme,
    matchMedia
  } = useDarkModeToggle();

  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={`${
          followSystem
            ? matchMedia?.matches ?? false
              ? '!text-white'
              : '!text-main-color'
            : isDark
              ? '!text-white'
              : '!text-main-color'
        }`}
      >
        {followSystem ? (
          <FaLaptop title="System Mode" />
        ) : isDark ? (
          <FaMoon title="Night Mode" />
        ) : (
          <FaSun title="Day Mode" />
        )}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={(e) => {
            toggleDarkMode(e, 'light');
            handleClose();
          }}
          selected={!isDark && !followSystem ? true : false}
        >
          <FaSun className="mr-2" />
          Light
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            toggleDarkMode(e, 'dark');
            handleClose();
          }}
          selected={isDark && !followSystem}
        >
          <FaMoon className="mr-2" />
          Dark
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            followSystemTheme(e);
            handleClose();
          }}
          selected={followSystem}
        >
          <FaLaptop className="mr-2" /> System
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DarkModeSwtichComponent;
