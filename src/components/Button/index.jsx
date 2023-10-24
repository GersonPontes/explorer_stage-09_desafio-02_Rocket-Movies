import { Container } from "./styles";

export function Button({ icon: Icon, value, to }) {
  return (
    <Container
      type="button"
      to={to}
    >
      { Icon && <Icon size={20} />}

      { value }
  
    </Container>
  );
};