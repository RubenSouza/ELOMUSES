import { createStudent } from "../utils/students";

const AddStudent = () => {
  const handleAddStudent = async () => {
    const responavel = (
      document.getElementById("responsavel") as HTMLInputElement
    ).value;
    const aluno = (document.getElementById("aluno") as HTMLInputElement).value;
    const user = (document.getElementById("usuario") as HTMLInputElement).value;
    const senha = (document.getElementById("senha") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const telefone = (document.getElementById("telefone") as HTMLInputElement)
      .value;
    const profissao = (document.getElementById("profissao") as HTMLInputElement)
      .value;
    const rg = (document.getElementById("rg") as HTMLInputElement).value;
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value;
    const nascimento = (
      document.getElementById("nascimento") as HTMLInputElement
    ).value;
    const status = (document.getElementById("status") as HTMLInputElement)
      .value;
    const permissao = (document.getElementById("permissao") as HTMLInputElement)
      .value;
    const contrato = (document.getElementById("contrato") as HTMLInputElement)
      .value;

    const endereco = (document.getElementById("endereco") as HTMLInputElement)
      .value;
    const numero = (document.getElementById("numero") as HTMLInputElement)
      .value;
    const complemento = (
      document.getElementById("complemento") as HTMLInputElement
    ).value;
    const cep = (document.getElementById("cep") as HTMLInputElement).value;
    const cidade = (document.getElementById("cidade") as HTMLInputElement)
      .value;
    const bairro = (document.getElementById("bairro") as HTMLInputElement)
      .value;
    const estado = (document.getElementById("estado") as HTMLInputElement)
      .value;

    const data = {
      responsible: responavel,
      name: aluno,
      username: user,
      password: senha,
      email: email,
      phone: telefone,
      profession: profissao,
      RG: rg.toString(),
      CPF: cpf.toString(),
      birthDate: nascimento,
      status: status,
      isAdmin: permissao,
      contract: contrato,
      adress: endereco,
      number: numero,
      complement: complemento,
      zipCode: cep,
      city: cidade,
      neighborhood: bairro,
      state: estado,
    };

    console.log(data);
    await createStudent(data);
  };

  return (
    <div className="w-full flex">
      <form
        className="w-full"
        onSubmit={e => {
          e.preventDefault();
          handleAddStudent();
        }}
      >
        <div className="rounded-md border border-slate-300 p-6">
          <h2 className="font-bold">Dados Pessoais</h2>
        </div>
        <div className="rounded-md border border-slate-300 p-6 flex flex-col">
          {/* Financeiro e Nome do Aluno */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="responsavel" className="block text-sm font-bold ">
                Responsável Financeiro:
              </label>
              <input
                type="text"
                id="responsavel"
                name="responsavel"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Nome Completo"
              />
            </div>
            <div className="w-full">
              <label htmlFor="aluno" className="block text-sm font-bold">
                Nome do Aluno:
              </label>
              <input
                type="text"
                id="aluno"
                name="aluno"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Nome Completo"
              />
            </div>
          </div>
          {/*  Usuário e Senha */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="usuario" className="block text-sm font-bold">
                Nome de Usuário:
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Nome de Usuário"
              />
            </div>
            <div className="w-full">
              <label htmlFor="senha" className="block text-sm font-bold">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Senha"
              />
            </div>
          </div>
          {/* Email Telefone e Profissão */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-bold">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="E-mail"
              />
            </div>
            <div className="flex space-x-4 w-full">
              <div className="w-full">
                <label htmlFor="telefone" className="block text-sm font-bold">
                  Telefone:
                </label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  required
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Telefone"
                />
              </div>
              <div className="w-full">
                <label htmlFor="profissao" className="block text-sm font-bold">
                  Profissão:
                </label>
                <input
                  type="text"
                  id="profissao"
                  name="profissao"
                  required
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Profissão"
                />
              </div>
            </div>
          </div>
          {/* RG CPF e Data de nascimento */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="rg" className="block text-sm font-bold">
                RG:
              </label>
              <input
                type="number"
                id="rg"
                name="rg"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="RG"
              />
            </div>
            <div className="w-full">
              <label htmlFor="cpf" className="block text-sm font-bold">
                CPF:
              </label>
              <input
                type="number"
                id="cpf"
                name="cpf"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="CPF"
              />
            </div>
            <div className="w-full">
              <label htmlFor="nascimento" className="block text-sm font-bold">
                Data de Nascimento:
              </label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                required
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Data de Nascimento"
              />
            </div>
          </div>
          {/* Status, acesso e contrato */}
          <div className="flex items-center space-x-4">
            <div className="w-full flex flex-col">
              <label htmlFor="status" className="block text-sm font-bold">
                Status do Aluno
              </label>
              <select id="status">
                <option value="Liberado">Liberado</option>
                <option value="Bloqueado">Bloqueado</option>
              </select>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="permissao" className="block text-sm font-bold">
                Permissão de Acesso
              </label>
              <select id="permissao">
                <option value="true">Aluno</option>
                <option value="false">Administrador</option>
              </select>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="contrato" className="block text-sm font-bold">
                Contrato
              </label>
              <select id="contrato">
                <option value="0">Inativo</option>
                <option value="1">Mensal</option>
                <option value="3">3 Meses</option>
                <option value="6">6 Meses</option>
                <option value="12">1 Ano</option>
              </select>
            </div>
          </div>
        </div>
        {/* Endereço */}
        <div className="">
          <div className="rounded-md border border-slate-300 p-6">
            <h2 className="font-bold">Endereço</h2>
          </div>
          <div className="rounded-md border border-slate-300 p-6">
            <div className="flex space-x-4 items-center justify-center">
              <div className="flex items-center w-full">
                <div className="w-full">
                  <label htmlFor="endereco" className="block text-sm font-bold">
                    Endereço:
                  </label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                    className="border border-gray-400 rounded w-full p-2"
                    placeholder="Endereço"
                  />
                </div>
              </div>
              <div className="flex w-full space-x-4 items-center">
                <div className="w-full">
                  <label htmlFor="numero" className="block text-sm font-bold">
                    Número:
                  </label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    required
                    className="border border-gray-400 rounded w-full p-2"
                    placeholder="Número"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="complemento"
                    className="block text-sm font-bold"
                  >
                    Complemento:
                  </label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    required
                    className="border border-gray-400 rounded w-full p-2"
                    placeholder="Complemento"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="cep" className="block text-sm font-bold">
                  CEP:
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  required
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="CEP"
                />
              </div>
              <div className="w-full">
                <label htmlFor="cidade" className="block text-sm font-bold">
                  Cidade:
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Cidade"
                />
              </div>
              <div className="w-full">
                <label htmlFor="bairro" className="block text-sm font-bold">
                  Bairro:
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  required
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Bairro"
                />
              </div>
              <div className="w-full">
                <label htmlFor="estado" className="block text-sm font-bold">
                  Estado:
                </label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  required
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Estado"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-end justify-end">
          <button
            className="bg-blue-500 text-slate-100 
        p-2 rounded-md w-36 my-4"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
