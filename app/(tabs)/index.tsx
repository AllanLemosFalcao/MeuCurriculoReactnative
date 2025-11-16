import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';

// --- DADOS DO CURRÍCULO ---
const curriculoData = {
  nome: "Allan Lemos Falcão", // nome
  fotoUrl: "https://i.imgur.com/TvTqLff.png", // Link foto 
  titulo: "Desenvolvedor de Software", // Seu título/cargo
  experiencias: [
    {
      cargo: "Estagiário Técnico em Edificações",
      empresa: "Sinduscon - Sindicato da Industria da Construção Civil",
      periodo: "2018 - 2019",
      descricao: "Uso de ferramentas voltadas a confecção de Orçamento; Fiscalização de execução de serviços em obra"
    }
  ]
};
// ------------------------------

/**
 * Componente para renderizar um item de experiência
 */
function ExperienceItem({ cargo, empresa, periodo, descricao }) {
  return (
    <View style={styles.experienceItem}>
      <Text style={styles.expCargo}>{cargo}</Text>
      <Text style={styles.expEmpresa}>{empresa}</Text>
      <Text style={styles.expPeriodo}>{periodo}</Text>
      <Text style={styles.expDescricao}>{descricao}</Text>
    </View>
  );
}

/**
 * Componente principal do App
 */
export default function App() {
  const { nome, fotoUrl, titulo, experiencias } = curriculoData;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          
          {/* --- Header com Foto e Nome --- */}
          <View style={styles.header}>
            <Image
              source={{ uri: fotoUrl }}
              style={styles.foto}
              // Fallback não é tão direto, mas 'uri' é o caminho
            />
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.titulo}>{titulo}</Text>
          </View>

          {/* --- Seção de Experiência --- */}
          <View style={styles.mainContent}>
            <Text style={styles.sectionTitle}>
              Experiência Profissional
            </Text>
            
            {/* Mapeia o array de experiências e renderiza cada item */}
            {experiencias.map((exp, index) => (
              <ExperienceItem
                key={index}
                cargo={exp.cargo}
                empresa={exp.empresa}
                periodo={exp.periodo}
                descricao={exp.descricao}
              />
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * Componente de Estilos
 */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Um fundo cinza claro para o app
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0369a1', // Azul (sky-800)
    paddingVertical: 32, // p-8
    paddingHorizontal: 16,
    alignItems: 'center', // Centraliza itens
  },
  foto: {
    width: 128, // w-32
    height: 128, // h-32
    borderRadius: 64, // rounded-full
    borderWidth: 4,
    borderColor: '#ffffff', // border-white
  },
  nome: {
    fontSize: 28, // text-3xl
    fontWeight: 'bold',
    color: '#ffffff', // text-white
    marginTop: 16, // mt-4
  },
  titulo: {
    fontSize: 18, // text-lg
    color: '#bae6fd', // text-sky-200
  },
  mainContent: {
    padding: 24, // p-6
  },
  sectionTitle: {
    fontSize: 22, // text-2xl
    fontWeight: '600', // font-semibold
    color: '#1e293b', // text-gray-800
    marginBottom: 20, // mb-5
    borderBottomWidth: 2,
    borderBottomColor: '#e0f2fe', // border-sky-100
    paddingBottom: 8, // pb-2
  },
  // Estilos para o ExperienceItem
  experienceItem: {
    marginBottom: 20, // mb-5
    padding: 16, // p-4
    borderRadius: 8, // rounded-lg
    borderWidth: 1,
    borderColor: '#e5e7eb', // border-gray-200
    backgroundColor: '#ffffff', // Fundo branco para o card
  },
  expCargo: {
    fontSize: 20, // text-xl
    fontWeight: 'bold',
    color: '#075985', // text-sky-700
  },
  expEmpresa: {
    fontSize: 16, // text-md
    fontWeight: '600', // font-semibold
    color: '#374151', // text-gray-700
    marginTop: 4,
  },
  expPeriodo: {
    fontSize: 14, // text-sm
    color: '#6b7280', // text-gray-500
    marginBottom: 8, // mb-2
    marginTop: 4,
  },
  expDescricao: {
    fontSize: 16, // text-base
    color: '#4b5563', // text-gray-600
    textAlign: 'justify', // text-justify
  },
});