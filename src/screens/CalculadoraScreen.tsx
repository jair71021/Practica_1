import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../component/BotonCalc'
import { style } from '../theme/appTheme'

enum Operadores {
    sum, res, mul, div
}

export const CalculadoraScreen = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();
    
    const armarNumero = (numeroTexto : string) => {
        //Validar si existe un número decimal 
        if(numero.includes('.') && numeroTexto === '.') return;
        // Si nuestro numero inicia empieza con 0 o -0
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Validar si empieza con numero decimal 
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Validar si es un segundo 0 y existe el punto decimal
            } else if(numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                // Validar si es difernete de 0 y no tiene punto
            } else if (numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
                //evitar  00000.000
            } else if (numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto)
        }
    }
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero);
        }
    }
    const btnDel = () => {
        if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
            setNumero('0');
        } else {
            setNumero(numero.slice(0, -1))
        }
    }
    const btnAC = () => {
        setNumero('0');
        setnumeroAnterior('0');
    }
    const cambiarNumeroAnterior = () =>{
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1));
        } else {
            setnumeroAnterior(numero);
        }
        setNumero('0');
    }
    const btnDiv = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current =  Operadores.div
    }
    const btnMult = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.mul
    }
    const btnSum = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.sum
    }
    const btnRes = () =>{
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.res
    }
    const calcular = () =>{
        const numUno = Number(numero); 
        const numDos = Number(numeroAnterior); 
        switch (ultimaOperacion.current) {
            case Operadores.div:
                setNumero(String(numDos / numUno));
                break;
        
            case Operadores.res:
                setNumero(String(numDos - numUno));
                break;
        
            case Operadores.sum:
                setNumero(String(numDos + numUno));
                break;
        
            case Operadores.mul:
                setNumero(String(numDos * numUno));
                break;
            default:
                break;
        }
        setnumeroAnterior('0');
    }
    return (
        <View style = {style.calculadoraContainer}>
            {
                (numeroAnterior !== '0' && (<Text style = {style.resultadoPeke}>{numeroAnterior}</Text>))
            }
            <Text numberOfLines = {1} adjustsFontSizeToFit style = {style.resultado}>{numero}</Text>

            <View style = {style.fila}>
                <BotonCalc texto = "AC" color = "#5D5D5D" accion = {btnAC}/>
                <BotonCalc texto = "+/-" color = "#5D5D5D" accion = {positivoNegativo}/>
                <BotonCalc texto = "del" color = "#5D5D5D" accion = {btnDel}/>
                <BotonCalc texto = "/" color = "#FF9427" accion = {btnDiv}/>
            </View>
            <View style = {style.fila}>
                <BotonCalc texto = "7" accion = {armarNumero}/>
                <BotonCalc texto = "8" accion = {armarNumero}/>
                <BotonCalc texto = "9" accion = {armarNumero}/>
                <BotonCalc texto = "x" color = "#FF9427" accion = {btnMult}/>
            </View>
            <View style = {style.fila}>
                <BotonCalc texto = "4" accion = {armarNumero}/>
                <BotonCalc texto = "5" accion = {armarNumero}/>
                <BotonCalc texto = "6" accion = {armarNumero}/>
                <BotonCalc texto = "-" color = "#FF9427"accion = {btnRes}/>
            </View>
            <View style = {style.fila}>
                <BotonCalc texto = "1" accion = {armarNumero}/>
                <BotonCalc texto = "2" accion = {armarNumero}/>
                <BotonCalc texto = "3" accion = {armarNumero}/>
                <BotonCalc texto = "+" color = "#FF9427" accion = {btnSum}/>
            </View>
            <View style = {style.fila}>
                <BotonCalc texto = "0" ancho = {true} accion = {armarNumero}/>
                <BotonCalc texto = "." accion = {armarNumero}/>
                <BotonCalc texto = "=" color = '#FF9427' accion = {calcular}/>
            </View>
        </View>

    )
}
