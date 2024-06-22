import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppScreen} from '../../components/ui/AppScreen';
import {HomeCard} from '../../components/HomeCard';
import {AppText} from '../../components/ui/AppText';
import {hp, ms, wp} from '../../helper/responsive';
import {FONT_SIZE, SPACING} from '../../constants/sizes';
import {AppButton} from '../../components/ui/AppButton';
import {DETAIL_OPTION_DATA} from '../../data';
import {useTheme} from '../../theme/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppScroll from '../../components/ui/AppScroll';
import {useSelector} from 'react-redux';

const Detail = ({route}) => {
  // const params = route.params;
  const item = useSelector((state: RootState) => state.homeCard.selectedItem);
  const [selectedOption, setSelectionOption] = useState(
    DETAIL_OPTION_DATA[0].id,
  );
  const {themeColors} = useTheme();

  // Function : handle option selection on btn press
  const onOption = id => {
    setSelectionOption(() => id);
  };

  // Component : contains icon and text component
  const IconTextComponent = ({text, iconName}) => (
    <View style={[styles.flexRow, styles.infoComponent]}>
      <Icon name={iconName} color={themeColors.text} size={ms(25)} />
      <AppText style={styles.infoText}>{text}</AppText>
    </View>
  );
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppScroll>
          <HomeCard item={item} style={styles.card} isDetail={true} />
          {/* BOTTOM CONTAINER */}
          <View>
            {/* OPTION SECTION */}
            <View style={styles.optionBtnBox}>
              {DETAIL_OPTION_DATA.map(opt => (
                <AppButton
                  key={opt.id}
                  title={opt.name}
                  variant="normal"
                  onPress={() => onOption(opt.id)}
                  style={[
                    styles.optionBtn,
                    {
                      backgroundColor:
                        selectedOption === opt.id
                          ? themeColors.text
                          : themeColors.background,
                    },
                  ]}
                  textStyle={[
                    styles.optionBtnText,
                    {
                      color:
                        selectedOption === opt.id
                          ? themeColors.background
                          : themeColors.text,
                    },
                  ]}
                />
              ))}
            </View>
            {/* INFO SECTION */}
            <View style={[styles.flexRow, styles.infoBox]}>
              <IconTextComponent
                iconName="clock-time-three"
                text={'12 hours'}
              />
              <IconTextComponent iconName="apple-icloud" text={'18° c'} />
            </View>
            {/* BOTTOM SECTION */}
            <View>
              {/* DESCRIPTION SECTION */}
              <AppText style={[styles.description]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita sapiente minus enim et praesentium, veniam
                consequuntur, nemo perferendis iure ipsum tenetur! Officiis
                dolor optio sit accusantium eligendi et quae ex. Expedita
                sapiente minus enim et praesentium, veniam consequuntur, nemo
                perferendis iure ipsum tenetur.
              </AppText>
            </View>
            {/* BOOK NOW SECTION */}
            <View style={[styles.bookBtnBox]}>
              <AppButton
                style={styles.bookBtn}
                variant="normal"
                title="Book Now"
              />
            </View>
          </View>
        </AppScroll>
      </View>
    </AppScreen>
  );
};

export default Detail;

const styles = StyleSheet.create({
  bookBtnBox: {
    marginVertical: ms(24),
  },
  bookBtn: {
    borderRadius: ms(20),
    paddingVertical: ms(12),
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    marginHorizontal: ms(SPACING.MD),
    marginTop: ms(SPACING.MD),
  },
  card: {
    // flex: 1,
    height: hp(360),
    borderRadius: ms(SPACING.MD),
  },
  description: {},
  flexRow: {
    flexDirection: 'row',
  },
  infoComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: ms(SPACING.XL),
  },
  infoBox: {
    marginVertical: ms(20),
  },
  infoText: {
    marginLeft: ms(SPACING.SM),
    fontWeight: '600',
  },
  optionBtn: {
    width: wp(70),
    paddingHorizontal: ms(1),
    marginRight: ms(SPACING.SM),
  },
  optionBtnBox: {
    flexDirection: 'row',
    marginTop: ms(SPACING.MD),
  },
  optionBtnText: {
    fontSize: ms(FONT_SIZE.MD),
  },
});
