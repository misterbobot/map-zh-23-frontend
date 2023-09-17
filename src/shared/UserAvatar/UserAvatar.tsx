import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Col} from '..';
import {themeColors} from '../../theme';
import {AvatarDefaultSvg} from '../../../assets/svg';
import { Image } from 'expo-image';

interface Props {
  readonly user?: {
    avatar: string,
  };
  readonly onPress?: () => void;
  svgPlaceholder?: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
}

export const UserAvatar = (props: Props) => {
  const {user, onPress, svgPlaceholder, borderColor, borderWidth, backgroundColor } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Col round={150} bw={borderWidth || 1} bc={borderColor || themeColors.green} center style={{
        backgroundColor: backgroundColor || themeColors.white,
      }}>
        <Col round={148} center>
          {!!user?.avatar && (
            <Image
              resizeMode={'cover'}
              style={SS.image}
              source={{uri: user?.avatar}}
            />
          )}

          {!user?.avatar && (svgPlaceholder ? svgPlaceholder : <AvatarDefaultSvg />)}
        </Col>
      </Col>
    </TouchableOpacity>
  );
};

const SS = StyleSheet.create({
  image: {
    width: 148,
    height: 148,
    borderRadius: 74,
  },
});