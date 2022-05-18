import React from 'react';
import { styles } from './styles';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
 } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({title, image, ...rest}: Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest} // Qualquer propriedade que não esteja explicita passa para o componente
    >
      <Image 
        source={image}
        style={styles.image}
        />

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}