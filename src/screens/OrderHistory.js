import * as React from "react";
import { View, FlatList, Image } from "react-native";
import { Appbar, Text, Button, Divider } from "react-native-paper";

const orders = [
  {
    id: "1",
    title: "ก๋วยเตี๋ยวเรือรสเด็ด บางนา",
    date: "12 สิงหาคม 2568 11:30",
    status: "สำเร็จ",
    image: "https://img.kapook.com/fileupload_instant/images/food9.jpg",
  },
  {
    id: "2",
    title: "ก๋วยเตี๋ยวไห่หน่าประมง",
    date: "12 สิงหาคม 2568 11:30",
    status: "ยกเลิก",
    image: "https://img.kapook.com/fileupload_instant/images/food9.jpg",
  },
  {
    id: "3",
    title: "Cafe บ้านเพื่อน",
    date: "12 สิงหาคม 2568 11:30",
    status: "สำเร็จ",
    image: "https://img.kapook.com/fileupload_instant/images/food9.jpg",
  },
  {
    id: "4",
    title: "บิ๊ก เบอร์เกอร์",
    date: "12 สิงหาคม 2568 11:30",
    status: "สำเร็จ",
    image: "https://img.kapook.com/fileupload_instant/images/food9.jpg",
  },
];

export default function OrderHistory({ navigation }) {
  const handleReorder = (item) => {
    console.log("🔁 สั่งใหม่:", item.title); 
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", paddingVertical: 12 }}> 
      <Image
        source={{ uri: item.image }}
        style={{ width: 80, height: 80, borderRadius: 8 }}
      />
 
      <View style={{ flex: 1, marginLeft: 12, justifyContent: "space-between" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>{item.title}</Text>
        <Text style={{ color: "#999", marginTop: 4 }}>📅 {item.date}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Text
            style={{
              color: item.status === "สำเร็จ" ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {item.status}
          </Text>

          {/* ปุ่มเฉพาะออเดอร์ที่สำเร็จ */}
          {item.status === "สำเร็จ" && (
            <View style={{ flexDirection: "row", gap: 6 }}>
              <Button
                mode="contained"
                buttonColor="#FFD700"
                textColor="#000"
                style={{ borderRadius: 8 }}
                onPress={() => navigation.navigate("ReviewScreen", { order: item })}
              >
                ให้คะแนน
              </Button>

              <Button
                mode="contained"
                buttonColor="#1E874B"
                textColor="#fff"
                style={{ borderRadius: 8 }}
                onPress={() => handleReorder(item)}
              >
                สั่งใหม่
              </Button>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FBFF" }}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#F9FBFF", elevation: 0 }}> 
        <Appbar.BackAction onPress={() => navigation.navigate("FoodHome")} />

        <Appbar.Content
          title="ประวัติสั่งซื้อ"
          color="#1E874B"
          titleStyle={{ textAlign: "center", fontWeight: "bold" }}
        />
      </Appbar.Header>

      {/* List */}
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View>
            {renderItem({ item })}
            <Divider style={{ marginVertical: 4 }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
}
