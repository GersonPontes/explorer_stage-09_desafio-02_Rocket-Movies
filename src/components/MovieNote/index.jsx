import { Container } from "./styles";
import { Tag } from "../Tag"
import { BiStar, BiSolidStar} from "react-icons/bi"

export function MovieNote({data, stars = data.stars, to}) {
  return (
    <Container
      to={to}
    >
      <h2>{data.title}</h2>
      <span>
        {starNumber({stars})}
      </span>
      <p>{data.description}</p>
      
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={ tag.id } title={ tag.name }/>)
          }
        </footer>
      }
      
    </Container>
  );
};

function starNumber(stars){

  switch (Number(stars.stars)){
    case 1:
      return (
        <>
          <BiSolidStar />
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />     
        </>
      );
      break
    case 2:
      return (
        <>
          <BiSolidStar />
          <BiSolidStar />
          <BiStar />
          <BiStar />
          <BiStar />     
        </>
      );
      break
    case 3:
      return (
        <>
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiStar />
          <BiStar />     
        </>
      );
      break
    case 4:
      return (
        <>
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiStar />     
        </>
      );
      break
    case 5:
      return (
        <>
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />     
        </>
      );
      break
    default:
    break
  }
};