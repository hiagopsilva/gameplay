import React, { ReactNode } from 'react';
import { Modal, ModalProps } from 'react-native';
import { Background } from '../Background';

import { Container, Overlay, ViewBar } from './styles';

type Props = ModalProps & {
  children: ReactNode;
};

const ModalView: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <ViewBar />
            {children}
          </Background>
        </Container>
      </Overlay>
    </Modal>
  );
};

export { ModalView };
