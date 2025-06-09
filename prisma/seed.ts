import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Limpando os cursos existentes...');
  await prisma.course.deleteMany();

  console.log('🌱 Inserindo novos cursos...');
  await prisma.course.createMany({
    data: [
      {
        title: 'Direito',
        description: 'Curso de Direito com ênfase em prática jurídica, legislação e ética profissional.',
        price: 2500,
        imageUrl: '/images/courses-banner/direito.webp',
        category: 'Graduação Presencial',
        content: 'A formação jurídica prepara o aluno para atuar como advogado, promotor, juiz e demais áreas jurídicas.',
        modality: 'Bacharelado Presencial',
        duration: '5 anos (10 semestres)',
        slug: 'direito',
      },
      {
        title: 'Enfermagem',
        description: 'Curso de Enfermagem com foco em cuidado hospitalar, comunitário e saúde pública.',
        price: 1200,
        imageUrl: '/images/courses-banner/enfermagem.webp',
        category: 'Graduação Presencial',
        content: 'O curso capacita o estudante para atuar em clínicas, hospitais e unidades básicas de saúde.',
        modality: 'Bacharelado Presencial',
        duration: '5 anos (10 semestres)',
        slug: 'enfermagem',
      },
      {
        title: 'Odontologia',
        description: 'Formação completa em Odontologia com ênfase em clínica e prevenção.',
        price: 1800,
        imageUrl: '/images/courses-banner/odontologia.webp',
        category: 'Graduação Presencial',
        content: 'Capacita profissionais para atuar na saúde bucal, desde prevenção até procedimentos cirúrgicos.',
        modality: 'Bacharelado Presencial',
        duration: '5 anos (10 semestres)',
        slug: 'odontologia',
      },
      {
        title: 'Psicologia',
        description: 'Curso de Psicologia com abordagem clínica, social e organizacional.',
        price: 1500,
        imageUrl: '/images/courses-banner/psicologia.webp',
        category: 'Graduação Presencial',
        content: 'Prepara o aluno para compreender o comportamento humano em diferentes contextos.',
        modality: 'Bacharelado Presencial',
        duration: '5 anos (10 semestres)',
        slug: 'psicologia',
      },
      {
        title: 'Terapia Ocupacional',
        description: 'Curso voltado à reabilitação física, mental e social.',
        price: 1100,
        imageUrl: '/images/courses-banner/terapia_ocupacional.webp',
        category: 'Graduação Presencial',
        content: 'Forma profissionais capazes de atuar com inclusão social e qualidade de vida de pessoas com deficiência.',
        modality: 'Bacharelado Presencial',
        duration: '4 anos (8 semestres)',
        slug: 'terapia-ocupacional',
      },
    ],
  });
  

  console.log('✅ Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
