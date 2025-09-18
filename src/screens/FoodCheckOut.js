import React from 'react';
import { View, StyleSheet, Image, Text as RNText } from 'react-native';
import { Appbar, Card, Text, Button, IconButton, Switch, Divider, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = React.useState(1);
  const [donate, setDonate] = React.useState(false);

  const foodPrice = 100;
  const deliveryFee = 15;
  const donation = donate ? 1 : 0;
  const total = foodPrice * quantity + deliveryFee + donation;

  return (
    <View style={styles.container}>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="ราชาเนื้อตุ๋น - ถนนอุดมสุข" subtitle="ค่าจัดส่งคำนวณเมื่อเวลา 23:01:30" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="titleLarge" style={styles.sectionTitle}>สรุปคำสั่งซื้อ</Text>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Image source={require('../../assets/m201.jpg')} style={styles.thumb} />

            <View style={{ flex: 1 }}>
              <Text variant="titleMedium">เกาเหลาเนื้อ</Text>
              <Text variant="bodySmall" style={styles.muted}>ธรรมดา</Text>
              <Text style={styles.edit}>แก้ไข</Text>
            </View>

            <View style={styles.qtyBox}>
              <RNText style={styles.price}>฿{foodPrice}</RNText>
              <View style={styles.qtyRow}>
                <IconButton icon="minus" size={20} onPress={() => setQuantity(q => Math.max(1, q - 1))} />
                <Text>{quantity}</Text>
                <IconButton icon="plus" size={20} onPress={() => setQuantity(q => q + 1)} />
              </View>
            </View>
          </Card.Content>
        </Card>

        <View style={styles.infoRow}>
          <Text>รวมค่าอาหาร</Text>
          <Text>฿{foodPrice * quantity}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text>ค่าจัดส่ง</Text>
          <Text>฿{deliveryFee}</Text>
        </View>

        <Text style={styles.greenHint}>สั่งเพิ่มอีก ฿50 เพื่อรับส่วนลดสูงสุด ฿15</Text>

        <Divider style={{ marginVertical: 12 }} />

        <Text variant="titleMedium" style={{ marginBottom: 8 }}>ตัวเลือกเพื่อสิ่งแวดล้อม</Text>
        <View style={styles.envRow}>
          <View style={{ flex: 1 }}>
            <Text>เงินบริจาคโครงการเพื่อโลกสีเขียว • ฿1</Text>
            <Text variant="bodySmall" style={styles.muted}>ร่วมกันสมัครใจบริจาคเพื่อลดคาร์บอนฟุตพริ้นท์</Text>
          </View>
          <Switch value={donate} onValueChange={setDonate} />
        </View>

        <Divider style={{ marginVertical: 12 }} />

        <View style={styles.pickRow}>
          <Button mode="contained" style={{ flex: 1 }} onPress={() => {}}>
            จัดส่ง
          </Button>
          <Button mode="text" onPress={() => {}}>
            รับที่ร้าน
          </Button>
        </View>

        <Text style={styles.addressWarning}>⚠️ โปรดตรวจสอบที่อยู่สำหรับจัดส่งให้ถูกต้อง</Text>
      </View>

      <Surface style={styles.footer} elevation={4}>
        <View style={styles.footerInner}>
          <View>
            <Text>รวมทั้งหมด</Text>
            <Text variant="titleLarge">฿{total}</Text>
          </View>

          <Button mode="contained" onPress={() => {}} style={styles.orderBtn}>
            สั่งซื้อ
          </Button>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 16 },
  sectionTitle: { marginBottom: 8 },
  card: { borderRadius: 12, overflow: 'hidden' },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  thumb: { width: 64, height: 64, borderRadius: 8, marginRight: 12 },
  muted: { color: '#666' },
  edit: { color: '#1e88e5', marginTop: 4 },
  qtyBox: { alignItems: 'flex-end' },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  price: { fontWeight: '700' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  greenHint: { color: '#2e7d32', marginTop: 8 },
  envRow: { flexDirection: 'row', alignItems: 'center' },
  pickRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  addressWarning: { marginTop: 12, color: '#666' },
  footer: { padding: 12, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  footerInner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orderBtn: { minWidth: 150 },
});
