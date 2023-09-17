import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/selectors/map';
import { View, SafeAreaView,StyleSheet } from 'react-native';
import { styled } from 'nativewind';
import { Header, HeaderButton, Text, Col, UserAvatar, TextStyleEnum, Row, FullOverlay } from '../../shared';
import { themeColors } from '../../theme';
import { IconEdit, IconLogoutSvg } from '../../../assets/svg';
import { router } from 'expo-router';

const StyledView = styled(View);

type TUserScreenProps = {
    id: string;
    isSelf?: boolean;
}

export const UserScreen: React.FC<TUserScreenProps> = ({id, isSelf}) => {

    const user = useSelector(userSelector(id));

    function _onPressLogout(): void {
        router.back()
    }

    function _navigateToProfileEdit(): void {
        router.push('/edit/'+id)
    }

    function _onPressAvatar(): void {
        throw new Error('Function not implemented.');
    }

    const TAGS = [
        'yandex',
        'hack',
        'c++',
        'gym',
        'work'
      ];

    return (
      <StyledView className='box-border pt-4 w-full' >
      <Col flex={1}>
        <FullOverlay
          visible={false}
        />
        <SafeAreaView>
          <Col bg={themeColors.white} height={850}>
            <Header
              isSafeArea={true}
              renderRight={() => (
                <Col
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <HeaderButton
                    bg={themeColors.white}
                    icon={() => <IconLogoutSvg />}
                    onPress={_onPressLogout}
                  />
                  <Text mt={15}>
                    profile
                  </Text>
                  {isSelf ? <HeaderButton
                    bg={themeColors.white}
                    icon={() => <IconEdit />}
                    onPress={_navigateToProfileEdit}
                  /> : <StyledView className='w-[50px]'></StyledView>}
                </Col>
              )}
            />
            <Col flex={1} ph={16}>
              <Col aI={'center'}>
                <UserAvatar user={{ avatar: user?.picture || '' }} onPress={_onPressAvatar} />
              </Col>

              <Col aI={'flex-start'} mt={16}>
                <Text
                  fontWeight={"500"}
                  ta={'left'}
                  color={themeColors.black}
                  textStyle={TextStyleEnum.hTitleRegular}
                  showBase>
                  {user?.nickname}
                </Text>

                <Text
                  mt={10}
                  ta={'left'}
                  color={themeColors.gray}
                  textStyle={TextStyleEnum.p2}>
                  {user?.bio}
                </Text>
              </Col>

              <View style={{
                marginTop: 16,
                marginBottom: 16,
                borderStyle: 'solid',
                borderColor: '#818493',
                borderTopWidth: 1,
                borderRadius: 1,
              }} />

              <Col aI={'flex-start'} height={75}>
                <Text
                  fontWeight={"700"}
                  ta={'left'}
                  color={themeColors.black}
                  textStyle={TextStyleEnum.hTitleRegular}>
                  Tags
                </Text>

                <Row mt={10} aI={'flex-start'} height={20} style={{ gap: 10, flexWrap: 'wrap' }}>
                  {user?.tags.map((tag, index, array) => (
                    <Row key={`${tag}_${index}`} height={20} style={{ gap: 10, flexWrap: 'wrap' }}>
                      <Text
                        fontWeight={"700"}
                        ta={'left'}
                        color={themeColors.black}
                        textStyle={TextStyleEnum.p1EB}
                        showBase
                        baseHeight={12}>
                        {tag.name}
                      </Text>
                      {index !== array.length - 1 ? (
                        <Text fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.p1EB}>·</Text>
                      ) : null
                      }
                    </Row>
                  ))}
                </Row>
              </Col>
            </Col>
          </Col>
        </SafeAreaView>
        {/*<ActionSheetFiles*/}
        {/*    title={_lang?.keyString('select')}*/}
        {/*    refAction={formPickImage.actionSheetImageButton}*/}
        {/*    listPicker={formPickImage.actionListImage}*/}
        {/*/>*/}
      </Col>
    </StyledView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  });