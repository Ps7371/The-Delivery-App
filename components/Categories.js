import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanity";
import CatCard from "./CatCard";


const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=="category"]
    
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  // console.log(categories);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* {Category Card} */}

{categories?.map(category => (  
          <CatCard
            key={category._id}
            title={category.name}
            imgUrl={urlFor(category.image).url()}
           
          />
        ))}


    </ScrollView>
  );
};

export default Categories;
