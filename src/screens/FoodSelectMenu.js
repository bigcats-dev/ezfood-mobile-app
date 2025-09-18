import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, RadioButton, Checkbox, TextInput, Button, Divider } from "react-native-paper";

export default function FoodSelectMenu({ navigation, route }) {
  const item = route.params?.item || { title: "เกาเหลา", price: 80 };

  const [sweetness, setSweetness] = useState("normal"); // เลือก 1
  const [meat, setMeat] = useState([]); // เลือกหลายอันได้
  const [note, setNote] = useState("");

  const toggleMeat = (value) => {
    if (meat.includes(value)) {
      setMeat(meat.filter((m) => m !== value));
    } else {
      setMeat([...meat, value]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <Appbar.Header>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.title} titleStyle={{ fontWeight: "bold" }} />
        <Appbar.Action icon="share-variant" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* เพิ่มความหวาน */}
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
          เพิ่มความหวาน
        </Text>

        <RadioButton.Group onValueChange={(v) => setSweetness(v)} value={sweetness}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton value="normal" />
            <Text style={{ fontSize: 16 }}>ธรรมดา</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton value="special" />
            <Text style={{ fontSize: 16 }}>พิเศษ (+20)</Text>
          </View>
        </RadioButton.Group> 
        
        <Divider style={{ marginVertical: 12 }} />

        {/* ประเภทหมู */}
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>ประเภทหมู</Text>
        <Checkbox.Item
          label="ลูกชิ้นล้วน"
          status={meat.includes("meatball") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("meatball")}
        />
        <Checkbox.Item
          label="หมูสด ✨🐷"
          status={meat.includes("fresh") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("fresh")}
        />
        <Checkbox.Item
          label="หมูตุ๋น ✨🐷"
          status={meat.includes("stew") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("stew")}
        />

        <Divider style={{ marginVertical: 12 }} />

        {/* หมายเหตุ */}
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>หมายเหตุถึงร้านอาหาร</Text>
        <TextInput
          mode="outlined"
          placeholder="ระบุรายละเอียดคำขอ เช่น ไม่ใส่ผัก"
          value={note}
          onChangeText={setNote}
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Footer */}
      <View style={{ padding: 16, borderTopWidth: 1, borderColor: "#eee" }}>
        <Button
          mode="contained"
          buttonColor="#1E874B"
          onPress={() => console.log("เพิ่มไปตะกร้า")}
        >
          เพิ่มไปยังตะกร้า - ฿{item.price}
        </Button>
      </View>
    </View>
  );
}
