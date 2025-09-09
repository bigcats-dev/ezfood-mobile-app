import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import styles from '../styles/style';

export default function OtpScreenLogin({ navigation }) {
  const [phone, setPhone] = React.useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS ใช้ padding, Android ใช้ height
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>ยืนยัน OTP</Text>

              <Text style={styles.label}>
                OTP <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                placeholder="กรอก OTP"
                value={phone}
                onChangeText={setPhone}
                mode="flat"
                underlineColor="#1E874B"
                activeUnderlineColor="#1E874B"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            <Button
              mode="contained"
              onPress={() => navigation.navigate('FoodHome')}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              ยืนยัน
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
