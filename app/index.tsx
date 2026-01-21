import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { router, Router } from "expo-router";

export default function Index() {

  // โหลดหน้าจอ
  useEffect(() => {
    const timer = setTimeout(() => {router.replace("/bmi");}, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bmi.png")}
        style={styles.imgLogo}
      />
      <Text
        style={[
          styles.appName,
          { fontSize: 30 },
          {
            fontFamily: "Prompt_700Bold",
          },
        ]}
      >
        BMI Calculator
      </Text>
      <Text style={[styles.appName, { fontSize: 20 }, { fontFamily: "Prompt_400Regular" }]}>คำนวณ BMI</Text>
      <ActivityIndicator
        size="large"
        color="#000000"
        style={{ marginTop: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgLogo: { width: 200, height: 200 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  appName: {
    color: "#000000",
    marginTop: 20,
  },
});
