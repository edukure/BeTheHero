import React from "react";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";


import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navitagion = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title}`;

  function navigateBack(){
    navitagion.goBack();
  }
  
  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}-{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{incident.value}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o Herói deste caso.</Text>
        <Text style={styles.heroDescription}>Seja o Herói deste caso.</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
