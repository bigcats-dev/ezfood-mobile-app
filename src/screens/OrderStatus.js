import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Appbar, Text, Card, ProgressBar, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function OrderStatus({ navigation }) {
  const [progress, setProgress] = useState(0.3);
  const [statusText, setStatusText] = useState('กำลังเตรียมอาหาร... 🍜');

  // จำลองการอัปเดตสถานะ (ทุก 5 วิ)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p < 1) {
          const next = Math.min(1, p + 0.35);
          if (next < 0.5) setStatusText('กำลังเตรียมอาหาร... 🍳');
          else if (next < 0.9) setStatusText('กำลังจัดส่ง... 🚴‍♂️');
          else setStatusText('จัดส่งสำเร็จ! ✅');
          return next;
        } else return p;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Appbar.Header style={{ backgroundColor: '#1E874B' }}>
        <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
        <Appbar.Content title="สถานะคำสั่งซื้อ" color="#fff" />
      </Appbar.Header>

      <View style={{ padding: 20 }}>
        <Card style={{ borderRadius: 16, elevation: 3, marginBottom: 16, backgroundColor:'#fff' }}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
              }}
              style={{ width: 100, height: 100, marginBottom: 12 }}
            />
            <Text variant="titleLarge" style={{ fontWeight: 'bold', color: '#333' }}>
              ออเดอร์ #A102
            </Text>
            <Text variant="bodyMedium" style={{ color: '#666', marginTop: 4 }}>
              {statusText}
            </Text>

            <ProgressBar
              progress={progress}
              color="#1E874B"
              style={{ height: 10, width: '100%', borderRadius: 8, marginTop: 16 }}
            />
          </Card.Content>
        </Card>

        <Divider style={{ marginVertical: 8 }} />

        <View style={{ marginTop: 12, color:"#000" }}>
          <Text variant="titleMedium" style={{ fontWeight: 'bold', marginBottom: 8, color:"#000" }}>
            รายละเอียดออเดอร์
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color:"#000" }}>เย็นตาโฟต้มยำ (ธรรมดา)</Text>
            <Text style={{ color:"#000" }}>฿60</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
            <Text style={{ color:"#000" }}>ค่าจัดส่ง</Text>
            <Text style={{ color:"#000" }}>฿15</Text>
          </View>

          <Divider style={{ marginVertical: 8 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold',color:"#000" }}>รวมทั้งหมด</Text>
            <Text style={{ fontWeight: 'bold', color: '#1E874B' }}>฿75</Text>
          </View>
        </View>
      </View>

      {progress >= 1 && (
        <View style={{ padding: 20 }}>
          <Button
            mode="contained"
            buttonColor="#1E874B"
            textColor="#fff"
            icon="home"
            onPress={() => navigation.navigate('FoodHome')}
          >
            กลับหน้าหลัก
          </Button>
        </View>
      )}
    </View>
  );
}
