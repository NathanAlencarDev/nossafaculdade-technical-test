export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Institucional */}
        <div>
          <h3 className="font-semibold mb-2">Institucional</h3>
          <ul className="space-y-1">
            <li>CPA</li>
            <li>Documentos Institucionais</li>
            <li>Política de privacidade</li>
            <li>Quem somos</li>
          </ul>
        </div>

        {/* Acadêmico */}
        <div>
          <h3 className="font-semibold mb-2">Acadêmico</h3>
          <ul className="space-y-1">
            <li>Cursos</li>
            <li>Graduação Presencial</li>
            <li>Graduação Semi Presencial</li>
            <li>Graduação EAD</li>
          </ul>
        </div>

        {/* Atendimento */}
        <div>
          <h3 className="font-semibold mb-2">Atendimento</h3>
          <ul className="space-y-1">
            <li>comercial@nossafaculdade.com.br</li>
            <li>secretaria@nossafaculdade.com.br</li>
            <li>(88) 0800 1770 800</li>
            <li>(88) 99913-9972</li>
          </ul>
        </div>

        {/* Informações Adicionais */}
        <div>
          <h3 className="font-semibold mb-2">Redes Sociais</h3>
          <p className="mb-2">QR Code de Validação do MEC</p>
          <p className="mb-2">Consulte o cadastro da Instituição no Sistema e-MEC</p>
          <p className="mb-2">
            Av. Padre Cícero, 3000 - São José, Crato - CE, 63132-022
          </p>
          <p className="mb-2">Horário de atendimento: Segunda a sexta das 8h às 17h</p>
          <p>UNIFAMEC - CNPJ: 23.957.843/0001-86</p>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        © 2025 UNIFAMEC. Todos os direitos reservados.
      </div>
    </footer>
  );
};
