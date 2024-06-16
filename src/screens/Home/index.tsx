import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppScreen} from '../../components/ui/AppScreen';
import {Header} from '../../components/ui/Header';
import {SearchInput} from '../../components/SearchInput';
import {COLORS} from '../../constants/colors';
import {useTheme} from '../../theme/ThemeContext';
import {hp, ms, useViewPort} from '../../helper/responsive';
import {BannerCard} from '../../components/BannerCard';
import {ItemSeparator} from '../../components/ui/ItemSeparator';
import {AppButton} from '../../components/ui/AppButton';
import {AppText} from '../../components/ui/AppText';
import {BANNER_DATA, CATEGORY_DATA} from '../../data';
import {CategoryCard} from '../../components/CategoryCard';
import {FONT_WEIGHT, SPACING} from '../../constants/sizes';
import {getItemLayout} from '../../helper/list/GetItemLayout';

const containerHorizontalPadding = ms(SPACING.SM);
const Home: React.FC = (): React.JSX.Element => {
  const {isDarkMode, themeColors} = useTheme();
  const {setVw} = useViewPort();

  // full banner width = full screenwidth - 2 times container padding
  const fullBannerWidth = setVw(100) - containerHorizontalPadding * 2;

  const bannerItemSeparatorWidth = 10;
  const bannerScrollWidth = fullBannerWidth + bannerItemSeparatorWidth;

  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORY_DATA[0].id,
  );

  // Category
  const onActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  // Search
  const onSearchText = (text: string) => {
    console.log(text);
  };

  return (
    <AppScreen>
      <Header />
      <View style={styles.container}>
        <SearchInput
          placeholder="Search here"
          placeholderTextColor={themeColors.neutral}
          onChangeText={onSearchText}
          style={styles.search}
        />
        <View>
          {/* BANNER SECTION */}
          <FlatList
            data={BANNER_DATA}
            renderItem={({item}) => (
              <BannerCard
                item={item}
                style={[styles.banner, {width: fullBannerWidth}]}
              />
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
              <ItemSeparator width={bannerItemSeparatorWidth} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={bannerScrollWidth}
            snapToAlignment="center"
            decelerationRate="fast"
            bounces={false}
            getItemLayout={(data, index) =>
              getItemLayout(bannerScrollWidth, index)
            }
          />
          {/* INFO SECTION */}
          <View style={styles.middle}>
            <AppText
              style={[
                styles.popularText,
                {color: isDarkMode ? themeColors.text : COLORS.BLACK},
              ]}>
              All Popular
            </AppText>
            <AppButton title="View all" variant="transparent" />
          </View>
          {/* CATEGORY SECTION */}
          <View>
            <FlatList
              data={CATEGORY_DATA}
              renderItem={({item}) => (
                <CategoryCard
                  item={item}
                  activeCategory={activeCategory}
                  onPress={() => onActiveCategory(item.id)}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <ItemSeparator width={ms(2)} />}
              horizontal
            />
          </View>
          {/* CARD SECTION */}
          <View></View>
        </View>
      </View>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingHorizontal: containerHorizontalPadding,
    // backgroundColor: 'red',
  },
  search: {
    marginVertical: ms(SPACING.MD),
  },
  banner: {
    height: hp(125),
    // width: wp(326),
    borderRadius: SPACING.MD,
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ms(SPACING.MD),
  },
  popularText: {
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
