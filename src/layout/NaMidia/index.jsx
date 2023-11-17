import React from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "../../utils/animations/ScrollReveal";
import clipimg1 from "../../assets/imgs/clipping_01.png";
import clipimg2 from "../../assets/imgs/clipping_02.png";
import clipimg3 from "../../assets/imgs/clipping_03.png";
import clipimg4 from "../../assets/imgs/clipping_04.png";
import clipimg5 from "../../assets/imgs/clipping_05.png";
import clipimg6 from "../../assets/imgs/clipping_06.png";
import clipimg7 from "../../assets/imgs/clipping_07.png";


const NaMidia = () => {
  const { ref: naMmidiaRef, inView: inViewNaMidia } = useInView();
  return (
    <div className="py-4 px-4 md:py-20 md:px-40 bg-mPurple">
      <h1
        ref={naMmidiaRef}
        className={`${
          inViewNaMidia ? "fade-in-left" : ""
        } text-3xl md:text-6xl font-black text-white`}
      >
        NA MÍDIA
      </h1>
      <h3 className="text-xl md:text-2xl font-bold py-10 text-white">
        Acompanhe algumas inserções da campanha “Mistura Explosiva: Limpando
        conceitos, clareando ideias!” nos principais veículos de comunicação do
        país ao longo dos anos.
      </h3>
      <div>
   
        <div className="flex flex-col  md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
          {/* initial session */}
          <a
            href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/geral/audio/2022-03/campanha-previne-receitas-caseiras-que-misturam-produtos-de-limpeza"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg1} alt="Imagem"  style={{}}/>
              </div>
              <div className="flex justify-center mb-1 text-center">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">RadioAgência</span> -
                  Campanha previne receitas caseiras que misturam produtos de
                  limpeza
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
          {/* initial session */}
          <a
            href="https://www.redetv.uol.com.br/jornalismo/redetvnews/videos/cidades/produtos-de-limpeza-misturas-sao-perigosas"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg2} alt="Imagem" />
              </div>
              <div className="flex justify-center mb-1 text-center p-2">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">RedeTV! News</span>-
                  Produtos de limpeza: misturas são perigosas
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
        </div>

        <div className="flex flex-col  md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
          {/* initial session */}
          <a
            href="https://householdinnovation.com.br/abipla-e-cfq-alertam-sobre-misturas-caseiras-de-limpeza/"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg3} alt="Imagem" />
              </div>
              <div className="flex justify-center mb-1 text-center ">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">HOUSEHOLD INNOVATION</span>
                   - ABIPLA e CFQ alertam sobre misturas caseiras de limpeza
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
          {/* initial session */}
          <a
            href="https://www.youtube.com/watch?v=J-iLXojD_c4&t=113s"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg5} alt="Imagem" />
              </div>
              <div className="flex justify-center mb-1 text-center p-2">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">Notícias do SBT | DF</span>
                   - Receitas Perigosas
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
        </div>

        <div className="flex flex-col  md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
          {/* initial session */}
          <a
            href="https://noticias.r7.com/jr-24h/videos/uso-de-formulas-caseiras-na-limpeza-pode-causar-risco-a-saude-15122022"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg4} alt="Imagem" />
              </div>
              <div className="flex justify-center mb-1 text-center">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">R7 | JR 24h</span>
                   - Uso de fórmulas caseiras na limpeza pode causar risco à saúde
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
          {/* initial session */}
          <a
            href="https://www.quimica.com.br/o-risco-das-misturas-caseiras-abipla/"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg6} alt="Imagem" />
              </div>
              <div className="flex justify-center mb-1 text-center p-2">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">quimica.com.br</span>-
                  quimica.com.br - Os riscos das misturas caseiras!
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
        </div>

        <div className="flex flex-col  md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
          {/* initial session */}
          <a
            href="https://extra.globo.com/economia/noticia/2023/04/misturar-produtos-de-limpeza-traz-risco-a-saude.ghtml"
            target="_blank"
            rel="noopener noreferrer"
            className="card border border-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20"
          >
            <ScrollReveal className="card bg-transparent">
              <div>
                <img className="img-campanha" src={clipimg7} alt="Imagem" />
              </div>
              <div className="flex justify-center mb-1 text-center p-2">
                <p className="text-white mt-3 text-sm">
                  <span className="font-bold text-white">EXTRA | Economia</span> 
                   - Misturar produtos de limpeza traz risco à saúde. Combinações podem ser perigosas
                </p>
              </div>
            </ScrollReveal>
          </a>
          {/* end session */}
        </div>
      </div>
    </div>
  );
};

export default NaMidia;
