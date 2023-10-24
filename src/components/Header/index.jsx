import { Container, Brand, Search, Profile } from "./styles";
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      
      <Brand to="/" >
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" type="text" />
      </Search>

      <Profile to="/profile" >
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <span>sair</span>
        </div>

        <img 
          src="https://github.com/rodrigorgtic.png" 
          alt="Foto do usuário" 
        />
      </Profile>
      
    </Container>
  );
};