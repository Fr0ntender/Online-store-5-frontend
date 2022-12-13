/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';

import { IProduct } from 'utils/interface';

import { Grid, Button } from '@mui/material';
import { Title5 } from 'components/typography';
import { cropText } from 'utils/helpers';
import {
  CardFooter,
  CardContentStyled,
  CardMediaStyled,
  CardStyled,
  Subtitle,
  Title,
} from './styles';

interface IProps {
  addToCard: (key: string) => void;
}

const CardProductMemo: FC<IProps & IProduct> = ({
  addToCard,
  subtitle,
  title,
  price,
  url,
  _id,
}) => {
  const newUrl = process.env.GATSBY_MEDIA_URL + url;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CardStyled>
        <CardMediaStyled image={newUrl} title={title} />
        <CardContentStyled>
          <Title weight="bold">{title}</Title>
          <Subtitle weight="regular">
            {cropText({ text: subtitle, size: 140 })}
          </Subtitle>
        </CardContentStyled>
        <CardFooter>
          <Title5 weight="bold">
            {price}
          </Title5>
          <Button
            name="buy"
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addToCard(_id)}
          >
            Add to cart
          </Button>
        </CardFooter>
      </CardStyled>
    </Grid>
  );
};

export const CardProduct = memo(CardProductMemo);
