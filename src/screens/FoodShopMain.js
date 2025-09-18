import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { Provider as PaperProvider, Appbar, Card, Text, Avatar, Portal, Modal, List, IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function FoodShopMain({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = useState(0);

  const [visible, setVisible] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState("เลือกที่อยู่สำหรับจัดส่ง");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 12,
  };

  const addresses = [
    "บ้าน - 123/45 ถนนพระราม 9",
    "ที่ทำงาน - ชั้น 10 อาคาร A",
    "คอนโด - ซอยสุขุมวิท 39",
  ]; 
  const foods = [
    {
      id: 1,
      title: "ขนมจีนน้ำเงี้ยว สูตรเมืองแป้",
      price: 149,
      img: "https://img.wongnai.com/p/1920x0/2018/11/04/3ceccd73b8574f6da21e37203f62e714.jpg",
      tag: "ยอดสั่งเยอะที่สุด",
    },
    {
      id: 2,
      title: "ลาบคั่วเหนือ",
      price: 139,
      img: "https://ikasalong.com/wp-content/uploads/2020/04/larb-moo-700.jpg",
      tag: "ยอดสั่งเยอะที่สุด",
    },
    {
      id: 3,
      title: "ขนมจีนน้ำใส (แถม! น้ำพริกน้ำย้อย)",
      price: 149,
      img: "https://many-menu.com/wp-content/uploads/2022/01/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%83%E0%B8%AA.jpg",
    },
    {
      id: 4,
      title: "Lanna Bites Set - ไส้อั่ว + น้ำพริกหนุ่ม",
      price: 211,
      oldPrice: 234,
      img: "https://i.ytimg.com/vi/TIG7MTh9eO8/hq720.jpg",
    },
    {
      id: 5,
      title: "แกงฮังเลหมูสามชั้น",
      price: 169,
      img: "https://img.wongnai.com/p/1968x0/2019/12/11/ec1eba7be70644c7b2bf812461e4bb80.jpg",
      tag: "สูตรต้นตำรับเชียงใหม่",
    },
    {
      id: 6,
      title: "ข้าวซอยไก่",
      price: 129,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6FI87-FL9x_85beRIzc9xNrC0BIet5RriA&s",
      tag: "เมนูแนะนำ",
    },
    {
      id: 7,
      title: "น้ำพริกอ่อง + ชุดผักเคียง",
      price: 119,
      img: "https://img.kapook.com/u/2016/surauch/cook1/ong5.jpg",
    },
    {
      id: 8,
      title: "แหนมซี่โครงหมูทอดกระเทียม",
      price: 159,
      img: "https://i.ytimg.com/vi/HLd1W_8o-oA/maxresdefault.jpg",
    },
    {
      id: 9,
      title: "หมูทอดเชียงราย + ข้าวเหนียว",
      price: 89,
      img: "https://i.ytimg.com/vi/fj-GcsZiK4o/maxresdefault.jpg",
      tag: "คุ้มค่า",
    },
    {
      id: 10,
      title: "แกงผักเหนือใส่ถั่วเน่า",
      price: 99,
      img: "https://i.ytimg.com/vi/Mn5vLbL88OY/hq720.jpg",
    },
  ];

  

 
  const renderItem = ({ item }) => (
    <Card style={{ flex: 1, margin: 8, borderRadius: 12, backgroundColor: "#ffffff" , shadowColor:"white" }}>
      <View >
        <Image
          source={{ uri: item.img }}
          style={{
            height: 140,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
 
        {item.tag && (
          <View
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              backgroundColor: "green",
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>{item.tag}</Text>
          </View>
        )}

        {/* ปุ่ม + */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 4,
          }}
        >
          <Icon name="add" size={20} color="green" />
        </TouchableOpacity>
      </View>

      <Card.Content style={{ padding: 8 }}>
        <Text style={{ fontSize: 14 , color: "black" }}>{item.title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>
            ฿{item.price}
          </Text>
          {item.oldPrice && (
            <Text
              style={{
                marginLeft: 6,
                textDecorationLine: "line-through",
                color: "red",
                fontSize: 12,
              }}
            >
              ฿{item.oldPrice}
            </Text>
          )}
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <PaperProvider>
      <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
        {/* Header */}
        <Appbar.Header style={{ backgroundColor: "white" }}>
           
          <Appbar.Action 
            icon="arrow-left" 
            onPress={() => navigation.navigate("FoodHome")} 
          />

          {/* Center Title */}
          <TouchableOpacity onPress={showModal} style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#1E874B", fontWeight: "bold", fontSize: 16 }}>
                {selectedAddress}
              </Text>
              <Icon name="keyboard-arrow-down" size={18} color="gray" />
            </View>
          </TouchableOpacity>

          {/* Avatar */}
          <Avatar.Image
            size={36}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </Appbar.Header>
        <Text variant="titleMedium" style={styles.titleMfood}>
          ร้านคนแป้ อาหารเหนือ
        </Text> 
 
        <FlatList
          data={foods}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ padding: 8 }} 
          ListHeaderComponent={
            <>
              <Text style={styles.subMfood}>หมวดหมู่ยอดนิยม</Text>
            </>
          }
          ListFooterComponent={
            <>
              <Text style={styles.subMfood}>xxxxxxxx</Text>
            </>
          }
        />

       
        
      </View>
    </PaperProvider>
  );
}
