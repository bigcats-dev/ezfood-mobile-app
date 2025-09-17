import React, { useState } from 'react';
import { View, ScrollView, Image , TouchableOpacity } from "react-native";
import {
  Provider as PaperProvider, Appbar, Searchbar, Card, Text, Button, Avatar, IconButton  } from "react-native-paper"; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style'; 

export default function FoodHome() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState(0); // <-- move state here

  const categories = [
    { name: "Noodles", icon: "noodles" },
    { name: "Turkey", icon: "food-turkey" },
    { name: "Pizza", icon: "pizza" },
    { name: "Ice Cream", icon: "ice-cream" },
    { name: "Noodles", icon: "noodles" },
    { name: "Turkey", icon: "food-turkey" },
    { name: "Pizza", icon: "pizza" },
    { name: "Ice Cream", icon: "ice-cream" },
  ];
  return (
    <PaperProvider>
      <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
        {/* Header */}
        <Appbar.Header style={{ backgroundColor: "white" }}>
          <Appbar.Action icon="menu" />
          <Appbar.Content title="เลือกที่อยู่" titleStyle={styles.title} />
          <Avatar.Image size={36} source={{ uri: "https://i.pravatar.cc/300" }} />
        </Appbar.Header>

        {/* Search */}
        <View style={{ padding: 10 }}>
          <Searchbar
            placeholder="ใส่ชื่ออาหาร หรือ ร้านอาหาร"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>

        {/* เมนูแนะนำ */}
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <Text variant="titleMedium" style={styles.title}>
            เมนูแนะนำ
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {
                location: "ร้านก๋วยเตี๋ยวแม่ลา",
                title: "ก๋วยเตี๋ยวเนื้อเปื่อย",
                price: 50,
                oldPrice: 70,
                img: "https://cookinghub.in.th/wp-content/uploads/2024/12/%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%95%E0%B8%B8%E0%B9%8B%E0%B8%99.jpg",
              },
              {
                location: "ร้านฉัตรขัยไก่ตอน",
                title: "ข้าวมันไก่ตอน",
                price: 50,
                oldPrice: 70,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-d7dREu3kPAtcIJlJetioyu2p1stVeFUX0Q&s",
              },
              {
                location: "กระเพราขั้นเทพ",
                title: "กระเพราหมูสับ",
                price: 50,
                oldPrice: 70,
                img: "https://s.isanook.com/wo/0/ud/36/180929/f.jpg?ip/crop/w670h402/q80/jpg",
              },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("FoodDetails", { food: item })}
              >
                <Card key={index} style={styles.mCard}>
                  <Card.Cover source={{ uri: item.img }} />
                  <Card.Content> 
                    <View style={styles.viewCardFo}>
                      <Icon source="map-marker" size={18} color="gray" />
                      <Text variant="titleSmall" style={styles.foodTextMal} >{item.location}</Text>
                    </View>
                    <Text variant="titleSmall" style={styles.dayText}>{item.title}</Text> 
                    <Text style={{ color: "#1E874B" ,fontWeight: 'bold' }}>
                      ฿{item.price}{" "}
                      <Text style={{ textDecorationLine: "line-through", color: "gray" }}>
                        ฿{item.oldPrice}
                      </Text>
                    </Text>
                    <Text variant="bodySmall" style={styles.foodTextMal}>23 Min</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* หมวดหมู่ยอดนิยม */}
        <View style={{ marginTop: 20 }}>
          <Text variant="titleMedium" style={styles.titleFood}>
            หมวดหมู่ยอดนิยม
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
            {categories.map((cat, i) => (
              <View key={i} style={{ alignItems: "center", marginHorizontal: 5 }}>
                <IconButton
                  icon={cat.icon}
                  size={36}
                  onPress={() => setActiveCategory(i)} // กดแล้ว active จะเปลี่ยน
                  style={{
                    backgroundColor: i === activeCategory ? "#1E874B" : "white",
                  }}
                  iconColor={i === activeCategory ? "white" : "gray"}
                />
                <Text style={{ color: i === activeCategory ? "#1E874B" : "gray", marginTop: -5 }}>
                  {cat.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ยอดนิยม */}
        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Text variant="titleMedium" style={styles.titleFood}>
            ร้านยอดนิยม
          </Text>
          {[
            {
              title: "Cafe บ้านเพื่อน",
              price: "20.59",
              oldPrice: "31.00",
              img: "https://img.kapook.com/u/2016/surauch/cook1/b_3.jpg",
            },
            {
              title: "ชาไทยในตำนาน",
              price: "20.59",
              oldPrice: "31.00",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKr6UYPFioFAEbGgwqv7kWzbpLScfVb8ToQ&s",
            },
            {
              title: "ต้มสั่งตำนานใจ",
              price: "20.59",
              oldPrice: "31.00",
              img: "https://shellshuanshim.com/webimages/blogs/6-recommend-a-la-carte/blog-teaser-m.jpg?sfvrsn=512919c4_2",
            },
          ].map((item, index) => (
            <Card key={index} style={{ marginBottom: 15 }}>
              <Card.Cover source={{ uri: item.img }} />
              <Card.Content>
                <Text variant="titleSmall">{item.title}</Text>
                <Text style={{ color: "red" }}> 
                </Text>
                <Text variant="bodySmall">23 Min</Text>
              </Card.Content>
              <Card.Actions>
                <Button icon="cart" mode="contained" buttonColor="red" style={styles.buttonNumFood} labelStyle={styles.buttonLabel}>
                  สั่ง
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
