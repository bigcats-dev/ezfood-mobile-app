import * as React from "react";
import { View, Image, TextInput } from "react-native";
import { Appbar, Text, Button, Portal, Modal } from "react-native-paper";

export default function ReviewScreen({ navigation }) {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  // ข้อมูล mock ร้าน
  const order = {
    title: "ก๋วยเตี๋ยวเรือรสเด็ด บางนา",
    image: "https://img.kapook.com/fileupload_instant/images/food9.jpg",
  };

  const handleSubmit = () => {
    console.log("⭐ คะแนน:", rating);
    console.log("💬 รีวิว:", comment);
 
    setVisible(true);
 
    setTimeout(() => {
      setVisible(false);
      navigation.navigate("OrderHistory");
    }, 3000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FBFF", padding: 16 }}>
      <Appbar.Header style={{ backgroundColor: "#F9FBFF", elevation: 0 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="รีวิวร้านอาหาร"
          color="#1E874B"
          titleStyle={{ textAlign: "center", fontWeight: "bold" }}
        />
      </Appbar.Header>

      {/* เนื้อหา */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={{ uri: order.image }}
          style={{ width: 120, height: 120, borderRadius: 16, marginBottom: 12 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>{order.title}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Text key={star} style={{ fontSize: 28, marginHorizontal: 4 }}>
            ⭐
          </Text>
        ))}
      </View>

      <TextInput
        placeholder="พิมพ์รีวิวของคุณ..."
        multiline
        numberOfLines={5}
        value={comment}
        onChangeText={setComment}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#E0E0E0",
          textAlignVertical: "top",
          fontSize: 15,
          color: "#333",
        }}
      />

      <Button
        mode="contained"
        buttonColor="#1E874B"
        textColor="#fff"
        style={{ marginTop: 28, borderRadius: 12, paddingVertical: 6 }}
        onPress={handleSubmit}
      >
        ส่งรีวิว
      </Button>

      {/* Modal ขอบคุณ */}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={{
            backgroundColor: "#fff",
            padding: 24,
            marginHorizontal: 32,
            borderRadius: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 , color: "#000"}}>
            ขอบคุณสำหรับการให้คะแนน 
          </Text>
          <Text style={{ color: "#888" }}>คุณจะกลับไปยังหน้าประวัติสั่งซื้อ</Text>
        </Modal>
      </Portal>
    </View>
  );
}
