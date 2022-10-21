//importando BrowserRouter de dentro do react router dom
import { BrowserRouter } from 'react-router-dom';

//importando as rotas que estão no AppRoutes
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


export function Routes(){
  return(
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}


