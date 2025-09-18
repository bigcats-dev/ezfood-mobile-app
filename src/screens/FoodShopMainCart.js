import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { Appbar, Card, Text, Avatar , Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function FoodShopMainCart({ navigation }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState("เลือกที่อยู่สำหรับจัดส่ง");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // ตัวอย่าง: จำนวนรายการและราคาคงที่
  const [cartItems, setCartItems] = useState(1);
  const [cartTotal, setCartTotal] = useState(100);

  const foods = [
    {
      id: 1,
      title: "ก๋วยเตี๋ยวต้มยำโบราณ",
      price: 149,
      img: "https://img.wongnai.com/p/800x0/2023/05/14/9bc0cf5706a5450cb7e5b5d905138511.jpg",
      tag: "ยอดสั่งเยอะที่สุด",
    },
    {
      id: 2,
      title: "เกาเหลาต้มยำโบราณ",
      price: 139,
      img: "https://img.wongnai.com/p/1920x0/2024/01/10/84965fd1b0bc4823b80fe58b1d81bad3.jpg",
      tag: "ยอดสั่งเยอะที่สุด",
    },
    {
      id: 3,
      title: "มาม่าผัดขี้เมา",
      price: 149,
      img: "https://img.wongnai.com/p/1920x0/2025/07/19/a9aaf599083147fd88c05adb7dae7637.jpg",
    },
    {
      id: 4,
      title: "ก๋วยเตี๋ยวน้ำใส",
      price: 211,
      oldPrice: 234,
      img: "https://img.wongnai.com/p/1920x0/2024/05/18/bcd2f0313bb7440a86e18b67cae4b9b4.jpg",
    },
    {
      id: 5,
      title: "เกาเหลาน้ำใส",
      price: 169,
      img: "https://img.wongnai.com/p/1920x0/2024/05/18/bcd2f0313bb7440a86e18b67cae4b9b4.jpg",
      tag: "สูตรต้นตำรับเชียงใหม่",
    },
    {
      id: 6,
      title: "ผัดกระเพรา",
      price: 129,
      img: "https://img.wongnai.com/p/1920x0/2025/07/17/005746673c5949cd91865f5668d9d0c4.jpg",
      tag: "เมนูแนะนำ",
    },
    {
      id: 7,
      title: "ข้าวไข่เจียว",
      price: 119,
      img: "https://img.wongnai.com/p/1920x0/2025/07/17/726aa8ff9fc242bab0f75f41fbf06ce1.jpg",
    },
    {
      id: 8,
      title: "ข้าวหมูทอดกระเทียม",
      price: 159,
      img: "https://img.wongnai.com/p/1920x0/2025/07/17/03302e8777724d11944dba1a0a9c1d42.jpg",
    },
    {
      id: 9,
      title: "ลูกชิ้นเนื้อปิ้ง",
      price: 89,
      img: "https://img.wongnai.com/p/1920x0/2025/07/17/c456ab44108d4c109910294498292e67.jpg",
      tag: "คุ้มค่า",
    },
    {
      id: 10,
      title: "เฉาก๊วย",
      price: 99,
      img: "https://img.wongnai.com/p/1920x0/2025/07/30/b6d95dc4c0f5412c91c43622f618efce.jpg",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("FoodSelectMenu", { item })}
      activeOpacity={0.9}
    >
      <Card style={{ flex: 1, margin: 8, borderRadius: 12, backgroundColor: "#ffffff" , shadowColor: "white" }}>
        <View>
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
          <Text style={{ fontSize: 14, color: "black" }}>{item.title}</Text>
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
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity onPress={showModal} style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#1E874B", fontWeight: "bold", fontSize: 16 }}>
              {selectedAddress}
            </Text>
            <Icon name="keyboard-arrow-down" size={18} color="gray" />
          </View>
        </TouchableOpacity>

        <Avatar.Image size={36} source={{ uri: "https://i.pravatar.cc/300" }} />
      </Appbar.Header>

      <Text variant="titleMedium" style={styles.titleMfood}>
        ก๋วยเตี๋ยวไทยโบราณแม่พลอย x
      </Text>
      <Text variant="titleMedium" style={styles.subMfood}>
        หมวดหมู่ยอดนิยม
      </Text>

      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 8, paddingBottom: 80 }} // เพิ่ม paddingBottom ให้ไม่ถูก Footer ทับ
      />

   
      <Button
        mode="contained"
        onPress={() => navigation.navigate('FoodCheckOut')}
        contentStyle={{ padding: 0 }}  
        style={styles.btnCheck}
      >
        <View style={{ 
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 20
        }}>
          {/* ซ้าย: ไอคอน + จำนวนรายการ */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="shopping-cart" size={20} color="white" />
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginRight: 80 }}>
              2 รายการ
            </Text>
          </View>

          {/* ขวา: ราคา */}
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" , marginLeft: 80 }}>
            100 ฿
          </Text>
        </View>
      </Button>






    </View>
  );
}
