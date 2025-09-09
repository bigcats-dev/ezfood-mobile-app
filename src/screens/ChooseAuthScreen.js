import React from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from '../styles/style';

export default function ChooseAuthScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F7FAFC",
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 120, height: 120, borderRadius: 24 }}
          resizeMode="contain"
        />
        <Text
          variant="headlineMedium"
          style={{ fontWeight: "bold", color: "#0F2D52" }}
        >
          EZ Food
        </Text> 
      </View>
 
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Login")}
        style={{ marginBottom: 12, backgroundColor: "#1E874B", marginTop: 50 }}
        contentStyle={{ paddingVertical: 6, height: 60 }} 
        labelStyle={styles.buttonLabel1}
      >
        เข้าสู่ระบบ
      </Button>
 
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Register")}
        style={{ borderColor: "#1E874B" }}
        textColor="#1E874B"
        contentStyle={{ paddingVertical: 6, height: 60 }} 
        labelStyle={styles.buttonLabel2}
      >
        สมัครใช้งาน
      </Button>
    </View>
  );
}
