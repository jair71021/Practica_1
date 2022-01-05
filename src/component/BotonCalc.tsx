import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme'

interface Props {
    texto : string,
    color? : '#5D5D5D' | '#2D2D2D' | '#FF9427',
    ancho? : boolean,
    accion : (numeroTexto : string) => void;
}

export const BotonCalc = ({texto, color =  '#2D2D2D', ancho = false, accion} : Props) => {
    return (
        <TouchableOpacity onPress = {() => accion(texto)}>
            <View style = {{...style.boton, backgroundColor : color, width: (ancho ? 180 : 80)}}>
                <Text style = {style.botonTexto}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
