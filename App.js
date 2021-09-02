import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
// import C1 from './componentes/comp1';
import Estilos from './estilos/estilos.js'
import Caixas from './componentes/caixas.js'



 export default function App1(){
   let vexibir  = true;
 return(
   <View style={Estilos.container} >
      <Caixas exibir ={vexibir}/>

       <Text style={Estilos.textoPadrao} >Texto Independente dos Componentes hehe</Text>
       <Text style={Estilos.textoTitulo} >CFBcursos.com.br</Text>
      {vexibir?<Text>Curso de React Native</Text>:<Text> - - -</Text>}
      {vexibir && <Text>Curso de React Native</Text>}
   </View>
 );
};


