/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, MouseEvent, useState, memo } from 'react';
import {
  Badge,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';

import { AccountCircle, MoreVert, ShoppingCart } from '@mui/icons-material';
import { IAllStringProps } from 'utils/interface';

import { LinkClearStyles } from 'components/link';
import { Logo } from 'components/logo';

import {
  AppBarStyled,
  HeaderWrapper,
  Link,
  NavLeft,
  NavRight,
  Profile,
  ProfileEmail,
  SectionDesktop,
  SectionMobile,
  Toolbar,
} from './styles';

interface IHeaderProps {
  authorized: boolean;
  currentUser: IAllStringProps;
  handleOpen?: () => void;
  logout?: () => void;
  language?: string;
  productIds?: string[];
  setLanguage?: (type: string) => void;
}
interface IProfileMenu {
  title: string;
  link?: string;
  action?: () => void;
}

const HeaderMemo: FC<IHeaderProps> = ({
  productIds = [],
  handleOpen,
  currentUser,
  logout,
  authorized,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const menu: IProfileMenu[] = [
    {
      title: 'Admin',
      link: '/admin',
    },
    {
      title: 'Logout',
      action: handleLogout,
    },
  ];

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menu.map(item =>
        item.link ? (
          <MenuItem key={item.title}>
            <LinkClearStyles to={item.link}>{item.title}</LinkClearStyles>
          </MenuItem>
        ) : (
          <MenuItem onClick={item.action} key={item.title}>
            {item.title}
          </MenuItem>
        ),
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {menu.map(item =>
        item.link ? (
          <MenuItem key={item.title}>
            <LinkClearStyles to={item.link}>{item.title}</LinkClearStyles>
          </MenuItem>
        ) : (
          <MenuItem onClick={item.action} key={item.title}>
            {item.title}
          </MenuItem>
        ),
      )}
    </Menu>
  );
  return (
    <HeaderWrapper>
      <AppBarStyled position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <NavLeft>
              <Logo />
            </NavLeft>
            {authorized ? (
              <NavRight>
                <Link to="/cart">
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={productIds.length} color="secondary">
                      <ShoppingCart fontSize="small" />
                    </Badge>
                  </IconButton>
                </Link>
                <SectionDesktop>
                  <Profile
                    tabIndex={0}
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    <Button color="inherit">
                      <AccountCircle color="inherit" />
                      <ProfileEmail>
                        {currentUser && currentUser.email}
                      </ProfileEmail>
                    </Button>
                  </Profile>
                </SectionDesktop>
                <SectionMobile>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                    size="small"
                  >
                    <MoreVert />
                  </IconButton>
                </SectionMobile>
              </NavRight>
            ) : (
              <NavRight>
                <Link to="/cart">
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={productIds.length} color="secondary">
                      <ShoppingCart fontSize="small" />
                    </Badge>
                  </IconButton>
                </Link>
                <Button
                  color="inherit"
                  aria-label="login"
                  name="login"
                  onClick={handleOpen}
                >
                  Login
                </Button>
              </NavRight>
            )}
          </Toolbar>
        </Container>
      </AppBarStyled>
      {renderMobileMenu}
      {renderMenu}
    </HeaderWrapper>
  );
};

export const Header = memo(HeaderMemo);
