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
import {BANNER_DATA, CATEGORY_DATA, HOME_CARD_DATA} from '../../data';
import {CategoryCard} from '../../components/CategoryCard';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/sizes';
import {getItemLayout} from '../../helper/list/GetItemLayout';
import {HomeCard} from '../../components/HomeCard';

const containerHorizontalPadding = ms(SPACING.SM);
const Home: React.FC = (): React.JSX.Element => {
  const {isDarkMode, themeColors} = useTheme();
  const {setVw} = useViewPort();

  // full banner width = full screenwidth - 2 times container padding
  const fullBannerWidth = setVw(100) - containerHorizontalPadding * 2;

  const bannerItemSeparatorWidth = 10;
  const bannerScrollWidth = fullBannerWidth + bannerItemSeparatorWidth;

  // card width = card width - 2 times container padding
  const CardWidth = setVw(75) - containerHorizontalPadding * 2;

  const cardItemSeparatorWidth = 15;
  const cardScrollWidth = CardWidth + cardItemSeparatorWidth;

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
          <View style={styles.info}>
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
        </View>
        {/* CARD SECTION */}
        <View style={styles.cardList}>
          <FlatList
            data={HOME_CARD_DATA}
            renderItem={({item}) => (
              <HomeCard item={item} style={[styles.card, {width: CardWidth}]} />
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
              <ItemSeparator width={cardItemSeparatorWidth} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardScrollWidth}
            snapToAlignment="center"
            decelerationRate="fast"
            // bounces={false}
            getItemLayout={(data, index) =>
              getItemLayout(cardScrollWidth, index)
            }
          />
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
  banner: {
    height: hp(125),
    // width: wp(326),
    borderRadius: SPACING.MD,
  },
  cardList: {
    flex: 0.9,
    marginTop: ms(SPACING.MD),
    // backgroundColor: 'red',
  },
  card: {
    // flex: 1,
    height: '100%',
    // width: wp(326),
    borderRadius: SPACING.MD,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: ms(SPACING.MD),
    // backgroundColor: 'red',
  },
  popularText: {
    fontSize: ms(19),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  search: {
    marginVertical: ms(SPACING.MD),
  },
});
