import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text as RNText } from 'react-native';
import { Appbar, Card, Text, Button, IconButton, Divider, Surface, RadioButton, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';
import Modal from 'react-native-modal';

export default function FoodCheckOut({ navigation, route }) {
  const item = route.params?.item || { title: 'ปุ๊เย็นตาโฟ', price: 80 };
  const [quantity, setQuantity] = useState(1);
  const [donate, setDonate] = useState(false);
  const [value, setValue] = useState('store'); // store = ให้ร้านจัดส่ง, delivery = รับเอง
  const [visible, setVisible] = useState(false);
  const [paymentType, setPaymentType] = useState('');

  // ✅ เพิ่ม state สำหรับ Modal ยืนยันคำสั่งซื้อ
  const [confirmVisible, setConfirmVisible] = useState(false);

  const foodPrice = 60;
  const donation = donate ? 1 : 0;
  const deliveryFee = value === 'store' ? 15 : 0;
  const total = foodPrice * quantity + deliveryFee + donation;

  const handleConfirmOrder = () => {
    setConfirmVisible(false);
    navigation.navigate('OrderStatus'); // ✅ ไปหน้าเช็คสถานะคำสั่งซื้อ
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Appbar.Header style={{ backgroundColor: '#1E874B' }}>
        <Appbar.Action icon="close" style={{ color: '#fff' }} onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.title} titleStyle={{ fontWeight: 'bold', fontSize: 18 }} />
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="titleLarge" style={styles.sectionTitle}>สรุปคำสั่งซื้อ</Text>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Image
              source={{ uri: 'https://img.wongnai.com/p/1920x0/2018/07/20/34534460cf914dd7898e619968ad72dc.jpg' }}
              style={styles.thumb}
            />

            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={styles.titleMedium}>เย็นตาโฟต้มยำ</Text>
              <Text variant="bodySmall" style={styles.muted}>ธรรมดา</Text>
              <Text variant="bodySmall" style={styles.muted}>เส้นเล็ก</Text>
              <Text style={styles.edit}>แก้ไข</Text>
            </View>

            <View style={styles.qtyBox}>
              <RNText style={styles.price}>฿{foodPrice}</RNText>
              <View style={styles.qtyRow}>
                <IconButton icon="minus" style={styles.minus} size={20} onPress={() => setQuantity(q => Math.max(1, q - 1))} />
                <Text style={styles.quantity}>{quantity}</Text>
                <IconButton icon="plus" style={styles.plus} size={20} onPress={() => setQuantity(q => q + 1)} />
              </View>
            </View>
          </Card.Content>
        </Card>

        <View style={styles.infoRow}>
          <Text style={styles.subPrice}>รวมค่าอาหาร</Text>
          <Text style={styles.subPrice}>฿{foodPrice * quantity}</Text>
        </View>

        {value === 'store' && (
          <View style={styles.infoRow}>
            <Text style={styles.subPrice}>ค่าจัดส่ง</Text>
            <Text style={styles.subPrice}>฿{deliveryFee}</Text>
          </View>
        )}

        {/* <Text style={styles.greenHint}>สั่งเพิ่มอีก ฿50 เพื่อรับส่วนลดสูงสุด ฿15</Text> */}

        <Divider style={{ marginVertical: 12 }} />

        {/* <Text style={styles.addressWarning}>⚠️ โปรดตรวจสอบที่อยู่สำหรับจัดส่งให้ถูกต้อง</Text> */}
        <View style={styles.container}>
          <View style={styles.addressRow}>
            <Text style={styles.labelAdd}>ที่อยู่จัดส่ง</Text>
            <Text style={styles.address}>ออฟฟิศบิ๊กแคท บางนา</Text>
            <IconButton icon="pencil" iconColor="#1E874B" size={18} onPress={() => {}} />
          </View>

          <RadioButton.Group onValueChange={setValue} value={value}>
            <View style={styles.optionRow}>
              <RadioButton.Android value="store" color="#1E874B" />
              <Text style={styles.optionText}>ให้ทางร้านจัดส่ง</Text>
            </View>

            <View style={styles.optionRow}>
              <RadioButton.Android value="delivery" color="#1E874B" />
              <Text style={styles.optionText}>ลูกค้ารับเอง</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={{ flex: 1, padding: 16  , marginBottom: 160  }}>
          <Text style={styles.label}>วิธีการชำระเงิน</Text>
          <Text style={{color: '#000000'}}>Qr Code ร้าน</Text>
          <View style={{ alignItems: 'center', marginVertical: 16}}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg',
              }}
              style={styles.qrImg}
            />
          </View>

          {/* <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={{ color: '#1e88e5', fontSize: 16 }}>
              {paymentType ? paymentType : 'เลือกวิธีการชำระเงิน'}
            </Text>
            <Icon source="pencil" size={18} color="#1e88e5" />
          </TouchableOpacity> */}

          {/* Modal: เลือกวิธีการชำระเงิน */}
          <Modal
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={() => setVisible(false)}
            onBackdropPress={() => setVisible(false)}
            style={styles.modalPay}
          >
            <View style={styles.sheet}>
              <View style={styles.handle} />
              <Text style={styles.modalTitle}>เลือกวิธีการชำระเงิน</Text>

              <List.Item
                title="QR Code"
                titleStyle={{ color: '#000000' }}
                onPress={() => { setPaymentType('QR Code'); setVisible(false); }}
                left={props => <List.Icon {...props} icon="qrcode" color="#000000" />}
              />
              <List.Item
                title="Net banking"
                titleStyle={{ color: '#000000' }}
                onPress={() => { setPaymentType('Net banking'); setVisible(false); }}
                left={props => <List.Icon {...props} icon="credit-card" color="#000000" />}
              />
              <List.Item
                title="บัตรเครดิต"
                titleStyle={{ color: '#000000' }}
                onPress={() => { setPaymentType('บัตรเครดิต'); setVisible(false); }}
                left={props => <List.Icon {...props} icon="credit-card" color="#000000" />}
              />
            </View>
          </Modal>
        </View>
      </View>

      {/* ✅ Modal ยืนยันการสั่งซื้อ */}
      <Modal
        isVisible={confirmVisible}
        onBackdropPress={() => setConfirmVisible(false)}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 24,
          width: '80%',
          alignItems: 'center'
        }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 , color: '#000'}}>ยืนยันการสั่งซื้อ</Text>
          <Text style={{ color: '#000', textAlign: 'center', marginBottom: 20 }}>
            ต้องการยืนยันการสั่งซื้ออาหารใช่ไหม?
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Button
              mode="outlined"
              onPress={() => setConfirmVisible(false)}
              style={{ flex: 1, marginRight: 8 }}
              textColor="#333"
            >
              ยกเลิก
            </Button>

            <Button
              mode="contained"
              onPress={handleConfirmOrder}
              style={{ flex: 1, backgroundColor: '#4CAF50' }}
              labelStyle={{color:"#fff"}}
            >
              ยืนยัน
            </Button>
          </View>
        </View>
      </Modal>

      <Surface style={styles.footer} elevation={4}>
        <View style={styles.footerInner}>
          <View>
            <Text>รวมทั้งหมด</Text>
            <Text variant="titleLarge" style={styles.bthtx}>฿{total}</Text>
          </View>

          <Button
            mode="contained"
            onPress={() => setConfirmVisible(true)} // ✅ กดแล้วเปิด Modal
            style={styles.orderBtn}
            buttonColor="#4CAF50"
            textColor="#fff"
          >
            สั่งซื้อ
          </Button>
        </View>
      </Surface>
    </View>
  );
}
