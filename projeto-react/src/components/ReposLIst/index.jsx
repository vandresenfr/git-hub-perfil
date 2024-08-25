import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        let isMounted = true;
        setEstaCarregando(true)
        setError('')
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok){
                throw new Error ('Não foi possivel encontrar o usuario.')
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 3000)
        })
        .catch(error => {
            if (isMounted) {
                setEstaCarregando(false)
                setError(error.message);
            }
        });

        return () => {
            isMounted = false;
        }
    }, [nomeUsuario]);

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                    <b>Nome:</b> 
                    {repositorio.name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b>
                    {repositorio.language}
                    </div>
                    <a className={styles.itemLink} target="_black" href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
        </ul>
        )}
        </div>
    )
}

export default ReposList;