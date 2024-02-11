import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../utils/Colors";

import Feather from "../images/menu.png";
import Person from "../images/person.png";
import Pin from "../images/pin-icon.png";

import ActivitiesData from "../data/ActivitiesData";
import DiscoverData from "../data/DiscoverData";
import LearnMoreData from "../data/LearnMoreData";

const Home = ({ navigation }) => {
  const renderDisItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details", { item: item })}>
        <ImageBackground
          source={item.imagesmall}
          style={[styles.dis_item, { marginLeft: item.id === 1 ? 20 : 0 }]}
          imageStyle={styles.dis_item_image}
        >
          <Text style={styles.dis_item_title}>{item.title}</Text>
          <View style={styles.dis_item_loc_wrapper}>
            <Image source={Pin} style={{ width: 18, height: 20 }} />
            <Text style={styles.dis_item_loc_text}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActItem = ({ item }) => {
    return (
      <View style={[styles.act_wrapper, { marginLeft: item.id === 1 ? 20 : 5 }]}>
        <Image source={item.icon} style={styles.act_image} />
        <Text style={styles.act_text}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnItem = ({ item }) => {
    return (
      <ImageBackground
        source={item.image}
        style={[styles.learn_wrapper, { marginLeft: item.id === 1 ? 20 : 0 }]}
        imageStyle={styles.learn_image_wrapper}
      >
        <Text style={styles.learn_text}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="dark" />
      <ScrollView>
        <View style={styles.header}>
          <Image source={Feather} style={styles.menu} />
          <Image source={Person} style={styles.person} />
        </View>

        <View style={styles.dis_wrapper}>
          <Text style={styles.dis_title}>Discover</Text>
          <View style={styles.dis_cat_wrapper}>
            <Text style={[styles.dis_cat_text, { color: Colors.orange }]}>All</Text>
            <Text style={styles.dis_cat_text}>Destinations</Text>
            <Text style={styles.dis_cat_text}>Cities</Text>
            <Text style={styles.dis_cat_text}>Experiences</Text>
          </View>
        </View>

        <View style={styles.dis_item_wrapper}>
          <FlatList
            data={DiscoverData}
            renderItem={renderDisItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text style={styles.act_title}>Activities</Text>
          <FlatList
            data={ActivitiesData}
            renderItem={renderActItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text style={styles.learn_title}>Learn more</Text>
          <FlatList
            data={LearnMoreData}
            renderItem={renderLearnItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 20 : 40,
    marginHorizontal: 20,
  },
  menu: {
    width: 20,
    height: 20,
  },
  person: {
    borderRadius: 10,
    width: 52,
    height: 52,
  },
  dis_wrapper: {
    marginTop: 20,
  },
  dis_title: {
    marginHorizontal: 20,
    fontSize: 32,
    fontFamily: "LatoBold",
  },
  dis_cat_wrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  dis_cat_text: {
    color: Colors.darkgrey,
    marginRight: 30,
    fontSize: 16,
    fontFamily: "LatoRegular",
  },
  dis_item_wrapper: {
    paddingVertical: 20,
  },
  dis_item: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  dis_item_image: {
    borderRadius: 20,
  },
  dis_item_title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: "LatoBold",
  },
  dis_item_loc_wrapper: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  dis_item_loc_text: {
    marginLeft: 5,
    color: Colors.white,
    fontSize: 14,
    fontFamily: "LatoRegular",
  },
  act_title: {
    marginLeft: 20,
    fontSize: 22,
    fontFamily: "LatoBold",
  },
  act_wrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  act_image: {
    maxWidth: 40,
    maxHeight: 40,
  },
  act_text: {
    marginTop: 5,
    fontFamily: "LatoRegular",
  },
  learn_title: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "LatoBold",
  },
  learn_wrapper: {
    width: 160,
    height: 160,
    justifyContent: "flex-end",
    marginRight: 20,
    marginVertical: 10,
  },
  learn_image_wrapper: {
    borderRadius: 20,
  },
  learn_text: {
    marginLeft: 10,
    marginBottom: 10,
    color: Colors.white,
    fontFamily: "LatoRegular",
  },
});

export default Home;
