import { useState, useEffect } from "react";

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o componente inciou')

        return () => {
            console.log('o componente finalizou')
        }
    }, []);

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('materia A mudou para:' + materiaA)
    }, [materiaA, materiaB, materiaC]);


    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá, {nome} não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;