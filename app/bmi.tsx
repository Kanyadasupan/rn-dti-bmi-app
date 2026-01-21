import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";

export default function Bmi() {
  //สร้าง state สำหรับเก็บค่าน้ำหนัก ส่วนสูง BMI และผลลัพธ์ และการแปรผล
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [resultText, setResultText] = useState("การแปรผล");
  const [result, setResult] = useState("0.00");

    //ฟังก์ชันคำนวณ BMI
  const handleCalPress = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    const bmi = w / (h * h);
    setResult(bmi.toFixed(2));

    //Alert น้ำหนักและส่วนสูงต้องไม่เป็นศูนย์
    if (w === 0 || h === 0) {
      Alert.alert("น้ำหนักและส่วนสูงต้องไม่เป็น 0");
      return;
    }
    //Alert ถ้าไม่กรอกน้ำหนักและส่วนสูง
    if (!weight && !height) {
      Alert.alert("กรุณากรอกน้ำหนักและส่วนสูง");
      return;
    }
    //Alert ถ้าไม่กรอกน้ำหนักอย่างเดียว
    if (!weight) {
      Alert.alert("กรุณากรอกน้ำหนัก");
      return;
    }
    //Alert ถ้าส่วนสูง
    if (!height) {
      Alert.alert("กรุณากรอกส่วนสูง");
      return;
    }
    

    //การแปรผล BMI
    let heightValue = parseFloat(height) / 100;
    let weightValue = parseFloat(weight);
    let bmiValue = weightValue / (heightValue * heightValue);
    setResult(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setResultText("น้ำหนักต่ำกว่าเกณฑ์");
    } else if (bmiValue < 23) {
      setResultText("น้ำหนักปกติ");
    } else if (bmiValue < 25) {
      setResultText("น้ำหนักเกิน");
    } else if (bmiValue < 30) {
      setResultText("โรคอ้วนระดับ 1");
    } else {
      setResultText("โรคอ้วนระดับ 2");
    }
  };

  //ฟังก์ชันรีเซ็ต BMI
  const handleResetPress = () => {
    Keyboard.dismiss();
    setWeight("");
    setHeight("");
    setResult("0.00");
    setResultText("การแปรผล");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/bmi.png")}
          style={styles.image}
        />
        <View style={styles.cardInput}>
          <Text style={styles.labelInput}>ป้อนน้ำหนัก (kg)</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={[styles.labelInput, { marginTop: 15 }]}>
            ป้อนส่วนสูง (cm)
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.btnReset} onPress={handleResetPress}>
              <Text style={styles.btnText}>รีเซ็ต</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCalculate} onPress={handleCalPress}>
              <Text style={styles.btnText}>คำนวณ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardresult}>
            <Text
              style={[styles.textresult, { fontSize: 20, color: "#ffffff" }]}
            >
              BMI
            </Text>
            <Text
              style={[styles.textresult, { fontSize: 40, color: "#33ff00" }]}
            >
              {result}
            </Text>
            <Text
              style={[styles.textresult, { fontSize: 20, color: "#ffffff" }]}
            >
              {resultText}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  cardInput: {
    marginTop: 40,
    fontFamily: "Prompt_700Bold",
    backgroundColor: "#4a4a4a",
    width: "80%",
    padding: 15,
    borderRadius: 15,
  },
  labelInput: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "Prompt_400Regular",
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    fontFamily: "Prompt_400Regular",
  },
  btnReset: {
    backgroundColor: "#cc5858",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnCalculate: {
    backgroundColor: "#5aa25a",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flex: 2,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Prompt_400Regular",
    shadowColor: "#ffffff",
  },
  cardresult: {
    marginTop: 30,
    backgroundColor: "#a7a7a7",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textresult: {
    fontFamily: "Prompt_700Bold",
  },
});
