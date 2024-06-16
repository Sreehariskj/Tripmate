import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppScreen} from '../../components/ui/AppScreen';
import {Header} from '../../components/ui/Header';
import {SearchInput} from '../../components/SearchInput';
import {COLORS} from '../../constants/colors';
import {useTheme} from '../../theme/ThemeContext';
import {hp, ms, wp} from '../../helper/responsive';
import BannerCard from '../../components/BannerCard';
import {ItemSeparator} from '../../components/ui/ItemSeparator';
import {AppButton} from '../../components/ui/AppButton';
import {AppText} from '../../components/ui/AppText';
import {BANNERDATA, CATEGORYDATA} from '../../data';
import {CategoryCard} from '../../components/CategoryCard';
import {FONT_WEIGHT, SPACING} from '../../constants/sizes';

const Home: React.FC = (): React.JSX.Element => {
  const {isDarkMode, themeColors} = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORYDATA[0].id,
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
            data={BANNERDATA}
            renderItem={({item}) => (
              <BannerCard item={item} style={styles.banner} />
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator width={10} />}
            horizontal
            pagingEnabled
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
              data={CATEGORYDATA}
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
    paddingHorizontal: ms(SPACING.SM),
    // backgroundColor: 'red',
  },
  search: {
    marginVertical: ms(SPACING.MD),
  },
  banner: {
    height: hp(125),
    width: wp(326),
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
