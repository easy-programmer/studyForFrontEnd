import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
//import { Input } from '../Input';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addParameters({
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .add('with text', () => <Button onClick={action('clicked')}>Hello Friday!</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Image', module)
  .add('wanted', () => (
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/wanted-hiring-poster-template-design-5a628dea560e6ae3ac8b7a8e43dc6fca_screen.jpg"></img>
  ));

// storiesOf('Input', module)
//   .add('default', () => <Input onChange={action('changed')}/>)
//   .add('disabled', () => <Input disabled/>)