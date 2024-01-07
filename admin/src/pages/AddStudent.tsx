const AddStudent = () => {
  return (
    <div className="w-full flex">
      <form className="w-full">
        <div className="rounded-md border border-slate-300 p-6">
          <h2 className="font-bold">Dados Pessoais</h2>
        </div>
        <div className="rounded-md border border-slate-300 p-6 flex flex-col">
          {/* Financeiro e Nome do Aluno */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="nome" className="block text-sm font-bold ">
                Responsável Financeiro:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
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
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Nome Completo"
              />
            </div>
          </div>
          {/*  Usuário e Senha */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="profissao" className="block text-sm font-bold">
                Nome de Usuário:
              </label>
              <input
                type="text"
                id="username"
                name="username"
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
                id="password"
                name="password"
                className="border border-gray-400 rounded w-full p-2"
                placeholder="Senha"
              />
            </div>
          </div>
          {/* Email Telefone e Profissão */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="telefone" className="block text-sm font-bold">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                type="text"
                id="rg"
                name="rg"
                className="border border-gray-400 rounded w-full p-2"
                placeholder="RG"
              />
            </div>
            <div className="w-full">
              <label htmlFor="cpf" className="block text-sm font-bold">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
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
              <select>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="permission" className="block text-sm font-bold">
                Permissão de Acesso
              </label>
              <select>
                <option value="student">Aluno</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="status" className="block text-sm font-bold">
                Contrato
              </label>
              <select>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
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
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
