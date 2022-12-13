/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import React, { FC } from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'styles/theme'
import { PopupAddProduct } from './index';


describe('PopupAddProduct Container', () => {
  const PopupAddProductTest: FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <PopupAddProduct
          handleAddProduct={() => {}}
          handleClose={() => {}}
        />
      </ThemeProvider>
    );
  }
  describe('PopupAddProduct container is open', () => {
    const mount = shallow(<PopupAddProductTest />);
    it('<PopupAddProduct /> test should work', () => {
      expect(mount.find('PopupAddProduct')).toHaveLength(0);
    });
  });
});
