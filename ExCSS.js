import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css'


class ExCSS extends React.Component {

  render() {

const mystyle = {
      color: "black",
      fontFamily: "Arial",
      padding: "5px",
      marginTop: 4,
    };

    const mystyle2 = {
      color: "black",
      fontFamily: "Arial",
      opacity: 0.5,
      padding: "5px",
       marginTop: 4,
    };

const estilo = {
color: "white",
      backgroundColor: "#3949AB",
      fontFamily: "Arial",
      padding: "5px",
       marginTop: 4,
};
const styleborda = {
  borderStyle: "groove",
  borderColor: "#3949AB",
   padding: "5px",
    marginTop: 4,
};



return (
      <div>
      <h2 style={mystyle}>Curso de Frontend</h2>
      <h6 style={estilo}>Aprenda os fundamentos do design, desenvolvimento front-end e os segredos da experiência dos usuários.</h6>
      <h4 style={mystyle2}>Trilha > HTML / CSS</h4>
      <h3 style={mystyle2}>Módulo Iniciante com HTML e CSS</h3>
       <h6 style={estilo}>HTML e CSS são linguagens que você pode usar para construir e estilizar websites. Neste curso você irá aprender o básico sobre HTML e CSS para construir seu primeiro website.</h6>
       <h4 style={styleborda}>Etapa 1
       <h5>Front-end fundamentos
       <h6 style={mystyle2}>Aprenda como fazer uma website com HTML e CSS
       
       </h6>
       </h5>
       </h4>
       <h4 style={styleborda}>Etapa 2
       <h5>Front-end fundamentos
       <h6 style={mystyle2}>Aprenda sobre as diferentes versões do HTML e CSS
       
       </h6>
       </h5>
       </h4>
       



       <h3 style={mystyle2}>Módulo Intermediário</h3>



        <h4 style={styleborda}>Etapa 1
       <h5>CSS Cross Browser
       <h6 style={mystyle2}>Aprendendo a usar a programação para funcionar nos diversos Browsers
       
       </h6>
       </h5>
       </h4>
       <h4 style={styleborda}>Etapa 2
       <h5>Passando em Mobile
       <h6 style={mystyle2}>Aprender Mobile-first, adaptação e web design responsivo
       </h6>
       </h5>
       </h4>

       <h4 style={styleborda}>Etapa 3
       <h5>Aventuras com Animações Web
       <h6 style={mystyle2}>Viaje através do maravilhoso mundo das animações web
       
       </h6>
       </h5>
       </h4>

      </div>

    );
  }
}
export default ExCSS;