import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
