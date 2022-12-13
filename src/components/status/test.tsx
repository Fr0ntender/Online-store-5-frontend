/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
import React, { FC } from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '@mui/material/styles';

import theme from 'styles/theme'
import { LinearStatus } from './index';

describe('LinearStatus Container', () => {
  const LinearStatusTest: FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <LinearStatus />
      </ThemeProvider>
    );
  }
  describe('LinearStatus container is open', () => {
    const mount = shallow(<LinearStatusTest />);
    it('<LinearStatus /> test should work', () => {
      expect(mount.find('LinearStatus')).toHaveLength(1);
    });
  });
});
