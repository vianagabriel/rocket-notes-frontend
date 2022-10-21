import { Container } from './styles';

export function ButtonText({title, isActive, ...rest}){
  return(
    <Container 
     type="button"
     isActive={isActive}// passando o isActive como um atributo...
     {...rest}
    >
      {title}
    </Container>
  )
}