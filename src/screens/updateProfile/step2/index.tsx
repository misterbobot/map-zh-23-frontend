import React, { useCallback } from "react";
import {SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {Col, Header, FullOverlay, HeaderButton, TextStyleEnum, Text, UserAvatar, Row, Button} from '../../../../src/shared';
import {IconLogoutSvg, NextArrow} from '../../../../assets/svg';
import {themeColors} from "../../../../src/theme";
import { styled } from "nativewind";
import { api } from "../../../store/api";
import { router } from "expo-router";

const StyledView = styled(View);

export default function Step2(props: any) {
  const userId = props.userId;


  const _onPressLogout = useCallback(() => {
    router.back();
  }, []);

  const _onPressAvatar = useCallback(() => {
  }, []);

  const [userName, onUserNameChanged] = React.useState('');

  const handleCommit = () => {
    if (userName.length < 1) {
      return;
    }

    api.updateUser({
      uuid: userId,
      nickname: userName
    })
    router.push('/edittri/'+userId);
  }

  return (
    <StyledView className="box-border w-full relative h-full pt-5">
      <ScrollView>
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
                    icon={() => <IconLogoutSvg/>}
                    onPress={_onPressLogout}
                  />
                  <Text mt={15} mr={40}>
                    edit
                  </Text>
                  <View/>
                </Col>
              )}
            />

            <Col ph={16} pt={30}>
              <Text pt={50} textStyle={TextStyleEnum.huge}>
                🐶
                🐘
                🐻
              </Text>
              <Text fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                Speak to the world!
              </Text>
              <Text pt={10} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.p2}>
                This information will be shown to other hackhaton participiants
              </Text>
            </Col>

            <View style={{
              marginTop: 20,
              marginBottom: 20,
              borderStyle: 'solid',
              borderColor: '#818493',
              borderTopWidth: 1,
              borderRadius: 1,
            }} />

            <Col ph={16}>
              <Text ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.p2}>
                Whatever you want everyone to call you
              </Text>
            </Col>

            <Col ph={16}>
              <Text fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                Username
              </Text>
              <TextInput
                style={{
                  height: 80,
                  paddingTop: 10,
                  paddingBottom: 20,
                  fontSize: 22,
                }}
                onChangeText={onUserNameChanged}
                value={userName}
                placeholder="Write it right here"
              />
            </Col>

            <TouchableOpacity onPress={handleCommit}>
            <Col flex={1} style={{paddingRight: 16, paddingLeft: 16, marginTop: 75, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <Row style={{ alignItems: 'center', gap: 10 }}>
              
                <Text
                style={{opacity: userName.length > 0 ? 1: 0.4, flexBasis: 200}}
                  showBase
                  fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                  Next
                </Text>
                <NextArrow />
                
              </Row>
            </Col>

</TouchableOpacity>
            </ScrollView>
    </StyledView>
  );
}
