import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation(); // hook gives access to navigation object
  const [flexDirection, setflexDirection] = useState("column");

  useLayoutEffect(() => {
    // acts on initial mount
    navigation.setOptions({
      // modify default details
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4  rounded-full"
          />

          <View className="flex-1">
            {/* flex is supposed to take up all the space, hence pushing UserIcon to the right */}
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon
            size={35}
            color="#00CCBB"
            className="items-end text-right"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
