import React from "react";
import banner1 from "/banner1.svg"
import Styles from "./bannerBemVindo.module.css"
const BannerBemVindo = () => {
  return (
    
    <div className={Styles.container}>
      <div className={Styles.caixaTexto}>
        <h2 className={Styles.titulo1}>Bem-vindo ao Finanças+</h2>
        <h3 className={Styles.descricao}>
          O seu aliado para uma gestão financeira bem-sucedida e a realização
          dos seus objetivos financeiros.
        </h3>

        <h3 className={Styles.paragrafoGrande}>
          Nosso aplicativo foi projetado para proporcionar a você o controle
          total sobre suas finanças pessoais, tornando o processo de gerenciar
          suas receitas, despesas e metas financeiras uma tarefa simples e
          prazerosa.
        </h3>
      </div>

      <div>
        <img src={banner1}alt="" />
      </div>
      </div>
    
  );
};

export default BannerBemVindo;
