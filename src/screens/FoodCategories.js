import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Provider as PaperProvider, Appbar, Searchbar, Card, Text, Avatar , Portal , Modal , List} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

// ✅ รับ navigation ผ่าน props
export default function FoodCategories({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { name: "ก๋วยเตี๋ยว", img: "https://kin-keng.com/wp-content/uploads/2024/03/%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD-1024x1024.jpg" },
    { name: "ปิ้งย่าง", img: "https://image.makewebeasy.net/makeweb/m_1920x0/Ommd4Syoj/DefaultData/87555044_s__1_.jpg" },
    { name: "อาหารตามสั่ง", img: "https://mind.news.blog/wp-content/uploads/2019/02/shutterstock_585496844.jpg" },
    { name: "เครื่องดื่ม", img: "https://s359.kapook.com/rq/580/435/50/pagebuilder/0ebc15af-7ca1-4a9c-a5b2-4dc8def945ab.jpg" },
    { name: "อาหารจานด่วน", img: "https://img.kapook.com/fileupload_instant/images/food9.jpg" },
    { name: "ยำ", img: "https://i.ytimg.com/vi/-XrcwsUGmmE/hq720.jpg" },
    { name: "ซูชิ", img: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg" },
    { name: "อาหารทะเล", img: "https://www.thammachartseafood.com/cdn/shop/articles/sfm02.jpg" },
  ];

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

  return (
    <PaperProvider>
      <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
        {/* Header */}
        <Appbar.Header style={{ backgroundColor: "white" }}>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          />

          <TouchableOpacity onPress={showModal} style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#1E874B", fontWeight: "bold", fontSize: 16 }}>
                {selectedAddress}
              </Text>
              <Icon name="keyboard-arrow-down" size={18} color="gray" />
            </View>
          </TouchableOpacity>

          <Avatar.Image
            size={36}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </Appbar.Header>

        {/* Modal */}
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 ,color: "#000000" }}>
              เลือกที่อยู่สำหรับจัดส่ง
            </Text>
            {addresses.map((addr, i) => (
              <List.Item
                key={i}
                title={addr}
                left={(props) => <List.Icon {...props} icon="map-marker" />}
                onPress={() => {
                  setSelectedAddress(addr);  
                  hideModal();
                }}
                titleStyle={{ fontSize: 18 , color: "#000000" }}
              />
            ))}
            
          </Modal>
        </Portal>

 

        
 
        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Text variant="titleMedium" style={styles.titleFood}>
            หมวดหมู่ก๋วยเตี๋ยว
          </Text>

          {[
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
            {
              title: "ปุ๊เย็นตาโฟ",
              rating: 4.7,
              reviews: "3พัน+",
              delivery: "21 นาทีขึ้นไป",
              promo: "ลด 25%",
              promoDetail: "ไม่มีขั้นต่ำ",
              img: "https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg",
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("FoodShopMain")} // 👈 ไปหน้า FoodShopMain
              activeOpacity={0.8}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginBottom: 12,
                  padding: 10,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 2,
                }}
              >
                {/* รูปด้านซ้าย */}
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                  }}
                />

                {/* ข้อมูลด้านขวา */}
                <View style={{ flex: 1, marginLeft: 10, justifyContent: "space-between" }}>
                  {/* ชื่อร้าน */}
                  <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#000000" }}>
                    {item.title}
                  </Text>

                  {/* เรตติ้ง */}
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
                    <Icon name="star" size={16} color="gold" />
                    <Text style={{ marginLeft: 4 }}>
                      {item.rating} ({item.reviews})
                    </Text>
                  </View>

                  {/* เวลา + ฟรีค่าส่ง */}
                  <Text variant="bodySmall" style={{ color: "green", marginTop: 2 }}>
                    ฟรี · {item.delivery}
                  </Text>

                  {/* โปรโมชัน */}
                  <View
                    style={{
                      backgroundColor: "#E8F5E9",
                      borderRadius: 6,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      alignSelf: "flex-start",
                      marginTop: 4,
                    }}
                  >
                    <Text style={{ color: "#1E874B", fontWeight: "bold", fontSize: 12 }}>
                      {item.promo}
                    </Text>
                    <Text style={{ fontSize: 10, color: "gray" }}>{item.promoDetail}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

       

      </ScrollView>
    </PaperProvider>
  );
}
