import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles";

import { Background } from "../Background";

interface ModalViewProps extends ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

export const ModalView = ({
  children,
  closeModal,
  ...rest
}: ModalViewProps) => {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
