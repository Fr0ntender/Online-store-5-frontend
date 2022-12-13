/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import styled from 'styled-components';
import { Theme } from '@mui/material';

interface IPropsWeight {
  [key: string]: number;
}
interface IPropsTypography {
  [key: string]: any;
}
interface IProps {
  theme: Theme;
  weight: string;
}

const switchWeight = (type: IPropsTypography): IPropsWeight => ({
  light: type.fontWeightLight,
  regular: type.fontWeightRegular,
  medium: type.fontWeightMedium,
  bold: type.fontWeightBold,
});

export const TextDefault = styled.p<IProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.fontSize};
  margin: 0;
`;
export const Text1 = styled.p<IProps>`
  font-family: ${({ theme }) => theme.typography.subtitle1.fontFamily};
  font-weight: ${({ theme, weight }) => {
    const types = switchWeight(theme.typography);
    return weight in types ? types[weight] : types.regular;
  }};
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  margin: 0;
  @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.values.md}px) {
    text-align: center;
  }
`;