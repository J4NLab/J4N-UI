import { createContext } from 'react';
import { colorList } from '../theme/color';

export const DoggyContext: any = createContext({
  color: colorList,
});
