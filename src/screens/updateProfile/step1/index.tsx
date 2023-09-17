import React, { useCallback, useEffect, useState } from "react";
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Col, Header, FullOverlay, HeaderButton, TextStyleEnum, Text, UserAvatar, Row, Button} from '../../../../src/shared';
import {IconLogoutSvg, NextArrow} from '../../../../assets/svg';
import {themeColors} from "../../../../src/theme";
import {LinearGradient} from "expo-linear-gradient";
import { styled } from "nativewind";
import Constants from 'expo-constants';
import { router } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import { Image } from "expo-image";
import { api } from "../../../store/api";
import { CustomUserMarker } from "../../../components/customUserMarker/customUserMarker";
import { useIsFirstTime } from "../../../hooks/useIsFirstTime";

const StyledView = styled(View);
const StyledImage = styled(Image);

export default function Step1(props: any) {
  const {isFirstTime, loading} = useIsFirstTime();

  const [PROFILE_PICTURES, setProfilePictures] = useState<{id: number, avatar: string}[]>([]);

  useEffect(() => {
    api.loadAllAvatars().then((avatars) => {
      setProfilePictures(avatars);
    }
    )
  } , [])

  const userId = props.userId;

  const [image, setImage] = useState<string | null>(null);
  const [selected, setSelected] = useState<number>(-1);
  const [imageFile, setImageFile] = useState<any>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageFile(result.assets[0]);
      setSelected(0);
    }
  };

  const _onPressLogout = useCallback(() => {
    router.replace('/home');
  }, []);

  const _onPressAvatar = useCallback((url: string) => {
    setSelected(PROFILE_PICTURES.findIndex((profilePicture) => profilePicture.avatar === url)+1);
    setImage(null)
  }, [PROFILE_PICTURES]);

  const handleCommit = () => {
    if (selected < 0) {
      return;
    }

    if (selected === 0) {
      api.updateUserImage(userId, image)
      router.push('/editdva/'+userId);
    } else {
      api.updateUserAvatar(userId, PROFILE_PICTURES[selected-1].id)
      router.push('/editdva/'+userId);
    }
  }



  return (
    <StyledView className="box-border w-full relative h-full pt-5" >
      <ScrollView>
            {!loading && !isFirstTime && <Header
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
            />}

            <Col ph={16} pt={10} mt={(!loading && isFirstTime ) ? 15 : 0}>
              <Text fontWeight={"500"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                Set up your profile picture
              </Text>
              <Text ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.p2}>
                You can upload your own photo, or use one of these beautiful avatars
              </Text>
            </Col>

            <Col height={200} style={{marginTop: 30, marginBottom: 30}}>
              <ScrollView
                persistentScrollbar={false}
                horizontal
                snapToInterval={200}
                style={{gap: 10, flex: 1, height: 100, paddingRight: 16, paddingLeft: 16, }}
              >
                  <View style={{height: 200, marginRight: 10}}>
                    <UserAvatar borderColor = {selected === 0? 'black': ''} key={'fref'} user={{avatar: image || ''}} onPress={pickImage} svgPlaceholder = {<StyledImage className="w-[42px] h-[42px] opacity-40" source={require('../../../../assets/edit.svg')}/>} />
                  </View>
                {PROFILE_PICTURES.map((profilePicture, index) => (
                  <View style={{height: 200, marginRight: 10}}>
                    <UserAvatar backgroundColor={selected === index + 1? 'black': ''} borderColor = {selected === index + 1? 'black': ''} key={profilePicture.id} user={{avatar: profilePicture.avatar}} onPress={() => _onPressAvatar(profilePicture.avatar)}/>
                  </View>
                ))}
              </ScrollView>
            </Col>
            

            <Col ph={16} >
              <Row aI={'flex-start'}  style={{position: 'relative'}}>
                <View style={{width: '60%', position: 'relative'}}>
                  <Text
                    style={{flexBasis: 200}}
                    fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                    This is how it would look like
                  </Text>
                </View>
                <StyledView className="absolute bg-black h-10 " >

                </StyledView>


                <LinearGradient
                  colors={['rgba(201, 252, 95, 0.8)', 'rgba(99, 159, 250, 0.847472)', '#9397FF']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{width: '40%', padding: 10, borderRadius: 20, height: 80, marginTop:'auto'}}>
                <StyledView className="absolute left-[50%] -translate-x-5 bottom-4">
                {<CustomUserMarker image={(image || PROFILE_PICTURES[selected-1]?.avatar) || 'https://storage.yandexcloud.net/hz2023/emojies/Group%2033597.png'} />}
                </StyledView>
                </LinearGradient>
              </Row>
            </Col>
            <TouchableOpacity onPress={handleCommit}>
            <Col flex={1} style={{paddingRight: 16, paddingLeft: 16, marginTop: 15, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <Row style={{ alignItems: 'center', gap: 10 }}>
              
                <Text
                style={{opacity: selected >= 0 ? 1: 0.4, flexBasis: 200}}
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
