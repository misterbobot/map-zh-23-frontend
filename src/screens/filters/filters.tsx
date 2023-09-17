import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import { TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IconLogoutSvg, NextArrow } from "../../../assets/svg";
import { Col, FullOverlay, HeaderButton, TextStyleEnum, Row, Text, Header } from "../../shared";
import { themeColors } from "../../theme";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useDispatch } from "react-redux";
import { resetFilters, setFilters } from "../../features/filters/filtersSlice";
import { Tag } from "../../models";

const StyledView = styled(View);

export const FiltersScreen:React.FC = () => {
    const dispatch = useDispatch();
    const TAGS = useSelector((state: RootState) => state.usersList.tags);

    const filters = useSelector((state: RootState) => state.filters);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    useEffect(() => {
        setSelectedTags(filters.tags)
    }, []);
  
    const _onPressLogout = useCallback(() => {
        router.back()
    }, []);
  
  
    function handleIsTagSelected(tagId: number) {
      return selectedTags.findIndex(({id}) => id === tagId)
    }
  
    function handleTagClick(tagObject: Tag) {
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
  
    
  
    return (
      <StyledView className="box-border w-full h-full pt-5 fixed">

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
                    <Text mt={15} mr={35}>
                      filters
                    </Text>
                    <View/>
                  </Col>
                )}
              />
  
              <Col ph={16} pt={30}>
                <Text pt={50} textStyle={TextStyleEnum.huge}>
                  🔮
                </Text>
                <Text fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                  If you know what you looking for
                </Text>
                <Text pt={10} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.p2}>
                  Users on the map would be filtered by provided criteria
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
                  Pick some relevant tags
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
                      <TouchableOpacity onPress={() => handleTagClick({name, id})}>
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
              
              <Row flex={1} style={{paddingRight: 16, paddingLeft: 16, paddingBottom: 50, alignItems: 'flex-end', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => {
                dispatch(resetFilters());
                setSelectedTags([]);
              }}>
                <Row style={{ alignItems: 'center', gap: 10 }}>
                  <Text
                    showBase
                    style={{opacity: selectedTags.length > 0 ? 1: 0.4,}}
                    fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                    Reset
                  </Text>
                </Row>
                </TouchableOpacity>
  
                <TouchableOpacity onPress={() => {
                    dispatch(setFilters({tags: selectedTags}));
                    router.back();
                }}>
                <Row style={{ alignItems: 'center', gap: 10 }} >
                  <Text
                  style={{opacity: selectedTags.length > 0 ? 1: 0.4,}}
                    showBase
                    fontWeight={"700"} ta={'left'} color={themeColors.black} textStyle={TextStyleEnum.hTitleRegular}>
                    Apply
                  </Text>
                  <NextArrow />
                </Row>
                </TouchableOpacity>
              </Row>

      </StyledView>
    );
  }
