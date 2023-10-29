import React from "react";
import TituloCenarios from "../../components/TituloCenarios";
import ScrollReveal from "../../utils/animations/ScrollReveal";
import IconRegras from '../../assets/imgs/regras.png'
import { useInView } from 'react-intersection-observer';
import BackgroundImage from '../../assets/imgs/secao-regras-bg-secao.png'

const Regras = () => {
  const { ref: regrasRef, inView: inViewRegras } = useInView();
  return (
    <div className="regras md:px-20 relative">
      <img className="absolute z-10 w-[700px] top-[450px] 2xl:top-[400px]" src={BackgroundImage} alt="" />
      <div className="py-6 px-6 md:py-20 md:px-20">
        <div ref={regrasRef} className={`${inViewRegras ? 'fade-in-left':''} flex items-end gap-8 pb-20`}>
          <div className="w-40">
            <img src={IconRegras} alt="" />
          </div>
          <div className="text-5xl md:text-6xl text-mOrange font-black">REGRAS</div>
        </div>
        <div className="text-justify md:text-start md:grid md:grid-cols-2 gap-20">
          <div>
            <ScrollReveal className="text-white text-xl font-medium">
              O Mistura Explosiva é dividido em quatro fases, que são
              representadas pelos Cenários N° 1, N° 2, N° 3 e N° 4. Cada um
              deles representa uma etapa, que vai do desconhecimento até a
              informação correta apresentada por um Profissional da Química.
            </ScrollReveal>
            <TituloCenarios>Cenário Nº 1</TituloCenarios>
            <ScrollReveal className="text-white text-xl font-medium">
              O jogador conhecerá o “Dr.” Amon Níako e aprenderá um pouco sobre
              os riscos das misturas caseiras de produtos de limpeza, para não
              ser influenciado por ele.
            </ScrollReveal>
            <TituloCenarios>Cenário Nº 2</TituloCenarios>
            <ScrollReveal className="text-white text-xl font-medium">
              O jogador será informado que o Conselho Federal de Química e a
              ABIPLA uniram forças para proteger a sociedade das desinformações
              e das misturas caseiras de produtos de limpeza, que são
              disseminadas por influenciadores mal-informados, como o “Dr.” Amon
              Níako.
            </ScrollReveal>
            <TituloCenarios>Cenário Nº 3</TituloCenarios>
            <ScrollReveal className="text-white text-xl font-medium">
              O jogador conhecerá algumas das ações de combate às fake news
              sobre os produtos de limpeza, que são feitas pela parceria entre
              CFQ e ABIPLA.
            </ScrollReveal>
            <TituloCenarios>Cenário Nº 4</TituloCenarios>
            <ScrollReveal className="text-white text-xl font-medium">
              O jogador conhecerá a Profissional da Química Hebe Limpy e
              aprenderá como identificar saneantes regularizados junto à ANVISA.
              O jogador também descobrirá que a Hebe combate a desinformação
              sobre produtos de limpeza e orienta a sociedade com as informações
              corretas.
            </ScrollReveal>
          </div>
          <ScrollReveal className="bg-mYellow rounded-3xl px-8 py-8 z-20">
            <ScrollReveal className="text-mPurple text-xl font-bold mb-5">
              Mas atenção: ao passar por um cenário, a contagem de movimento do
              dado é interrompida. Por exemplo: o(a) jogador(a) está a uma casa
              do cenário, jogou o dado e tirou o número 5. Nesse caso, ele(a)
              deverá se mover apenas para entrar no cenário. Uma vez lá dentro,
              o(a) jogador(a) deve acessar o QR Code com a ajuda de um celular,
              assistir ao vídeo e executar a ação falada.
            </ScrollReveal>
            <ScrollReveal className="text-mPurple text-xl font-bold mb-5">
              Exceção: se alguma carta ou jogada obrigar um(a) jogador(a) a
              voltar casas no tabuleiro. O cenário é o limite de retorno de um
              jogador.
            </ScrollReveal>
            <ScrollReveal className="text-mPurple text-xl font-bold mb-5">
              {" "}
              Outro exemplo: um(a) jogador(a) está uma casa após o cenário e uma
              carta ou jogada o(a) obriga a voltar três casas. Nesse caso,
              ele(a) voltará apenas até entrar no cenário novamente. E quando
              estiver lá dentro, uma vez que ele(a) já passou por lá
              anteriormente, não precisará assistir ao vídeo novamente. Basta
              jogar o dado e seguir o curso normal do jogo.
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Regras;
