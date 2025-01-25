import tubetoolsImg from '../assets/tubetools.png';
import mutuoImg from '../assets/mutuo_associados.png';
import pipehubyImg from '../assets/pipehuby.png';
import proffyImg from '../assets/proffy.png';
import gitfinderImg from '../assets/gitfinder.png';
import currencyConvertImg from '../assets/currency-convert.png';
import queroPassagemImg from '../assets/logo-fundo-amarelo-qp.png';

export const data = {
  portuguese: {
    navbar: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato'
    },
    welcome: {
      h1: 'Olá, sou Luiz Silva',
      subtext: 'Desenvolvedor Fullstack',
      description: 'Potiguar, trabalho como Desenvolvedor Fullstack PHP/Javascript desde 2020. Com mais de 4 anos de experiência, atualmente ajudo a transformar o mercado de venda de passagens rodoviárias na américa latina na ',
    },
    projects: {
      h2: 'Projetos',
      professionals: {
        title: 'Profissionais',
        description: 'Desenvolvidos para empresas',
        data: [
          {
            id: 1,
            title: 'Quero Passagem',
            description: 'Um dos maiores HUBs de venda de passagem online da américa latina. Sou responsável por desenvolver soluções para sistemas críticos e de alto desempenho. No dia-a-dia eu ajudo a destravar os bloqueios técnicos da equipe, faço code reviews, proponho soluções para os desafios técnicos e participo de reuniões com clientes B2B.',
            techs: 'Tecnologias e ferramentas: PHP puro, Laravel, MySQL, Javascript, Jquery, Typescript, Docker, Subversion, Padrões de projeto, SOLID, metodologias ágeis.',
            source: {
              link: 'https://queropassagem.com.br/',
              text: 'Link para a plataforma',
            },
            image: queroPassagemImg,
          },
          {
            id: 2,
            title: 'Super Thumbnails',
            description: 'Ferramenta de construção de thumbnails para vídeos do youtube. Através dela, usuários podem criar thumbnails para seus vídeos e fazer upload diretamente para o seu canal do youtube.',
            techs: 'Tecnologias e ferramentas: Codeigniter 4, MySQL, Fabric.js, Youtube API, Javascript, AJAX, git.',
            source: {
              link: 'https://app.tubetools.com',
              text: 'Link para a plataforma',
            },
            image: tubetoolsImg,
          },
          {
            id: 3,
            title: 'Grupo Mútuo',
            description: 'Site institucional da associação de proteção veicular Grupo Mútuo, de Natal/RN. Desenvolvido durante o meu período de trabalho na Hubytech Soluções em Tecnologia LTDA.',
            techs: 'Tecnologias e ferramentas: Figma, HTML5, CSS3, javascript, git.',
            source: {
              link: 'https://grupomutuo.com.br/',
              text: 'Link para o site',
            },
            image: mutuoImg,
          },
          {
            id: 4,
            title: 'Pipehuby',
            description: 'Sistema de gerenciamento de relacionamento com o cliente, que possibilitava gerir leads e clientes durante todo o processo de venda do produto da empresa.',
            techs: 'Tecnologias e ferramentas: Figma, HTML5, CSS3, javascript, AJAX, PHP, MySQL, git.',
            source: {
              link: 'https://app.pipehuby.com/',
              text: 'Link para a plataforma',
            },
            image: pipehubyImg,
          },
        ]
      },
      personals: {
        title: 'Pessoais',
        description: 'Desenvolvidos para estudos',
        data: [
          {
            id: 4,
            title: 'gitFinder',
            description: 'Um buscador que recebe o nome de usuário do git e retorna todos os repositórios públicos daquele usuário.',
            techs: 'Tecnologias e ferramentas: HTML5, CSS3, javascript, axios, git.',
            source: {
              link: 'https://www.github.com/lu1zf/gitfinder',
              text: 'Link',
            },
            image: gitfinderImg,
          },
          {
            id: 5,
            title: 'Currency Convert',
            description: 'Converte valores monetários de dólar para real.',
            techs: 'Tecnologias e ferramentas: HTML5, CSS3, javascript, Node.js, EJS, git.',
            source: {
              link: 'https://www.github.com/lu1zf/currencyconvert',
              text: 'Link do projeto',
            },
            image: currencyConvertImg,
          },
          {
            id: 6,
            title: 'Proffy',
            description: 'Desenvolvido durante o evento Next Level Week, da RocketSeat. O sistema conecta professores e alunos que se interessam em dar ou receber aulas particulares.',
            techs: 'Tecnologias e ferramentas: HTML5, CSS3, javascript, Node.js, SQLite, git.',
            source: {
              link: 'https://www.github.com/lu1zf/proffy',
              text: 'Link do projeto',
            },
            image: proffyImg,
          },
        ]
      },
    },
    contact: {
      h2: 'Contato',
      description: 'Me acompanhe nas redes sociais ou envie uma mensagem.'
    },
  },
  english: {
    navbar: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    welcome: {
      h1: "Hi, i'm Luiz Silva",
      subtext: 'Fullstack developer',
      description: 'Brazilian, I have been working as a Fullstack PHP/Javascript Developer since 2020. With over 4 years of experience, I currently help transform the bus ticket sales market in Latin America at ',
    },
    projects: {
      h2: 'Projects',
      professionals: {
        title: 'Professionals',
        description: 'Developed for companies',
        data: [
          {
            id: 1,
            title: 'Quero Passagem',
            description: "One of the largest online ticket sales hubs in Latin America. I am responsible for developing solutions for critical and high-performance systems. On a daily basis, I help to unblock the team's technical blocks, perform code reviews, propose solutions for technical challenges and participate in meetings with B2B clients",
            techs: 'Techs and tools: Core PHP, Laravel, MySQL, Javascript, Jquery, Typescript, Docker, Subversion, Design Patterns, SOLID, Agile Methodology.',
            source: {
              link: 'https://queropassagem.com.br/',
              text: 'Link',
            },
            image: queroPassagemImg,
          },
          {
            id: 2,
            title: 'Super Thumbnails',
            description: 'Tool to build thumbnails for youtube videos. Through it, users can create thumbnails for their videos and upload them directly to the youtube channel.',
            techs: 'Techs and tools: Codeigniter 4, MySQL, Fabric.js, Youtube API, Javascript, AJAX, git.',
            source: {
              link: 'https://app.tubetools.com',
              text: 'Link to the app',
            },
            image: tubetoolsImg,
          },
          {
            id: 3,
            title: 'Grupo Mútuo',
            description: 'Institutional website of the vehicular protection association Grupo Mútuo, from Natal/RN - Brazil. Developed during my work period at Hubytech Soluções em Tecnologia LTDA.',
            techs: 'Techs and tools: Figma, HTML5, CSS3, javascript, git.',
            source: {
              link: 'https://grupomutuo.com.br/',
              text: 'Link',
            },
            image: mutuoImg,
          },
          {
            id: 4,
            title: 'Pipehuby',
            description: "Customer relationship management system, which made it possible to manage leads and customers throughout the company's product sales process.",
            techs: 'Techs and tools: Figma, HTML5, CSS3, javascript, AJAX, PHP, MySQL, git.',
            source: {
              link: 'https://app.pipehuby.com/',
              text: 'Link to the app',
            },
            image: pipehubyImg,
          },
        ]
      },
      personals: {
        title: 'Personals',
        description: 'Developed for studies',
        data: [
          {
            id: 4,
            title: 'gitFinder',
            description: 'A search engine that takes the username from git and returns all public repositories for that user.',
            techs: 'Techs and tools: HTML5, CSS3, javascript, axios, git.',
            source: {
              link: 'https://www.github.com/lu1zf/gitfinder',
              text: 'Link',
            },
            image: gitfinderImg,
          },
          {
            id: 5,
            title: 'Currency Convert',
            description: 'Converts dollar values to reais (R$).',
            techs: 'Techs and tools: HTML5, CSS3, javascript, Node.js, EJS, git.',
            source: {
              link: 'https://www.github.com/lu1zf/currencyconvert',
              text: 'Project link',
            },
            image: currencyConvertImg,
          },
          {
            id: 6,
            title: 'Proffy',
            description: "Developed during RocketSeat's Next Level Week event. The system connects teachers and students who are interested in giving or receiving private lessons.",
            techs: 'Techs and tools: HTML5, CSS3, javascript, Node.js, SQLite, git.',
            source: {
              link: 'https://www.github.com/lu1zf/proffy',
              text: 'Project link',
            },
            image: proffyImg,
          },
        ]
      },
    },
    contact: {
      h2: 'Contact',
      description: 'Follow me on social media or send me a message.'
    },
  }
} 