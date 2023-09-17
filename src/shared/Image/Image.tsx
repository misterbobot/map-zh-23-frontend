import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface Props extends FastImageProps {}

export class Image extends React.Component<Props> {
  public render() {
    const {source, ...otherProps} = this.props;

    return <FastImage source={source} {...otherProps} />;
  }
}
