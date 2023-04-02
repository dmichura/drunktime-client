import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { i18n, setLocale } from "../utils/i18n";

const HomeScreen = ({ lang, setLang }) => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>{i18n.t("welcome")}</Text>
      <TouchableOpacity
        onPress={() => {
          setLocale(i18n.locale == "en" ? "pl" : "en");
          setLang(i18n.locale);
        }}
      >
        <Text>
          Zmień język na {(i18n.locale == "en" && "Polski") || "Angielski"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
