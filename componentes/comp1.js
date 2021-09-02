import React from 'react';
import {StyleSheet , Text} from 'react-native';
import Estilos from '../estilos/estilos.js';
let nt ;

export default function componente1(props){
    nt = props.nota
    
    return(
        <Text style={Estilos.textoCursos} >CFB cursos - Curso de : {props.curso}: nota = {nt}</Text>
        
    );
}
