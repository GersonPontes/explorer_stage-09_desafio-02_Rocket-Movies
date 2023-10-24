import { Container } from "./styles"

export function ButtonText({ icon: Icon, value, to }) {
  return (
    <Container to={to}>
      {Icon && <Icon size={16} />}
      {value}
    </Container>
  );
};