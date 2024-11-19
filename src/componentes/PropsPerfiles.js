import React from 'react';
import Perfiles from './Perfiles';

const propsPerfiles = [
  {
    foto: require('../img/a11c94ba1ad5d066cf4569e666b001fd.jpg'),
    nombre: 'Gisele Smith',
    cargo: 'Web Developer & UI/UX Designer',
    descripcion: 'Destreza en React, Bootstrap, Diseño de Mockups y Prototipos Web',
  },
  {
    foto: require('../img/a152ae5400dc9f126511af08a881ae77.jpg'),
    nombre: 'Emily Johnson',
    cargo: 'Backend Developer',
    descripcion: 'Experta en Node.js, Express y bases de datos relacionales',
  },
  {
    foto: require('../img/b92e03cc31559f9fd112273c98c0fc99.jpg'),
    nombre: 'Mia Wilson',
    cargo: 'Data Scientist',
    descripcion: 'Especializada en análisis de datos y machine learning con Python',
  },
  {
    foto: require('../img/c266ada468b995a60155cf2642e88dfd.jpg'),
    nombre: 'Amelia Taylor',
    cargo: 'Mobile Developer',
    descripcion: 'Experiencia en desarrollo de aplicaciones móviles con Flutter y React Native',
  },
  
];

const PropsPerfiles = () => {
  return (
    <div>
      {propsPerfiles.map((perfil, index) => (
        <Perfiles
          key={index}
          perfil={perfil}
        />
      ))}
    </div>
  );
};

export default PropsPerfiles;
