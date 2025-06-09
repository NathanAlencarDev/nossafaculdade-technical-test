"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-300">
        <button
            className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold"
            onClick={() => setOpen(!open)}
        >
            {title}
            <span>{open ? "-" : "+"}</span>
        </button>
        {open && <div className="pb-4 text-gray-700">{children}</div>}
        </div>
    );
};

export default function SobrePage() {
    return (
        <>
        <Header />
        <main className="pt-45">
        <section className="pt-16 bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-black">
            <h1 className="text-4xl font-bold mb-8">Institucional</h1>
            <p className="mb-8 text-gray-700">
                Página institucional com conteúdos de apresentação, missão e história
            </p>

            <AccordionItem title="Quem Somos">
            <p>
                A Faculdade Metropolitana do Cariri – UNIFAMEC é uma instituição que preza pela qualidade da educação, formando profissionais qualificados, éticos e comprometidos com o desenvolvimento da sociedade.
                A partir de uma visão que a insere no plano nacional, a UNIFAMEC se adequa às exigências da nova era, buscando sempre a inovação e a autonomia para avançar no ensino superior.
                Integrante do grupo Nossa Faculdade, a UNIFAMEC compartilha da missão de ampliar o acesso à educação superior de excelência em todo o Brasil. 
                Essa conexão fortalece sua estrutura acadêmica, amplia oportunidades para os alunos e garante o alinhamento com as melhores práticas de gestão, tecnologia e inovação no ensino. 
                Com sede em Crato-CE, a UNIFAMEC valoriza a formação integral do estudante, unindo teoria e prática, tecnologia e humanização, tradição e inovação. 
                A instituição conta com um corpo docente qualificado, infraestrutura moderna e metodologias ativas de ensino, promovendo um ambiente propício ao desenvolvimento acadêmico e pessoal. 
                Mais do que um centro de formação, a UNIFAMEC é um espaço de transformação. Por meio da pesquisa, da extensão, da prática profissional e do compromisso com o bem-estar coletivo, a instituição contribui com o desenvolvimento do Cariri e forma profissionais prontos para enfrentar os desafios de um mundo em constante mudança.
            </p>
            </AccordionItem>

            <AccordionItem title="Missão, Visão e Valores">
            <div className="space-y-6 text-gray-700">
                <div>
                <h3 className="font-semibold text-lg mb-1">Missão</h3>
                <p>
                    Promover educação de qualidade formando profissionais e cidadãos competentes, éticos, empreendedores e comprometidos com o desenvolvimento da economia regional sustentável.
                </p>
                </div>

                <div>
                <h3 className="font-semibold text-lg mb-1">Visão</h3>
                <p>
                    Ser reconhecida pela excelência em seus projetos pedagógicos, disseminando a qualidade do saber e contribuindo para a preservação e valorização das características étnico-culturais e ambientais.
                </p>
                </div>

                <div>
                <h3 className="font-semibold text-lg mb-1">Valores</h3>
                <div className="space-y-4">
                    <div>
                    <h4 className="font-semibold">Responsabilidade social e ambiental:</h4>
                    <p>
                        A UNIFAMEC acredita que a educação de qualidade vai além da formação técnica: ela transforma realidades e constrói um futuro mais justo e sustentável. Por isso, a responsabilidade social e ambiental é um dos pilares que orientam a atuação da instituição, integrando o ensino, a pesquisa e a extensão com ações que geram impacto positivo na comunidade e no meio ambiente.
                        Com iniciativas voltadas à promoção da cidadania, à inclusão social e ao desenvolvimento sustentável, a UNIFAMEC realiza projetos sociais universitários, campanhas educativas, atividades extensionistas e parcerias com organizações públicas e privadas que compartilham do mesmo compromisso com o bem comum.
                        A atuação dos alunos em projetos sociais permite a vivência prática dos conteúdos aprendidos em sala, além de fortalecer o vínculo com a comunidade.
                        No campo da sustentabilidade na educação, a UNIFAMEC promove ações de conscientização ambiental, uso racional de recursos, descarte correto de resíduos e incentivo à responsabilidade ecológica em todos os seus setores.
                        Ao unir formação acadêmica com consciência social e ambiental, a instituição reafirma seu papel como agente de transformação e desenvolvimento responsável no Cariri e em todo o país.
                    </p>
                    </div>

                    <div>
                    <h4 className="font-semibold">Transparência, Compromisso com a ética e a qualidade:</h4>
                    <p>
                        Na UNIFAMEC, a transparência institucional, a ética educacional e o compromisso com a qualidade acadêmica fazem parte da identidade da instituição.
                        Cada decisão, processo e relação é pautado por princípios que reforçam o respeito ao estudante, à comunidade e às diretrizes da educação superior brasileira.
                        Acreditamos que uma gestão educacional transparente é fundamental para garantir a confiança de alunos, professores, parceiros e sociedade.
                        Por isso, mantemos canais abertos de comunicação, disponibilizamos informações de forma clara e atualizada, e incentivamos a participação ativa da comunidade acadêmica em processos avaliativos e decisões institucionais.
                        Nosso compromisso com a qualidade na educação superior está presente na escolha de um corpo docente qualificado, em uma estrutura moderna e funcional, em práticas pedagógicas inovadoras e em ações contínuas de autoavaliação e melhoria.
                        Ética, integridade e excelência caminham juntas na formação de profissionais preparados para atuar com responsabilidade em suas áreas e transformar positivamente o mundo ao seu redor.
                    </p>
                    </div>

                    <div>
                    <h4 className="font-semibold">Inovação e empreendedorismo:</h4>
                    <p>
                        A UNIFAMEC entende que formar profissionais para o futuro exige mais do que conhecimento técnico: exige incentivar o pensamento criativo, a autonomia e a capacidade de transformar ideias em soluções.
                        Por isso, a inovação na educação e o espírito empreendedor estão no centro do nosso modelo de ensino.
                        Por meio de uma abordagem prática, colaborativa e voltada ao mercado, nossos cursos estimulam a educação empreendedora desde os primeiros semestres, preparando os alunos para identificar oportunidades, propor soluções criativas e atuar com protagonismo em diferentes contextos profissionais.
                        As disciplinas, projetos interdisciplinares e atividades extensionistas incentivam o desenvolvimento de competências essenciais para quem deseja empreender ou inovar dentro das organizações.
                        A UNIFAMEC também promove eventos, oficinas e parcerias com empresas e instituições que fortalecem o empreendedorismo universitário e a cultura da inovação no ambiente acadêmico.
                        Ao investir em uma formação que une conhecimento, atitude e visão de futuro, a instituição reafirma seu papel como um polo de transformação no Cariri e em todo o Brasil.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </AccordionItem>

            <AccordionItem title="Comissão Própria de Avaliação (CPA)">
            <p>
                A sigla CPA é a Comissão Própria de Avaliação, instituída pelo SINAES - Sistema Nacional de Avaliação da Educação Superior, e é responsável pela implantação e pelo desenvolvimento de processos de avaliação institucional. 
                Os instrumentos de avaliação (questionários) desenvolvidos pela CPA constituem importantes ferramentas para o planejamento educacional, sempre em busca da melhoria da qualidade da formação, da produção do conhecimento e da extensão. 
                Além disso, esses instrumentos permitem que sejam identificadas áreas problemáticas ou carentes de adequado investimento institucional, apontando exatamente os setores que requerem melhorias.
            </p>
            </AccordionItem>

            <AccordionItem title="Trabalhe Conosco">
            <p>
                Você sonha em fazer parte de uma instituição que transforma vidas por meio da educação? A UNIFAMEC está em constante crescimento e busca profissionais comprometidos, criativos e apaixonados pelo que fazem. Aqui, valorizamos o desenvolvimento humano, o trabalho em equipe e o desejo de impactar positivamente a sociedade por meio do ensino, da pesquisa e da extensão. 
                Como parte do grupo Nossa Faculdade, estamos conectados a uma rede nacional de instituições que compartilham os mesmos valores: qualidade acadêmica, inovação e compromisso com o futuro. Trabalhar na UNIFAMEC é ter a oportunidade de crescer em um ambiente colaborativo, que respeita as diferenças e estimula o protagonismo de seus colaboradores. 
                Mesmo quando não há processos seletivos abertos, mantemos nosso banco de talentos ativo para receber profissionais interessados em construir uma carreira no ensino superior privado. 
                Valorizamos professores, técnicos administrativos, profissionais da área da saúde, comunicação, tecnologia e muito mais. Se você acredita no poder da educação e quer contribuir com uma instituição séria, humana e comprometida com a transformação social, envie seu currículo e venha fazer parte do nosso time! 📩 Envie seu currículo para: rh@nossafaculdade.com.br contendo: nome completo, e-mail, área de interesse, currículo (anexo) e mensagem. UNIFAMEC – Um passo para o seu futuro. E talvez, o próximo passo da sua carreira.
            </p>
            </AccordionItem>
        </section>
        </main>
        <Footer />
        </>
    );
}
