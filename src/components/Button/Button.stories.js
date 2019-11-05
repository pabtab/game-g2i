import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';


storiesOf('Button', module)
  .add('Default Button', () => (<Button>Hello Button</Button>))
  

storiesOf('Button', module)
  .add('Circle green Button', () => (
    <Button circle circleState={true}>Hello Button</Button>
  ))