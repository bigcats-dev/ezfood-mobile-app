import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, RadioButton, Checkbox, TextInput, Button, Divider } from "react-native-paper";
import styles from '../styles/style';

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
      <Appbar.Header style={{  backgroundColor: "#1E874B" }}>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.title} titleStyle={{ fontWeight: "bold" , fontSize: "18" }} />
        
      </Appbar.Header>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* เพิ่มความหวาน */}
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 , color: "black" }}>
          ขนาด
        </Text>

        <RadioButton.Group onValueChange={(v) => setSweetness(v)} value={sweetness}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton 
              value="normal" 
              color="green"           
              uncheckedColor="green"  
            />
            <Text style={{ fontSize: 16, color: "black" }}>ธรรมดา</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton 
              value="special" 
              color="green" 
              uncheckedColor="green" 
            />
            <Text style={{ fontSize: 16, color: "black" }}>พิเศษ (+20)</Text>
          </View>
        </RadioButton.Group>

        
        <Divider style={{ marginVertical: 12 }} />

   
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 , color: "black" }}>เลือกท็อปปิ้ง</Text>
        <Checkbox.Item
          label="ลูกชิ้น (+15)"
          labelStyle={{ color: "black" }} 
          status={meat.includes("topping1") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("topping1")}
          color="green"         
        />
        <Checkbox.Item
          label="หมูสด (+15)"
          labelStyle={{ color: "black" }} 
          status={meat.includes("topping2") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("topping2")}
          color="green"         
        />
        <Checkbox.Item
          label="หมูตุ๋น (+15)"
          labelStyle={{ color: "black" }} 
          status={meat.includes("topping3") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("topping3")}
          color="green"         
        />
        <Checkbox.Item
          label="หมูตุ๋น (+15)"
          labelStyle={{ color: "black" }} 
          status={meat.includes("topping4") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("topping4")}
          color="green"         
        />
        <Checkbox.Item
          label="ตับ (+15)"
          labelStyle={{ color: "black" }} 
          status={meat.includes("topping5") ? "checked" : "unchecked"}
          onPress={() => toggleMeat("topping5")}
          color="green"         
        />

        <Divider style={{ marginVertical: 12 }} />

        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 , color: "black"}}>
          น้ำซุป
        </Text>

 

        <RadioButton.Group onValueChange={(v) => setSweetness(v)} value={sweetness}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton 
              value="normal" 
              color="green"           
              uncheckedColor="green"  
            />
            <Text style={{ fontSize: 16, color: "black" }}>แห้ง</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton 
              value="special" 
              color="green" 
              uncheckedColor="green" 
            />
            <Text style={{ fontSize: 16, color: "black" }}>น้ำตก</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <RadioButton 
              value="special" 
              color="green" 
              uncheckedColor="green" 
            />
            <Text style={{ fontSize: 16, color: "black" }}>น้ำใส</Text>
          </View>
        </RadioButton.Group>

 
        <Divider style={{ marginVertical: 12 }} />

        {/* หมายเหตุ */}
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 , color: "black"}}>หมายเหตุถึงร้านอาหาร</Text>
        <TextInput
          mode="outlined"
          placeholder="ระบุรายละเอียดคำขอ เช่น ไม่ใส่ผัก"
          value={note}
          onChangeText={setNote}
          style={{ backgroundColor: "white" }}
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Footer */}
      <View style={{ padding: 16, borderTopWidth: 1, borderColor: "#eee" }}>
        <Button
          mode="contained"
          buttonColor="#1E874B"
          onPress={() => navigation.navigate('FoodShopMainCart')}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          เพิ่มไปยังตะกร้า - ฿{item.price}
        </Button>
      </View>
    </View>
  );
}
