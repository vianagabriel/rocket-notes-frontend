//Importando Routes e Route do react router dom 
import { Routes, Route } from 'react-router-dom';

//Fazendo a importação das páginas
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { NewNote } from '../pages/NewNote';
import { Profile } from '../pages/Profile';



export function AppRoutes(){
  return(
    //passando o Routes do react router dom por fora de tudo como elemento pai
    <Routes>
      {/*  passando o Route com um path que é o caminho para qual aquela rota está 
           apontando e o element que como o nome já diz é o elemento a ser exibido em tela
        */}
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/new' element={<NewNote/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}
      