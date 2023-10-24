import { FiArrowLeft } from "react-icons/fi"
import { Container, Nav, Content, Form, MovieTags } from "./styles";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { ButtonDark } from "../../components/ButtonDark"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <Nav>
        <ButtonText value="Voltar" icon={FiArrowLeft} to="/" />
      </Nav>
      
      <Content>
        <Form>
          <h1>Novo filme</h1>
          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" maxLength="1" />
          </div>
          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>

          <MovieTags>
            <MovieItem value="React" />
            <MovieItem placeholder="Novo marcador" isNew />
          </MovieTags>

          <div>
            <ButtonDark value="Excluir filme" />
            <Button value="Salvar alterações" />
          </div>

        </Form>
      </Content>
    </Container>
  );
};