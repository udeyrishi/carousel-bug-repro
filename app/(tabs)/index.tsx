import { View, Text, LayoutChangeEvent } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Carousel, { CarouselRenderItem } from "react-native-reanimated-carousel";
import { useCallback } from "react";

const DATA = ["hello", "carousel"];

const renderItem: CarouselRenderItem<string> = ({ item }) => {
  return (
    <View style={{ width: 500, height: 100, backgroundColor: "yellow" }}>
      <Text>{item}</Text>
    </View>
  );
};

export default function HomeScreen() {
  const onLayout = useCallback((event: LayoutChangeEvent) => {
    // This should've been 100, but is actually 0
    const measuredHeightOfCarousel = event.nativeEvent.layout.height;
    console.log({
      measuredHeightOfCarousel,
    });
  }, []);

  return (
    <View
      style={{
        paddingTop: 48,
      }}
    >
      <View onLayout={onLayout}>
        <Carousel
          width={500}
          height={100}
          data={DATA}
          renderItem={renderItem}
        />
      </View>
      <Text>
        Expected text after carousel, but is overlapping carousel content
      </Text>
    </View>
  );
}
