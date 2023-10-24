import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from "./styles";

export function MovieItem({ value, isNew, ...rest }) {
  return (
   <Container
    $isnew={isNew}
   >

      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}

        className={isNew ? 'button-add' : 'button-delete'}
      />

      <button
        type="button"
        
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
   </Container>
  );
};