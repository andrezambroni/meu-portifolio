import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Empresa de marketing que une  comunicação, tecnologia e performance
  Manutenção de projetos, sites e campanhas
  Acompanhamento de todo ciclo de vida do software, desde a primeira negociação até a entrega final do produto
  Melhorias funcionais e estéticas nos websites 
  Participação nos ritos e cerimônias de SCRUM.
  Tecnologias: HTML, CSS, C, C++, JavaScript, React, Node, PHP, WordPress e Banco de dados.
  `,
  "Estágio em Desenvolvimento Full-stack ",
  "Hagens",
  "Set/2022 - atual"
);

hoverChangeExperience(
  ".zuplae",
    `Estágio em Desenvolvimento Full-stack - Fev/2020 - Out/2020
  Responsável pela migração e alteração de informações no banco de dados.  
  Desenvolvimento Full Stack para projetos do núcleo de Manutenções de projetos da própria empresa e de parceiras.  
  Tecnologias: SQL, HTML, CSS, Java, JavaScript`
,
  "PUC NTIC",
  "Estágio em Desenvolvimento Full-stack", 
  "Fev/2020 - Out/2020"
);

/*hoverChangeExperience(
  ".codigofontetv",
  `Sou Manager de Projetos da equipe universitária de esportes eletrônicos da PUC Campinas`,
  "Manager de Projetos ",
  "PUC Campinas - Cardinals. ",
  "Jan/2020-atual"
);*/

hoverChangeExperience(
  ".contweb",
  `Sou Manager de Projetos da equipe universitária de esportes eletrônicos da PUC Campinas`,
  "Manager de Projetos ",
  "PUC Campinas - Cardinals. ",
  "Jan/2020-atual"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
