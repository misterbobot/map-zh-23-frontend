import React from 'react';
import {themeColors} from '../../theme';
import {IconBackArrowSvg} from '../../../assets/svg';
import {Button} from '../Button';
import {Col} from '../Col';
import {Row} from '../Row';
import {Text, TextStyleEnum} from '../Text';

interface Props {
    readonly title?: string;
    readonly onPressBack?: () => void;
    readonly renderRight?: () => React.ReactNode;
    readonly isSafeArea?: boolean;
}

export const Header = (props: Props) => {
    const {onPressBack, title, renderRight} = props;

    return (
        <Col>
            <Row
                pb={onPressBack ? 10 : 0}
                height={57}
                aI={'flex-end'}
                pl={onPressBack ? 24 : 16}
                pr={16}
                jC={'space-between'}>
                {!!title && (
                    <Col height={42} jC={'center'}>
                        <Text color={themeColors.gold} textStyle={TextStyleEnum.hTitle}>
                            {title}
                        </Text>
                    </Col>
                )}
                {!!onPressBack && (
                    <Button
                        onPress={onPressBack}
                        icon={() => (
                            <Col mr={8} top={1}>
                                <IconBackArrowSvg />
                            </Col>
                        )}
                        title={'back'}
                        textStyle={TextStyleEnum.h3}
                        colorText={themeColors.gray}
                    />
                )}
                {renderRight?.()}
            </Row>
        </Col>
    );
};
