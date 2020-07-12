import React from 'react';
import {Scene} from 'react-native-router-flux';

import {SIGN_IN_FORM} from '../constants/NavigationConstants';
import SignInForm from './SignInFormScene';

const AuthScenes = [
  <Scene initial key={SIGN_IN_FORM} component={SignInForm} />,
];

const modalScenes: any = [];

export {AuthScenes as default, modalScenes};
