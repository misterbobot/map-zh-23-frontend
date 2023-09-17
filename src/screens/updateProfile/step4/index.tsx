import React, {useCallback, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {Col, Header, FullOverlay, HeaderButton, TextStyleEnum, Text, UserAvatar, Row, Button} from '../../../../src/shared';
import {IconLogoutSvg, NextArrow} from '../../../../assets/svg';
import {themeColors} from "../../../../src/theme";
import {tags} from "react-native-svg/lib/typescript/xml";
import { styled } from "nativewind";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { api } from "../../../store/api";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledView = styled(View);

export default function Step4(props: any) {
  const userId = props.userId;
  
  const [selectedTags, setSelectedTags] = useState<{name: string, id: string}[]>([]);

  const _navigateToProfileEdit = useCallback(() => {
  }, []);

  const _navigateToPersonalCard = useCallback(() => {
  }, []);

  const _navigateToProfileInfo = useCallback(() => {
  }, []);

  const _onPressLogout = useCallback(() => {
    router.back();
  }, []);

  const _onPressAvatar = useCallback(() => {
  }, []);

  const [bioInfo, onBioInfoChanged] = React.useState('');

  function handleIsTagSelected(tagId: string) {
    return selectedTags.findIndex(({id}) => id === tagId)
  }

  function handleTagClick(tagObject: {name: string, id: string}) {
    const indexOfSelectedTag = handleIsTagSelected(tagObject.id);
    if (indexOfSelectedTag + 1) {
      setSelectedTags([
        ...selectedTags.slice(0, indexOfSelectedTag),
        ...selectedTags.slice(indexOfSelectedTag + 1, selectedTags.length)
      ]);
    } else {
      setSelectedTags([...selectedTags, tagObject]);
    }
  }

  const TAGS = useSelector((state: RootState) => state.usersList.tags);

  const handleCommit = () => {
    if (selectedTags.length < 2) {
      return;
    }

    AsyncStorage.setItem('isFirstTime', 'false');

    api.updateUser({
      uuid: userId,
      //@ts-expect-error
      tags: selectedTags.map(({id}) => id).reduce((acc, id) => acc+','+id)
    })
    router.push('/home/');
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
                  <Text mt={15}>
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
                Pick at least 2 relevant tags
              </Text>
            </Col>

            <Col aI={'flex-start'} height={75} ph={16}>
              <Text
                fontWeight={"700"}
                ta={'left'}
                color={themeColors.black}
                textStyle={TextStyleEnum.hTitleRegular}>
                Tags
              </Text>

              <Row mt={10} aI={'flex-start'} style={{ gap: 10, flexWrap: 'wrap' }}>
                {TAGS.map(({name, id}, index, array) => (
                  <Row key={`${name}_${index}`} height={20} style={{ gap: 10, flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={() => handleTagClick({name, id: id.toString()})}>
                      <Text
                        fontWeight={"700"}
                        ta={'left'}
                        color={themeColors.black}
                        textStyle={TextStyleEnum.p1EB}
                        showBase
                        baseHeight={12}
                        selected={!(selectedTags.findIndex(({id: tagId}) => tagId.toString() === id.toString()) + 1)}
                      >
                        {name}
                      </Text>
                    </TouchableOpacity>
                    {index !== array.length - 1 ? (
                      <Text fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.p1EB}>·</Text>
                    ) : null
                    }
                  </Row>
                ))}
              </Row>
            </Col>


            
            <Col flex={1} style={{paddingRight: 16, paddingLeft: 16, marginTop: 125, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={handleCommit}>
              <Row style={{ alignItems: 'center', gap: 10 }}>
              
                <Text
                style={{opacity: selectedTags.length >= 2 ? 1: 0.4, flexBasis: 200}}
                  showBase
                  fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                  Next
                </Text>
                <NextArrow />
               
                
              </Row>
              </TouchableOpacity>
            </Col>
            </ScrollView>
    </StyledView>
  );
}
