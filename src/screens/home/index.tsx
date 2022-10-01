import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "Allyson",
    "Jacke",
    "João1",
    "João2",
    "João3",
    "João4",
    "João5",
    "João6",
    "João7",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover ${name}!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={participants} />

      {participants.map((participant) => (
        <Participant
          key={participant}
          name={participant}
          onRemove={() => handleParticipantRemove(participant)}
        />
      ))}
    </View>
  );
}
