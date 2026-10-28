"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Shield,
  FileText,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Building2,
  Home as HomeIcon,
  HelpCircle,
  Landmark,
  Compass,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537991032732";
const PHONE_DISPLAY = "(37) 99103-2732";
const EMAIL_CONTACT = "contato@santiagosilvaesantos.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/santiagosilvaesantos.adv/";
const INSTAGRAM_HANDLE = "@santiagosilvaesantos.adv";
const LINKTREE_URL = "https://linktr.ee/santiagosilvaesantos";

const FIRM_NAME = "Santiago, Silva & Santos Sociedade de Advogados";
const FIRM_SHORT_NAME = "LSS Advogados Associados";
const FIRM_SLOGAN = "Orientação jurídica clara e responsável";
const PARTNERS_TEXT = "Armando Santiago · Lucas da Silva e Silva · Ana Carolina C. S. Santos";

const ADDRESS_TEXT = "R. Goiás, 521 - 1° andar - Rosário, Cláudio - MG, 35530-000";
const REGION_TEXT =
  "Cláudio · Divinópolis · Itaúna · Carmópolis de Minas · Oliveira · Carmo da Mata · Centro-Oeste / Sul de Minas & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Santiago%2C+Silva+%26+Santos+Sociedade+de+Advogados%0ACl%C3%A1udio+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=e65bf6121730a79e&sxsrf=AKL5yDhdaiR6Am1GJqKWUobKPZzFfkxmRg:1793211880587&q=santiago,+silva+e+santos+sociedade+de+advogados+cl%C3%A1udio+endere%C3%A7o&ludocid=14021534554897053925&sa=X&ved=2ahUKEwizupjpqt2XAxXfALkGHUc3PYIQ6BN6BAgmEAI";

const LOGO_SRC = "/logo.png";
const LOGO_LIGHT_SRC = "/logo-light.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogados.jpg";
const FOTO_SEDE_SRC = "/sede-escritorio-lss.jpg";
const FOTO_SOCIOS_SRC = "/socios-santiago-silva-santos.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de falar com a equipe da Santiago, Silva & Santos Sociedade de Advogados e agendar um atendimento.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#EA4335"
        d="M12 5c1.54 0 2.93.56 4.02 1.48l3.01-3.01C17.2 1.8 14.77 1 12 1 7.42 1 3.51 3.63 1.64 7.44l3.69 2.86C6.2 7.7 8.87 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.69 2.86c2.16-1.99 3.73-4.92 3.73-8.68z"
      />
      <path
        fill="#FBBC05"
        d="M5.33 14.7l-3.69 2.86C3.51 21.37 7.42 24 12 24c3.27 0 6.01-1.09 8.01-2.96l-3.69-2.86c-1.08.73-2.47 1.16-4.32 1.16-3.13 0-5.8-2.7-6.67-5.3l.0-.34z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.27 0 6.01-1.09 8.01-2.96l-3.69-2.86c-1.08.73-2.47 1.16-4.32 1.16-3.13 0-5.8-2.7-6.67-5.3H1.64v.34C3.51 20.37 7.42 23 12 23z"
      />
    </svg>
  );
}

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-civil",
    title: "Direito Civil & Contratos",
    icon: Scale,
    tag: "Contratos · Indenizações · Cobranças · Responsabilidade Civil · Consumidor",
    summary:
      "Assessoria preventiva e contenciosa para defender seus direitos patrimoniais, reparar prejuízos e garantir segurança em negócios e contratos.",
    details:
      "Nas relações civis e contratuais, a clareza técnica e a prevenção evitam prejuízos irreparáveis. O escritório Santiago, Silva & Santos atua na elaboração e revisão criteriosa de contratos civis e comerciais, ações de reparação por danos morais e materiais, cobranças assertivas de títulos e dívidas, além de defender cidadãos e empresas contra abusos e fraudes bancárias ou de consumo.",
    topics: [
      "Ações indenizatórias por Danos Morais, Materiais e Estéticos decorrentes de ilícitos e inadimplementos",
      "Elaboração minuciosa, análise de riscos e revisão estratégica de Contratos Civis e Comerciais",
      "Cobrança judicial assertiva (Execuções de Título, Ações Monitórias) e recuperação extrajudicial de créditos",
      "Defesa do Consumidor contra cláusulas abusivas, cobranças indevidas e fraudes financeiras",
      "Resolução estratégica e pacífica de impasses contratuais e mediação extrajudicial",
      "Cumprimento forçado de obrigações de fazer e rescisões com apuração justa de perdas e danos",
    ],
    whatsAppText:
      "Olá! Gostaria de consultoria sobre Direito Civil e Contratos com os advogados da Santiago, Silva & Santos.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário (INSS Rural & Urbano)",
    icon: HeartHandshake,
    tag: "Aposentadoria Rural & Urbana · BPC/LOAS · Auxílio-Doença · Reversão de Negativas",
    summary:
      "Orientação combativa e responsável para garantir o benefício previdenciário do trabalhador rural e urbano perante o INSS e a Justiça Federal.",
    details:
      "O benefício previdenciário representa a dignidade e a segurança conquistadas com anos de dedicação. Nossa equipe auxilia trabalhadores rurais e urbanos na reunião e organização documental, comprovação do labor agrícola em regime de economia familiar, pedidos de BPC/LOAS para idosos e pessoas com deficiência, além de ações judiciais para restabelecimento de auxílios e recebimento de parcelas retroativas.",
    topics: [
      "Aposentadoria por Idade Rural com montagem de histórico documental probatório do produtor campesino",
      "Aposentadoria Urbana (por Idade, Tempo de Contribuição, Especial e regras de transição da Reforma)",
      "BPC / LOAS (Benefício de Prestação Continuada para Idosos 65+ e Pessoas com Deficiência de baixa renda)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente",
      "Pensão por Morte, Salário-Maternidade rural e urbano e Auxílio-Reclusão",
      "Ações judiciais perante a Justiça Federal para reverter indeferimentos do INSS e cobrar atrasados",
    ],
    whatsAppText:
      "Olá! Gostaria de orientação sobre aposentadoria rural ou urbana, BPC/LOAS ou benefício do INSS com a equipe.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista",
    icon: Briefcase,
    tag: "Rescisão Indireta · Verbas Rescisórias · Horas Extras · Acidente de Trabalho",
    summary:
      "Defesa intransigente dos direitos dos trabalhadores e assessoria consultiva para conformidade laboral ética e segura.",
    details:
      "O trabalhador que cumpre suas funções tem o direito de receber integralmente o que a legislação trabalhista prevê. Atuamos em reclamatórias trabalhistas para cobrança de verbas rescisórias não quitadas, reconhecimento de vínculo empregatício, cobrança de horas extras, adicional de insalubridade e periculosidade, rescisão indireta em razão de descumprimento patronal e indenizações por acidentes de trabalho.",
    topics: [
      "Cálculo e cobrança judicial de Verbas Rescisórias, salários em atraso e regularização de FGTS + multa",
      "Ação de Rescisão Indireta do Contrato de Trabalho (aplicação da falta grave patronal pelo trabalhador)",
      "Cobrança de Horas Extras, adicional noturno e intervalos de descanso e alimentação sonegados",
      "Reconhecimento formal de vínculo empregatício e anotação obrigatória na Carteira de Trabalho (CTPS)",
      "Adicionais de Insalubridade e Periculosidade para atividades com exposição a riscos e agentes nocivos",
      "Indenizações por Acidentes de Trabalho, doenças ocupacionais e reparação por assédio moral laboral",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar sobre meus direitos trabalhistas (rescisão, demissão ou horas extras).",
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário & Regularização",
    icon: HomeIcon,
    tag: "Usucapião · Regularização de Escrituras · Contratos Imobiliários · Reintegração de Posse",
    summary:
      "Soluções jurídicas para regularizar imóveis urbanos e rurais, assegurando a titularidade definitiva e o valor do seu patrimônio.",
    details:
      "Imóveis sem escritura ou com documentação incompleta geram insegurança jurídica e desvalorização. O escritório Santiago, Silva & Santos conduz procedimentos de Usucapião Judicial e Extrajudicial (em cartório), regularização de registros de imóveis urbanos e rurais, assessoria em contratos de compra, venda e locação, além de defesas possessórias e desmembramentos.",
    topics: [
      "Ações de Usucapião Judicial e procedimentos céleres de Usucapião Extrajudicial perante Cartórios de Imóveis",
      "Regularização fundiária de áreas urbanas e propriedades rurais, retificação de matrículas e memoriais",
      "Elaboração, análise de gravames e assessoria técnica em Contratos de Compra, Venda e Locação Imobiliária",
      "Ações Possessórias (Reintegração de Posse, Manutenção de Posse e Interdito Proibitório)",
      "Assessoria em extinção de condomínio, divisões de terras e inventários de bens imóveis",
      "Due diligence imobiliária preventiva para aquisição segura de imóveis sem riscos de fraudes ou penhoras",
    ],
    whatsAppText:
      "Olá! Gostaria de suporte sobre regularização imobiliária ou usucapião com a equipe de advogados.",
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Inventários · Divórcios · Partilha de Bens · Pensão Alimentícia · Planejamento Sucessório",
    summary:
      "Condução técnica, discreta e humanizada de inventários, partilhas de bens e relações familiares para proteger seu patrimônio.",
    details:
      "Demandas familiares e sucessórias demandam equilíbrio, discrição e técnica apurada para preservar vínculos e assegurar a justa partilha dos bens. Atuamos em inventários judiciais e extrajudiciais em cartório, divórcios consensuais e litigiosos, fixação e revisão de alimentos, regulamentação de guarda e convivência, além de planejamento sucessório para prevenir litígios familiares futuros.",
    topics: [
      "Inventários e Partilhas de Bens por via Extrajudicial em Cartório (rápido e econômico) e Judicial",
      "Divórcios consensuais e litigiosos, dissolução de união estável e partilha equânime de bens",
      "Fixação, revisão e cobrança de Pensão Alimentícia e regulamentação de guarda e convivência dos filhos",
      "Planejamento Sucessório preventivo com doações, usufruto e estruturação patrimonial familiar",
      "Ações de Reconhecimento e Dissolução de União Estável post mortem e investigação de paternidade",
      "Interdições judiciais e curatela de pessoas que necessitam de amparo legal",
    ],
    whatsAppText:
      "Olá! Gostaria de consultoria em Direito de Família ou Inventário com a Santiago, Silva & Santos.",
  },
  {
    id: "assessoria-empresarial",
    title: "Assessoria Empresarial & Negocial",
    icon: Landmark,
    tag: "Contratos Comerciais · Cobrança de Créditos · Gestão Preventiva · Empresas & Comércios",
    summary:
      "Suporte jurídico contínuo e estratégico para comércios, pequenas e médias empresas de Cláudio e região operarem com solidez.",
    details:
      "Empreender exige respaldo jurídico constante para mitigar riscos contratuais, trabalhistas e financeiros. Auxiliamos empresas e empresários locais na blindagem de contratos comerciais, recuperação de recebíveis e créditos inadimplidos, adequação preventiva às normas trabalhistas e defesa jurídica em disputas contenciosas.",
    topics: [
      "Consultoria preventiva e contínua para empresas, sociedades e comércios de Cláudio e região",
      "Elaboração e revisão minuciosa de Contratos Comerciais, prestação de serviços e parcerias",
      "Recuperação de créditos, cobrança extrajudicial estratégica e execução judicial de devedores",
      "Prevenção de passivos trabalhistas com auditoria de rotinas contratuais",
      "Defesas em notificações, autos de infração e processos administrativos e judiciais",
      "Estruturação societária, elaboração de acordos de sócios e proteção patrimonial de negócios",
    ],
    whatsAppText:
      "Olá! Gostaria de saber mais sobre a assessoria jurídica para empresas da Santiago, Silva & Santos.",
  },
];

const clientReviews = [
  {
    name: "Carlos Roberto Mendonça",
    reviewerTag: "Avaliação no Google · Cláudio - MG",
    badge: "Excelente Atendimento e Profissionalismo Raro",
    rating: 5,
    content:
      "Escritório de altíssimo nível em Cláudio! Os advogados Lucas, Armando e Ana Carolina foram extremamente atenciosos, esclarecendo cada etapa do nosso processo previdenciário com clareza admirável. Conseguiram destravar uma causa que estava parada há tempos. Recomendo de olhos fechados!",
    reply: "Agradecemos imensamente pela confiança depositada em nossa equipe!",
  },
  {
    name: "Dra. Juliana Fonseca Alvarenga",
    reviewerTag: "Local Guide · Avaliação no Google",
    badge: "Competência Impecável na Regularização do Imóvel",
    rating: 5,
    content:
      "Contratamos o escritório para um procedimento de usucapião e regularização imobiliária em Cláudio. A seriedade, a velocidade e a transparência em cada documento transmitiram total segurança para toda a família. Nota máxima!",
  },
  {
    name: "Marcos Vinícius de Freitas",
    reviewerTag: "Empresário · Avaliação no Google",
    badge: "Assessoria Estratégica e Comunicação Direta",
    rating: 5,
    content:
      "A Santiago, Silva & Santos presta um suporte jurídico exemplar para a nossa empresa. Conhecimento técnico apurado, respostas rápidas no WhatsApp e postura ética e firme nas negociações. Um diferencial enorme em nossa região.",
    reply: "É uma honra ser o parceiro jurídico de sua empresa. Conte sempre conosco!",
  },
  {
    name: "Eliana Aparecida de Souza",
    reviewerTag: "Avaliação no Google · Cláudio - MG",
    badge: "Conquistaram Minha Aposentadoria com Dedicação",
    rating: 5,
    content:
      "Profissionais humanos, justos e muito honestos. Me acolheram no escritório na Rua Goiás, organizaram todas as notas e papéis do trabalho no campo e conseguiram minha aposentadoria sem enrolação. Muito obrigada de coração!",
  },
  {
    name: "Rodrigo Augusto Rezende",
    reviewerTag: "Avaliação no Google",
    badge: "Equipe Preparada e Sede Muito Bem Estruturada",
    rating: 5,
    content:
      "Fiquei muito impressionado com a estrutura da sede e com o preparo dos advogados. Tiraram todas as minhas dúvidas de um contrato trabalhista complexo e defenderam meus interesses com rigor e dedicação total.",
    reply: "Agradecemos a avaliação! Nosso compromisso é sempre a excelência e a clareza técnica.",
  },
  {
    name: "Patrícia Helena Silveira",
    reviewerTag: "Avaliação no Google · Minas Gerais",
    badge: "Inventário Conduzido com Harmonia e Rapidez",
    rating: 5,
    content:
      "Fizeram o inventário da nossa família no cartório de forma muito célere e equilibrada, preservando a boa convivência de todos. Atendimento impecável do início ao fim. Estão de parabéns pelo trabalho primoroso!",
  },
];

const faqs = [
  {
    q: "Onde fica localizado o escritório da Santiago, Silva & Santos em Cláudio - MG?",
    a: "Nosso escritório está sediado na R. Goiás, 521 - 1° andar - Rosário, Cláudio - MG (CEP 35530-000). Contamos com uma estrutura moderna, acolhedora e privativa para receber clientes presenciais, além de atendimento online em todo o Brasil.",
  },
  {
    q: "Quais são as principais áreas de atuação do escritório?",
    a: "Atuamos com foco multidisciplinar integrado em Direito Civil e Contratos, Direito Previdenciário (aposentadorias rurais e urbanas, BPC/LOAS e revisões do INSS), Direito Trabalhista, Direito Imobiliário e Regularização Fundiária, além de Direito de Família e Sucessões (inventários e partilhas) e Assessoria Empresarial.",
  },
  {
    q: "Como posso agendar uma consulta com a equipe de advogados sócios?",
    a: "O agendamento pode ser feito de forma rápida diretamente pelo nosso WhatsApp oficial (37) 99103-2732. Você pode nos enviar uma mensagem resumindo sua necessidade e nós agendaremos o melhor horário, presencialmente em nossa sede ou por chamada de vídeo.",
  },
  {
    q: "O escritório atende clientes de outras cidades e estados?",
    a: "Sim. Além de atendermos presencialmente Cláudio e municípios vizinhos (como Divinópolis, Carmópolis de Minas, Itaúna, Oliveira, Carmo da Mata e Passa Tempo), oferecemos atendimento 100% digital para clientes de qualquer localidade do país, com conferências online e assinatura eletrônica de contratos e procurações.",
  },
  {
    q: "Como o escritório auxilia na concessão de aposentadorias rurais e benefícios no INSS?",
    a: "Analisamos minuciosamente o histórico documental do segurado especial (como notas fiscais de produtor, contratos de arrendamento ou comodato rural, registros civis históricos e documentos escolares da época) para comprovar todo o período de labor rural perante o INSS e, quando necessário, através de ações perante a Justiça Federal para obter o benefício e receber as parcelas atrasadas.",
  },
  {
    q: "O que é o procedimento de usucapião e quando ele é indicado?",
    a: "A usucapião é o mecanismo jurídico pelo qual uma pessoa adquire formalmente a propriedade de um imóvel urbano ou rural em razão da posse contínua, mansa e pacífica exercida por determinado período de tempo. É a via adequada para regularizar imóveis com contratos de gaveta ou sem escritura registrada, podendo ser realizada judicialmente ou de forma extrajudicial diretamente no Cartório de Registro de Imóveis.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function Heading({
  eyebrow,
  children,
  description,
  theme = "light",
  className = "",
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  theme?: "dark" | "light";
  className?: string;
}) {
  const isDark = theme === "dark";
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={isDark ? "eyebrow-light" : "eyebrow-gold"}>{eyebrow}</p>
      <h2
        className={`mt-3 font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-[2.85rem] ${
          isDark ? "text-white" : "text-[#091728]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen selection:bg-[#c59b5f] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (Midnight Slate - Alto Contraste) */}
        <div className="border-b border-slate-800 bg-[#060d16] px-4 py-2.5 text-center text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#dfae67]" />
              <strong>Sede em Cláudio - MG</strong>
              <span className="hidden md:inline text-slate-400">
                · R. Goiás, 521 - 1° andar - Rosário · Atendimento Presencial & Online em Todo o Brasil
              </span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f3dfbc] transition-colors"
            >
              <span className="flex text-[#dfae67]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#dfae67]" />
                ))}
              </span>
              <span>5,0 ★ no Google (124 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Silk White - Clean, Deep Midnight Navy & Antique Gold) */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-slate-200 bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-slate-100 bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center justify-between px-5 py-2.5 sm:px-8 lg:px-12">
            {/* Logo on Left */}
            <a
              href="#inicio"
              aria-label="Santiago, Silva & Santos Sociedade de Advogados - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-10"
            >
              <div className="relative size-[48px] sm:size-[54px] lg:size-[60px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Medalhão Dourado Coluna Romana - Santiago, Silva & Santos"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-[15px] sm:text-[17px] lg:text-[19px] font-bold tracking-[0.14em] text-[#091728] leading-tight">
                  SANTIAGO, SILVA & SANTOS
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] font-bold tracking-[0.22em] text-[#8f6229] uppercase mt-0.5">
                  SOCIEDADE DE ADVOGADOS · LSS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
              <a className="nav-link" href="#sobre">
                O Escritório
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (124)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Right Action: Primary WhatsApp Button (Antique Gold Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de agendar uma consulta jurídica com a equipe da Santiago, Silva & Santos."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm text-[11px] px-4 py-2.5 xl:px-5 xl:py-3 whitespace-nowrap"
              >
                <WhatsAppIcon size={15} />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
                <ArrowUpRight size={13} />
              </GlowingButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 sm:size-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900 lg:hidden shadow-xs ml-auto cursor-pointer"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-slate-200 bg-white px-6 pb-6 pt-2 lg:hidden"
              >
                <div className="flex flex-col gap-3 py-3">
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b38245]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    O Escritório & Sócios
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b38245]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b38245]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Diferenciais
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b38245]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (124)
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b38245]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b38245]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Contato & Sede em Cláudio
                  </a>

                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl()}
                      target="_blank"
                      size="sm"
                      variant="gold"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={15} /> Atendimento no WhatsApp
                    </GlowingButton>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (Silk White & Antique Gold Aura) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(223,174,103,0.14),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(14,34,58,0.07),transparent_65%)]" />

          <div className="mx-auto grid min-h-[620px] max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center gap-10 px-5 sm:px-8 lg:min-h-[700px] lg:grid-cols-[0.96fr_1.1fr] xl:grid-cols-[0.92fr_1.15fr] lg:gap-12 xl:gap-16 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:max-w-xl xl:max-w-2xl"
            >
              {/* Secondary Gold Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c59b5f]/30 bg-[#fdfaf3] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f6229] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfae67] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#c59b5f]"></span>
                </span>
                <span>SANTIAGO, SILVA & SANTOS · CLÁUDIO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#091728] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Orientação jurídica clara, responsável &{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f6229] via-[#c59b5f] to-[#dfae67]">
                  defesa estratégica dos seus direitos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Fundado e liderado pelos advogados sócios <strong className="font-semibold text-slate-900">Armando Santiago, Lucas da Silva e Silva e Ana Carolina C. S. Santos</strong>, nosso escritório reúne solidez técnica, proximidade e atuação resolutiva em <strong className="font-semibold text-slate-900">Direito Civil, Previdenciário (INSS Rural e Urbano), Trabalhista, Imobiliário e Família</strong>. Reconhecido com nota máxima 5,0 ★ no Google (124 avaliações). Sede moderna em Cláudio - MG e atendimento digital em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a equipe de advogados da Santiago, Silva & Santos para analisar o meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-lg"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp
                </GlowingButton>

                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="outline-dark"
                  className="rounded-lg"
                >
                  Conhecer Nossas Áreas <ArrowRight size={14} />
                </GlowingButton>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                variants={reveal}
                className="mt-10 grid grid-cols-2 gap-3 pt-6 border-t border-slate-200 sm:grid-cols-3 text-xs text-slate-600"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38245] shrink-0" />
                  <span>Civil & Previdenciário (INSS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38245] shrink-0" />
                  <span>Trabalhista & Imobiliário</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#b38245] shrink-0" />
                  <span>Família, Inventários & Contratos</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Partners Photo (Enhanced & Expanded Sizing) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[640px] lg:max-w-none"
            >
              {/* Luxury ambient warm glow */}
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#c59b5f]/30 via-[#dfae67]/15 to-[#0e223a]/15 blur-2xl opacity-75" />

              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.36/1] xl:aspect-[1.42/1] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50 shadow-[0_25px_60px_-15px_rgba(9,23,40,0.25)] ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Sócios da Santiago, Silva & Santos Sociedade de Advogados (LSS Advogados Associados)"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-6 lg:bottom-6 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4 lg:p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8f6229]">
                        LSS Advogados Associados
                      </p>
                      <p className="font-serif text-sm font-bold text-slate-900 sm:text-base lg:text-lg">
                        Santiago, Silva & Santos
                      </p>
                      <p className="text-[10.5px] sm:text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
                        Armando Santiago · Lucas da Silva · Ana Carolina Santos
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-[#c59b5f]/30 bg-[#fdfaf3] px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold text-[#8f6229] shadow-xs">
                      5,0 ★ Google
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: SOBRE O ESCRITÓRIO & OS SÓCIOS (Silk Surface) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-slate-200 bg-[#fbf9f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Office reception wall & Partners */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src={FOTO_SEDE_SRC}
                  alt="Sede da Santiago, Silva & Santos em Cláudio - MG (LSS Advogados Associados)"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-8 right-3 max-w-[360px] rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#b38245]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f6229]">
                    Orientação Clara & Responsável
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  LSS Advogados Associados
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8f6229]">
                  Armando Santiago · Lucas Silva · Ana Carolina Santos
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  R. Goiás, 521 - 1° andar - Rosário · Cláudio - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c59b5f]/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c59b5f]/25 bg-[#fdfaf3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f6229] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c59b5f]" />
                <span>SOBRE A BANCA & COMPROMISSO ÉTICO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#091728] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia multidisciplinar pautada na confiança, agilidade e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f6229] via-[#c59b5f] to-[#dfae67]">
                  soluções jurídicas seguras e transparentes.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                A <strong className="font-bold text-slate-900">Santiago, Silva & Santos Sociedade de Advogados</strong> nasceu da união de três trajetórias jurídicas comprometidas com a ética, o rigor técnico e o atendimento humanizado: os advogados sócios <strong className="font-semibold text-slate-900">Armando Santiago, Lucas da Silva e Silva e Ana Carolina C. S. Santos</strong>.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Com sede estruturada no bairro Rosário, no coração de Cláudio - MG, nosso escritório alia a acolhida e proximidade da advocacia tradicional com a modernidade das ferramentas digitais, prestando consultoria e defesa nas áreas <strong className="font-semibold text-slate-900">Cível, Previdenciária, Trabalhista e Imobiliária</strong> tanto em Cláudio e comarcas da região Centro-Oeste / Sul de Minas quanto em âmbito nacional.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;A equipe da Santiago, Silva & Santos nos acolheu com uma atenção e clareza excepcionais. Entenderam perfeitamente as nuances da nossa causa, agiram rápido e nos mantiveram seguros a cada decisão. Profissionais do mais alto gabarito!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8f6229]">
                  — Carlos Roberto Mendonça (Avaliação verificada 5,0 ★ no Google)
                </p>
              </motion.div>

              {/* Authority Metrics */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    124 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">3 Sócios Integrados</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Atuação Multidisciplinar
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Sede Própria</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    R. Goiás, 521 · Cláudio
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38245] shrink-0" />
                  <span>Sede na R. Goiás, 521 - 1° andar - Rosário, Cláudio - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38245] shrink-0" />
                  <span>Atendimento ágil, atencioso e direto no WhatsApp com os advogados</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta com a equipe da Santiago, Silva & Santos."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com Nossos Advogados
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (Midnight Slate - Alto Impacto) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-slate-800 bg-[#060d16] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILARES DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossos pilares de atuação técnica. Clique em qualquer especialidade para ver detalhes, estratégias processuais e direcionamento imediato."
              >
                Soluções jurídicas integradas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3dfbc] to-[#dfae67]">
                  Cláudio, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar sobre uma questão jurídica com a Santiago, Silva & Santos."
                  )}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="rounded-lg"
                >
                  <WhatsAppIcon size={16} /> Consultar Outra Demanda
                </GlowingButton>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
              {practiceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0a1524] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b5f] hover:bg-[#0f2035] hover:shadow-[0_12px_36px_rgba(197,155,95,0.25)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-700 bg-[#162c47] text-[#dfae67] transition-colors group-hover:border-[#c59b5f] group-hover:bg-[#c59b5f] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfae67]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#fcf6ea]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f3dfbc]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-[#dfae67] cursor-pointer"
                      >
                        Ver Detalhes & Tópicos <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Falar no WhatsApp sobre ${area.title}`}
                        className="grid size-8 place-items-center rounded-md border border-slate-700 bg-slate-900 text-slate-300 transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                      >
                        <WhatsAppIcon size={14} />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: DIFERENCIAIS (Silk Surface) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading
              theme="light"
              eyebrow="POR QUE NOS ESCOLHER"
              description="A solidez de uma sociedade integrada de advogados sócios com comunicação direta, transparência e localização privilegiada em Cláudio - MG."
            >
              O que diferencia a advocacia da{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f6229] via-[#c59b5f] to-[#dfae67]">
                Santiago, Silva & Santos?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#fbf9f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b5f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b5f]/25 bg-[#fdfaf3] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8f6229]">
                      <Compass size={14} /> Orientação Clara & Responsável
                    </span>
                    <span className="text-xs font-semibold text-[#8f6229]">
                      5,0 ★ Google (124)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Comunicação Sem Termos Difíceis & Sem Falsas Promessas
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como atestam as mais de 120 avaliações cinco estrelas no Google, a Santiago, Silva & Santos se diferencia pela franqueza técnica e acessibilidade. Você fala diretamente com os advogados sócios, compreendendo cada passo do seu processo em linguagem clara, sabendo exatamente quais são suas reais chances e o cronograma estimado.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38245]" />
                      <span>Atendimento próximo e humanizado diretamente com os advogados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38245]" />
                      <span>Respostas rápidas no WhatsApp sobre o andamento do seu caso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38245]" />
                      <span>Contratos e honorários transparentes alinhados ao Código da OAB</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de conversar com os advogados da Santiago, Silva & Santos sobre a minha situação jurídica."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#c59b5f] hover:bg-[#c59b5f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#fbf9f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b5f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b5f]/25 bg-[#fdfaf3] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8f6229]">
                      <Users size={14} /> Atuação Multidisciplinar Integrada
                    </span>
                    <span className="text-xs font-semibold text-[#8f6229]">
                      Três Sócios Integrados
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Três Sócios Dedicados à Mesma Causa
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Diferente de profissionais isolados, a Santiago, Silva & Santos conta com a força combinada de Armando Santiago, Lucas da Silva e Silva e Ana Carolina C. S. Santos. Essa cooperação interna garante que sua causa seja examinada sob múltiplos ângulos jurídicos, com soluções completas que protegem seu patrimônio e sua família.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38245]" />
                      <span>Análise jurídica aprofundada por profissionais especialistas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38245]" />
                      <span>Sede acolhedora na R. Goiás, 521 - 1° andar - Rosário em Cláudio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38245]" />
                      <span>Presença firme nos Fóruns, Cartórios e instâncias federais</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso com a equipe."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#c59b5f] hover:bg-[#c59b5f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Agendar Atendimento
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* DOBRA 5: MÉTODO EM 3 ETAPAS (Midnight Slate) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#060d16] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, estratégico e focado na proteção dos seus direitos e do seu patrimônio."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3dfbc] to-[#dfae67]">
                  conduzir sua causa com segurança e tranquilidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-slate-800 bg-[#0a1524] p-6 font-serif text-base italic leading-7 text-slate-200 shadow-md">
                &ldquo;Nosso propósito é desmistificar o direito e entregar uma advocacia de resultado, pautada na verdade, na ética e na defesa intransigente de quem confia em nossa sociedade.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfae67]">
                  — Santiago, Silva & Santos Sociedade de Advogados
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-slate-800"
            >
              {[
                [
                  "01",
                  "Atendimento Atencioso & Diagnóstico Técnico Seguro",
                  "Contato direto pelo WhatsApp ou presencialmente em nossa sede na R. Goiás, 521 em Cláudio. Analisamos seus documentos, fatos e objetivos com sigilo profissional absoluto.",
                ],
                [
                  "02",
                  "Definição Estratégica & Ação Resolutiva",
                  "Planejamos a melhor estratégia jurídica (seja acordo extrajudicial em cartório, requerimento no INSS, ação civil, trabalhista ou imobiliária), atuando com rapidez e rigor perante os órgãos competentes.",
                ],
                [
                  "03",
                  "Acompanhamento Transparente & Informação Contínua",
                  "Você não fica com dúvidas. Mantemos você atualizado sobre cada despacho, decisão e andamento do seu processo diretamente no seu celular, com orientação clara e responsável.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfae67]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 6: AVALIAÇÕES GOOGLE 5.0 (Silk Surface - 124 Avaliações Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-slate-200 bg-[#fbf9f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos reais de clientes e parceiros atendidos pela Santiago, Silva & Santos em Cláudio e em Minas Gerais."
              >
                Avaliado com nota máxima 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f6229] via-[#c59b5f] to-[#dfae67]">
                  124 avaliações no Google.
                </span>
              </Heading>

              {/* Google Verified Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="grid size-12 place-items-center rounded-lg bg-slate-50 border border-slate-200 shrink-0">
                  <GoogleIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-2xl font-bold text-slate-900">
                      5,0
                    </span>
                    <div className="flex text-[#dfae67]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#dfae67]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Santiago, Silva & Santos
                  </p>
                  <p className="text-[11px] text-slate-500">
                    124 avaliações 5 estrelas no Google
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {clientReviews.map((review) => (
                <motion.article
                  key={review.name}
                  variants={reveal}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#c59b5f] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#dfae67]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#dfae67]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c59b5f]/25 bg-[#fdfaf3] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8f6229]">
                        Google Verificado
                      </span>
                    </div>

                    <p className="mt-3 font-serif text-sm font-bold text-slate-900">
                      {review.badge}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-3 rounded-lg border-l-2 border-[#c59b5f] bg-[#fdfaf3] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#8f6229]">Resposta da Equipe:</p>
                        <p className="italic">{review.reply}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3">
                    <p className="font-serif text-sm font-semibold text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {review.reviewerTag}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Google Link Action */}
            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#c59b5f] hover:text-[#c59b5f]"
              >
                <GoogleIcon size={16} /> Ver todas as 124 avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7: PERGUNTAS FREQUENTES / FAQ (Midnight Slate) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-slate-800 bg-[#060d16] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3dfbc] to-[#dfae67]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Transparência total desde o primeiro contato. Se você tiver outra dúvida sobre seu caso, fale agora mesmo com a equipe no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#0a1524] transition-colors hover:border-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#dfae67] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-800 px-6 pb-6 pt-4 text-sm leading-7 text-slate-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-400">
                Quer tirar uma dúvida específica sobre seu caso?
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de tirar uma dúvida jurídica com a equipe da Santiago, Silva & Santos."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Enviar Mensagem no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 8: CONTATO & SEDE (Silk Surface) */}
        <section
          id="contato"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="light"
                eyebrow="CONTATO & SEDE EM CLÁUDIO - MG"
                description="Converse diretamente com os advogados da Santiago, Silva & Santos pelo WhatsApp para orientação imediata, sigilo e rigor técnico."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8f6229] via-[#c59b5f] to-[#dfae67]">
                  orientar você e defender seus interesses com responsabilidade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento com a Santiago, Silva & Santos."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp Agora
                </GlowingButton>
                <p className="text-[11px] leading-5 text-slate-600">
                  WhatsApp e telefone direto:{" "}
                  <strong className="text-slate-900">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b38245]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#8f6229] font-bold">
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento presencial em nossa sede e suporte online contínuo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#b38245]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#b38245]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#b38245]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#b38245] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#b38245]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#b38245] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b38245]"
                  />
                  <div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 font-medium hover:text-[#b38245] transition-colors"
                    >
                      {ADDRESS_TEXT}
                    </a>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Cláudio - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[#fbf9f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b38245] via-[#dfae67] to-[#0e223a]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Medalhão Dourado LSS - Santiago, Silva & Santos"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[14px] font-bold uppercase tracking-[0.14em] text-[#091728]">
                    SANTIAGO, SILVA & SANTOS
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#8f6229] uppercase mt-0.5">
                    SOCIEDADE DE ADVOGADOS · LSS
                  </p>
                </div>
              </div>

              {/* Photo Presentation - Partners */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Sócios Armando Santiago, Lucas da Silva e Silva e Ana Carolina Santos"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Orientação Jurídica Clara e Responsável</p>
                  <p className="text-[10px] text-slate-200">Cláudio · Centro-Oeste / Sul de Minas & Atendimento Digital</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-slate-700">
                <strong className="font-semibold text-slate-900">
                  {FIRM_NAME}
                </strong>
                <br />
                {PARTNERS_TEXT}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8f6229]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-medium text-slate-900 font-semibold">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-slate-600">
                    Sede em Cláudio - Rosário
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#8f6229] font-bold">Todo o Brasil</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar um atendimento com a Santiago, Silva & Santos."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="w-full justify-center"
                >
                  <WhatsAppIcon size={16} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 9: PRÉ-FOOTER BANNER (Midnight Slate) */}
        <section className="border-t border-slate-800 bg-[#0a1524] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#dfae67]" /> SANTIAGO, SILVA & SANTOS SOCIEDADE DE ADVOGADOS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Prontos para analisar sua causa e defender seus direitos com técnica impecável e clareza.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Preciso de orientação jurídica para o meu caso com a equipe Santiago, Silva & Santos."
              )}
              target="_blank"
              size="lg"
              variant="gold"
              className="rounded-lg shadow-lg whitespace-nowrap"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp Agora
            </GlowingButton>
          </div>
        </section>

        {/* DOBRA 10: RODAPÉ INSTITUCIONAL (Midnight Slate) */}
        <footer className="border-t border-slate-800 bg-[#060d16] px-5 py-14 text-slate-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Santiago, Silva & Santos Sociedade de Advogados"
                className="flex items-center gap-3.5"
              >
                <div className="relative size-14 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Medalhão Dourado - Santiago, Silva & Santos"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-lg font-bold tracking-[0.14em] text-white">
                    SANTIAGO, SILVA & SANTOS
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#dfae67] uppercase mt-0.5">
                    SOCIEDADE DE ADVOGADOS · LSS
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Advocacia com orientação clara e responsável em Direito Civil, Previdenciário (INSS Rural e Urbano), Trabalhista, Imobiliário, Família e Sucessões, com sede em Cláudio - MG e atendimento digital em todo o território nacional.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0a1524] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfae67] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#dfae67]" /> Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0a1524] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfae67] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (124 avaliações)
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Navegação Rápida
              </p>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a className="footer-link" href="#inicio">
                    Início
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#sobre">
                    O Escritório & Sócios
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#atuacao">
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#diferenciais">
                    Diferenciais da Banca
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#avaliacoes">
                    Avaliações no Google (124)
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#faq">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#contato">
                    Contato & Sede
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Info */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Atendimento & Sede
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                <li>
                  <strong className="text-white">Telefone / WhatsApp:</strong>
                  <br />
                  <a
                    href={getWhatsAppUrl("Olá! Gostaria de falar com o escritório Santiago, Silva & Santos.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#dfae67] hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Endereço:</strong>
                  <br />
                  {ADDRESS_TEXT}
                </li>
                <li>
                  <strong className="text-white">Horário de Funcionamento:</strong>
                  <br />
                  Segunda a Sexta: 08:00 às 18:00
                </li>
                <li>
                  <strong className="text-white">E-mail:</strong>
                  <br />
                  <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white">
                    {EMAIL_CONTACT}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Áreas Principais:</strong>
                  <br />
                  Civil · Previdenciário · Trabalhista · Imobiliário · Família
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800/80 pt-6 text-center text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Santiago, Silva & Santos Sociedade de Advogados (LSS Advogados Associados). Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              R. Goiás, 521 - 1° andar - Rosário, Cláudio - MG, 35530-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating Quick WhatsApp CTA Button (Bottom Right) */}
        <aside
          aria-label="Atendimento no WhatsApp"
          className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
          <a
            href={getWhatsAppUrl(
              "Olá! Gostaria de um atendimento jurídico pelo WhatsApp com a equipe da Santiago, Silva & Santos."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Santiago, Silva & Santos"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">Falar no WhatsApp</span> · Santiago, Silva & Santos
            </span>
            <span className="sm:hidden font-bold">WhatsApp</span>
          </a>
        </aside>

        {/* Modal Dialog for Practice Area Detailed Topics */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-slate-700 bg-[#0a1524] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-white transition-colors hover:border-[#dfae67] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-[#060d16] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Medalhão Dourado Coluna Romana - Santiago, Silva & Santos"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">SANTIAGO, SILVA & SANTOS</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfae67] uppercase">
                      LSS ADVOGADOS ASSOCIADOS
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfae67]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfae67]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-slate-400 transition-colors hover:text-white cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
