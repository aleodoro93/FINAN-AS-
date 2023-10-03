import React from 'react'
import Styles from "./header.module.css"
import PlusIcon from '../../public/icon/PlusIcon'
const Header = () => {
  return (
    <div className={Styles.container}>
        <header className={Styles.header}>
            <h1 className={Styles.logo}>Finanças<PlusIcon/></h1>
            
            
            <nav>
                <ul className={Styles.lista}>
                <li><a className={Styles.link}>Home</a></li>
                <li><a className={Styles.link}>Quem somos</a></li>
                <li><a className={Styles.link}>Entrar</a></li>
                <button className={Styles.botao}>Criar Conta</button>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header