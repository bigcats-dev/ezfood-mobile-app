import React, { useState } from 'react';
import { View, TouchableOpacity , Image, Text as RNText } from 'react-native';
import { Appbar, Card, Text, Button, IconButton, Switch, Divider, Surface ,RadioButton , List ,Portal} from 'react-native-paper'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';
import Modal from 'react-native-modal';

export default function FoodCheckOut({ navigation, route }) { 
  const item = route.params?.item || { title: "ก๋วยเตี๋ยวไทยโบราณแม่พลอย", price: 80 };
  const [quantity, setQuantity] = React.useState(1);
  const [donate, setDonate] = React.useState(false);

  const foodPrice = 100;
  const deliveryFee = 15;
  const donation = donate ? 1 : 0;
  const total = foodPrice * quantity + deliveryFee + donation;
  const [value, setValue] = React.useState('store');
  const [visible, setVisible] = useState(false);
  const [paymentType, setPaymentType] = useState('');

 

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Appbar.Header style={{  backgroundColor: "#1E874B" }}>
        <Appbar.Action icon="close"  style={{ color: "#fff" }} onPress={() => navigation.goBack()} /> 
        <Appbar.Content title={item.title} titleStyle={{ fontWeight: "bold" , fontSize: "18" }} />
      </Appbar.Header>

      <View style={styles.content}>
        <Text variant="titleLarge" style={styles.sectionTitle}>สรุปคำสั่งซื้อ</Text>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Image 
              source={{ uri: "https://img.wongnai.com/p/1920x0/2024/01/10/84965fd1b0bc4823b80fe58b1d81bad3.jpg" }} 
              style={styles.thumb} 
            />


            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={styles.titleMedium}>เกาเหลาต้มยำโบราณ</Text>
              <Text variant="bodySmall" style={styles.muted}>ธรรมดา</Text>
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
          <Card.Content style={styles.cardContent}>
            <Image 
              source={{ uri: "https://img.wongnai.com/p/1920x0/2024/01/10/84965fd1b0bc4823b80fe58b1d81bad3.jpg" }} 
              style={styles.thumb} 
            />


            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={styles.titleMedium}>เกาเหลาต้มยำโบราณ</Text>
              <Text variant="bodySmall" style={styles.muted}>ธรรมดา</Text>
              <Text style={styles.edit}>แก้ไข</Text>
            </View>

            <View style={styles.qtyBox}>
              <RNText style={styles.price}>฿{foodPrice}</RNText>
              <View style={styles.qtyRow}>
                <IconButton icon="minus" size={20} onPress={() => setQuantity(q => Math.max(1, q - 1))} />
                <Text style={styles.quantity}>{quantity}</Text>
                <IconButton icon="plus" size={20} onPress={() => setQuantity(q => q + 1)} />
              </View>
            </View>
          </Card.Content>
        </Card>

        <View style={styles.infoRow}>
          <Text style={styles.subPrice}>รวมค่าอาหาร</Text>
          <Text style={styles.subPrice}>฿{foodPrice * quantity}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.subPrice}>ค่าจัดส่ง</Text>
          <Text style={styles.subPrice}>฿{deliveryFee}</Text>
        </View>

        <Text style={styles.greenHint}>สั่งเพิ่มอีก ฿50 เพื่อรับส่วนลดสูงสุด ฿15</Text>

        <Divider style={{ marginVertical: 12 }} />

       
        <Text style={styles.addressWarning}>⚠️ โปรดตรวจสอบที่อยู่สำหรับจัดส่งให้ถูกต้อง</Text>
        <View style={styles.container}>
          {/* Address Row */}
          <View style={styles.addressRow}>
            <Text style={styles.labelAdd}>ที่อยู่จัดส่ง</Text>
            <Text style={styles.address}>ออฟฟิศบิ๊กแคก บางนา</Text>
            <IconButton icon="pencil" iconColor="#1E874B" size={18} onPress={() => {}} />
          </View>
 
          {/* Radio Options */}
          <RadioButton.Group onValueChange={setValue} value={value}>
            <View style={styles.optionRow}>
              <RadioButton.Android value="store" color="#1E874B" />
              <Text style={styles.optionText}>ให้ทางร้านจัดส่ง</Text>
            </View>


            <View style={styles.optionRow}>
              <RadioButton.Android value="delivery" color="#1E874B" />
              <Text style={styles.optionText}>ให้ Delivery จัดส่ง</Text>
            </View>
          </RadioButton.Group>
        </View> 


        {/* Bottom Sheet Modal */}
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={styles.label}>วิธีการชำระเงิน</Text>
          
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={{ color: '#1e88e5', fontSize: 16 }}>
              {paymentType ? paymentType : 'เลือกวิธีการชำระเงิน'}
            </Text>
            <Icon source="pencil" size={18} color="#1e88e5" />
          </TouchableOpacity>

          <Modal
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={() => setVisible(false)}
            onBackdropPress={() => setVisible(false)}
            style={styles.modalPay}
          >
            <View style={styles.sheet}>
              {/* drag handle bar */}
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
              <List.Item
                title="เพิ่มบัตรเครดิต"
                titleStyle={{ color: '#888' }}  
                onPress={() => { setPaymentType('เพิ่มบัตรเครดิต'); setVisible(false); }}
                left={props => <List.Icon {...props} icon="plus" color="#888" />}
              />
            </View>
          </Modal>
        </View>
        
        
      </View>

      <Surface style={styles.footer} elevation={4}>
        <View style={styles.footerInner}>
          <View>
            <Text>รวมทั้งหมด</Text>
            <Text variant="titleLarge" style={styles.bthtx}>฿{total}</Text>
          </View>

          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.orderBtn}
            buttonColor="#4CAF50"   // เขียวสวย Material
            textColor="#fff"        // ตัวอักษรสีขาว
          >
            สั่งซื้อ
          </Button>
        </View>
      </Surface>

    </View>
  );
}

 