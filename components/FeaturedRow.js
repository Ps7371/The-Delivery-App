import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import sanityClient from "../sanity";
import Reschur from "./RestaurantCards";

const FeaturedRow = ({ id, title, description }) => {
  const [restraunts, setRestraunts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=="featured" && _id==$id]{
      ...,
      restraunts[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestraunts(data.restraunts);
      });
  }, []);

  // console.log(restraunts);
  // console.log(id);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          //inner scroll view
          paddingHorizontal: 15,
        }}
        //outer scroll view
        showHorizontalScrollIndicator={false}
        className="pt-4"
      >


       {restraunts?.map(restraunt => (
          <Reschur
            key={restraunt._id}
            id={restraunt._id}
            imgUrl={restraunt.image}
            title={restraunt.name}
            rating={restraunt.rating}
            genre={restraunt.type?.name}
            address={restraunt.address}
            short_description={restraunt.short_description}
            dishes={restraunt.dishes}
            long={restraunt.long}
            lat={restraunt.lat}
          />
        ))}
     

   
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
