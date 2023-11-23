import { useState } from "react";

const Formulario = () => {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    nomeEscola: "",
    endereco: "",
    cidade: "",
    estado: "",
    nomeResponsavel: "",
    emailContato: "",
    telefoneContato: "",
    numAlunos: "",
    serieAno: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se os campos obrigatórios foram preenchidos
    if (
      !formData.nomeResponsavel ||
      !formData.emailContato ||
      !formData.telefoneContato
    ) {
      alert(
        `Por favor, preencha os campos obrigatórios: Nome, Email e Telefone`
      );
      return;
    }

    try {
      // Fazer uma solicitação POST para a API com os dados do formulário
      const response = await fetch(
        "https://api.sheetmonkey.io/form/p3ochtGU2dozgJ53Ng7ZR5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Verificar se a solicitação foi bem-sucedida
      if (response.status(200) || response.status(201)) {
        // Limpar o formulário
        setFormData({
          nomeEscola: "",
          endereco: "",
          cidade: "",
          estado: "",
          nomeResponsavel: "",
          emailContato: "",
          telefoneContato: "",
          numAlunos: "",
          serieAno: "",
          mensagem: "",
        });

        alert("Obrigado pelo envio do formulário! Seu formulário foi enviado com sucesso.");
      } else {
        console.error(
          "Falha ao enviar dados do formulário:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro ao enviar dados do formulário:", error.message);
    }
  };

  return (
    <div className="formulario container p-20">
      <form onSubmit={handleSubmit} className="mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Mistura Explosiva na Escola
        </h1>

        <p className="text-white">
          Preencha o formulário abaixo para cadastrar sua escola no projeto{" "}
          <br /> <span className="font-bold">"Mistura Explosiva".</span>
        </p>

        {/* Dados da Escola */}
        <div className="col-span-2 mb-4">
          <h2 className="text-xl mb-2 text-white">Dados da Escola</h2>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="nomeEscola"
              value={formData.nomeEscola}
              onChange={handleChange}
              placeholder="Nome da Escola"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Endereço"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Cidade"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              placeholder="Estado"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="col-span-2 mb-4 mt-2">
          <h2 className="text-xl mb-2 text-white">Informações de Contato</h2>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="nomeResponsavel"
              value={formData.nomeResponsavel}
              onChange={handleChange}
              placeholder="Nome do Responsável"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <input
              type="email"
              name="emailContato"
              value={formData.emailContato}
              onChange={handleChange}
              placeholder="E-mail de Contato"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <input
              type="tel"
              name="telefoneContato"
              value={formData.telefoneContato}
              onChange={handleChange}
              placeholder="Telefone de Contato"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
        </div>

        {/* Outras Informações */}
        <div className="col-span-2 mb-4">
          <h2 className="text-xl mb-2 text-white">Outras Informações</h2>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 md:col-span-1">
            <input
              type="number"
              name="numAlunos"
              value={formData.numAlunos}
              onChange={handleChange}
              placeholder="Número de Alunos na Escola"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="serieAno"
              value={formData.serieAno}
              onChange={handleChange}
              placeholder="Série/Ano Participante"
              className="w-full p-2 mb-2 border rounded"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Mensagem Adicional"
            className="w-full p-2 mb-2 border rounded"
          />
        </div>

        {/* Botão de Envio */}
        <div className="flex items-center justify-center mt-2">
          <button
            type="submit"
            className="bg-[#EE7C4A] text-white p-4 font-bold rounded-[24px] hover:bg-[#fca079] transition duration-300 mx-auto w-60"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
