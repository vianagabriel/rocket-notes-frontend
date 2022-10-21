//Importando Routes e Route do react router dom 
import { Routes, Route } from 'react-router-dom';

//Fazendo a importação das páginas
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';



export function AuthRoutes(){
  return(
    //passando o Routes do react router dom por fora de tudo como elemento pai
    <Routes>
      {/*  passando o Route com um path que é o caminho para qual aquela rota está 
           apontando e o element que como o nome já diz é o elemento a ser exibido em tela
        */}
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
     
    </Routes>
  )
}
      