import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  Cpu, 
  Cloud, 
  Wrench,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Terminal className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-xl text-slate-100 tracking-tight">dev<span className="text-cyan-400">.portfolio</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">Sobre</a>
            <a href="#habilidades" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">Habilidades</a>
            <a href="#projetos" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">Projetos</a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 text-slate-100 px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <a href="#sobre" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800">Sobre</a>
            <a href="#habilidades" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800">Habilidades</a>
            <a href="#projetos" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800">Projetos</a>
            <a 
              href="https://github.com" 
              className="mt-4 flex items-center justify-center gap-2 w-full text-center py-3 bg-slate-800 text-slate-100 rounded-lg font-medium hover:bg-slate-700 border border-slate-700"
            >
              <Github className="w-5 h-5" /> GitHub Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="sobre" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-300 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            <span>Desenvolvedor Front-end & Estudante</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight mb-6 leading-tight">
            Transformando ideias em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              experiências digitais.
            </span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Olá! Sou estudante de <strong>Sistemas de Informação na UTFPR</strong>. 
            Sou apaixonado por desenvolvimento web moderno, criando interfaces responsivas, acessíveis e de alta performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projetos" className="px-8 py-4 bg-cyan-500 text-slate-950 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              Ver Meus Projetos <ChevronRight className="w-5 h-5" />
            </a>
            <div className="flex gap-4 items-center justify-center sm:justify-start">
              <a href="#" className="p-4 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const skillsData = [
  {
    category: "Ecossistema React",
    icon: Code2,
    skills: ["React.js", "Next.js", "Hooks", "Context API", "Zustand"]
  },
  {
    category: "Estilização & UI",
    icon: Wrench,
    skills: ["Tailwind CSS", "CSS Modules", "Framer Motion", "Shadcn UI", "Design Responsivo"]
  },
  {
    category: "Ferramentas & DevOps",
    icon: Cloud,
    skills: ["Git & GitHub", "GitHub Actions", "Vercel", "Ambientes Cloud", "NPM / Yarn"]
  },
  {
    category: "Produtividade & IA",
    icon: Cpu,
    skills: ["GitHub Copilot", "ChatGPT", "VS Code", "Terminal (Bash/Zsh)", "Agile (Scrum)"]
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Tecnologias e <span className="text-cyan-400">Habilidades</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Ferramentas e tecnologias que estudo e utilizo no meu dia a dia para construir aplicações web modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, index) => (
            <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-cyan-400">
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-slate-400 gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projectsData = [
  {
    title: "Sistema de Gestão Universitária",
    description: "Uma aplicação desenvolvida como projeto acadêmico na UTFPR para gerenciar salas e reservas. Construída com Next.js e Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Dashboard Financeiro Pessoal",
    description: "Interface moderna para acompanhamento de despesas e receitas, com gráficos interativos e suporte a modo escuro nativo.",
    tags: ["React", "Recharts", "Vite", "Zustand"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "API REST de Catálogo de Livros",
    description: "Backend construído para suportar uma aplicação de biblioteca. Foco em arquitetura limpa e testes automatizados.",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: null
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Projetos em <span className="text-purple-400">Destaque</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Uma seleção de projetos acadêmicos e pessoais desenvolvidos ao longo do curso e em horas livres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-slate-100 rounded-lg font-medium hover:bg-slate-800 transition-colors border border-slate-700"
          >
            <Github className="w-5 h-5" />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-cyan-400" />
          <span className="font-bold text-lg text-slate-100">dev<span className="text-cyan-400">.portfolio</span></span>
        </div>
        
        <p className="text-slate-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Desenvolvido com React, Next.js e Tailwind CSS.
        </p>
        
        <div className="flex gap-4">
          <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}