import React, {FC, StrictMode} from 'react';
import 'react-native-gesture-handler';

import RootNavigation from './src/navigation/RootNavigator';

interface Props {}

export default (({}: Props) => {
  return (
    <StrictMode>
      <RootNavigation />
    </StrictMode>
  );
}) as FC<Props>;
