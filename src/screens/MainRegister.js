import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, Provider } from 'react-native-paper';
import styles from '../styles/style'; 

export default function MainRegister({ navigation }) {
  const [EmailName, setEmailName] = React.useState('');
  const [FisrtName, setFisrtName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [Password1, setPassword1] = React.useState(''); 
  const [Password2, setPassword2] = React.useState(''); 
 

  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>ลงทะเบียนเข้าใช้งาน</Text>
 

        
          <Text style={styles.label}>
            ชื่อ <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="กรอกชื่อ"
            value={FisrtName}
            onChangeText={setFisrtName}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />
          <Text style={styles.label}>
            นามสกุล <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="กรอกนามสกุล"
            value={LastName}
            onChangeText={setLastName}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />
          <Text style={styles.label}>
            อีเมล <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="กรอกอีเมล"
            value={EmailName}
            onChangeText={setEmailName}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />
          <Text style={styles.label}>
            สร้างรหัสผ่าน <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="สร้างรหัสผ่าน"
            value={Password1}
            onChangeText={setPassword1}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />
          <Text style={styles.label}>
            ยืนยันรหัสผ่าน <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            placeholder="ยืนยันรหัสผ่าน"
            value={Password2}
            onChangeText={setPassword2}
            mode="flat"
            underlineColor="#1E874B"
            activeUnderlineColor="#1E874B"
            style={[styles.input]}
          />
 

        
        
        </ScrollView>

        {/* ปุ่มยืนยัน */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate('FoodHome')}
          style={styles.button} 
          contentStyle={{ borderRadius: 100 }}
          labelStyle={styles.buttonLabel}
        >
          ยืนยัน
        </Button>
      </View>
    </Provider>
  );
}
