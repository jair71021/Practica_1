import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    fondo : {
        flex : 1,
        backgroundColor : 'black'
    },
    calculadoraContainer : {
        flex :1, 
        paddingHorizontal : 20, 
        justifyContent : "flex-end"
    }, 
    resultado : {
        color :  'white',
        fontSize : 60,
        textAlign : "right",
        marginBottom : 30
    },
    resultadoPeke : {
        fontSize : 30, 
        color : 'rgba(255, 255,255, 0.5)',
        textAlign : "right"
    },
    fila : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginBottom : 18,
        paddingHorizontal : 10
    },
    boton : {
        height : 80, 
        width : 80,
        backgroundColor : '#2D2D2D',
        borderRadius : 100,
        justifyContent : 'center',
        marginHorizontal : 10
    },
    botonTexto : {
        color : 'white',
        textAlign : "center",
        fontSize : 30,
        fontWeight : '500'
    }
})