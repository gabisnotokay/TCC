// Importando as dependências necessárias do React e React Native
import { EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { visualizarAvisos } from "../../../../firebase-config"; // Importando a função de visualizarAvisos do Firebase
import Logo from "../../components/logo/index";
import styles from "./style";

// Definindo o componente de função Notificacao
const Notificacao = () => {
  const [relatos, setRelatos] = useState([]);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const avisosData = await visualizarAvisos();
        setAvisos(avisosData);
      } catch (error) {
        console.error("Erro ao obter avisos:", error);
      }
    };
    fetchAvisos();
  }, []);

  return (
    <ImageBackground
      source={require("../../../../assets/background1.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.iconContainer}>
          <EvilIcons name="bell" size={24} color="white" />
          <Text style={styles.description}>Visualizar Avisos</Text>
        </View>
        <View style={styles.space} />

        <ScrollView style={styles.notificationContainer}>
          {sortedSituacoes.map((relato) => (
            <Text key={situacao.id} style={styles.situacaoText}>
              ID: {String(situacao.id)} - Situação: {situacao.nome}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};
export default Notificacao;
