import { Routes, Route } from 'react-router-dom';

import { 
    NavBar, 
    Buscador, 
    Home, 
    FormInicio, 
    FormRegistro, 
    FormEdit, 
    FormularioContacto, 
    Footer 
} from '../componentes';


export const Router = () => {
  return (
    <>
      <NavBar />
      <Buscador />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciar-sesion" element={<FormInicio />} />
        <Route path="/registrar-usuario" element={<FormRegistro />} />
        <Route path="/editar-curso/:id" element={<FormEdit />} />
      </Routes>

      <FormularioContacto />   
      <Footer /> 
    </>
  )
}
