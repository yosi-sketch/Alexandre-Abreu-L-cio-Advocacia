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
  FileSpreadsheet,
  Globe,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531998508837";
const PHONE_DISPLAY = "(31) 99850-8837";
const EMAIL_CONTACT = "contato@katiasilaine.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/drakatiasilainesantos/";
const INSTAGRAM_HANDLE = "@drakatiasilainesantos";

const FIRM_NAME = "KATIA SILAINE SANTOS — Advocacia e Consultoria Jurídica";
const FIRM_SHORT_NAME = "Dra. Katia Silaine Santos Advocacia";
const FIRM_SLOGAN = "Direito Trabalhista, Previdenciário e Cível com clareza, empatia e compromisso";
const LAWYER_NAME = "Dra. Katia Silaine Santos";

const ADDRESS_TEXT = "R. Pres. Kenedy, 189 - José Brandão, Caeté - MG, 34800-000";
const REGION_TEXT =
  "Caeté · Região Metropolitana de Belo Horizonte · Minas Gerais & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Katia+Silaine+Santos+%E2%80%94+Advocacia%0ACaet%C3%A9+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=8e995f6d8e2c150c&sxsrf=AKL5yDgxuhzzmEV9GBmUyzc0zDRN-lG0Xw:1793284901381&q=katia+silaine+santos+-+advocacia+c%C3%ADvel,+trabalhista+e+previdenci%C3%A1ria+caet%C3%A9+endere%C3%A7o&ludocid=10417646432820166884&sa=X&ved=2ahUKEwj5-Zvsut-XAxXvA7kGHdxLLwcQ6BN6BAg7EAI";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogada.jpg";
const FOTO_SOBRE_SRC = "/sobre-advogada.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Katia! Gostaria de conversar sobre o meu caso e agendar um atendimento jurídico.";
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
    id: "direito-trabalhista",
    title: "Direito Trabalhista & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Rescisão Indireta · Horas Extras · Acidentes de Trabalho · Insalubridade",
    summary:
      "Defesa firme e combativa dos direitos do trabalhador contra injustiças, demissões abusivas e verbas sonegadas.",
    details:
      "O trabalhador dedica seu tempo e sua saúde, e merece receber exatamente o que a lei garante. A Dra. Katia Silaine Santos atua com rigor e sensibilidade na apuração de verbas rescisórias não pagas, reconhecimento de vínculo de emprego sem carteira assinada, ações de rescisão indireta em decorrência de faltas graves da empresa, cobrança de horas extras e intervalos, além de indenizações por acidentes de trabalho e doenças ocupacionais.",
    topics: [
      "Ação de Rescisão Indireta do Contrato de Trabalho (demissão motivada pelo descumprimento do empregador)",
      "Cálculo e cobrança judicial de Verbas Rescisórias, salários em atraso, FGTS e multa de 40%",
      "Cobrança de Horas Extras, adicional noturno e descansos semanais remunerados suprimidos",
      "Reconhecimento de vínculo empregatício com anotação retroativa na Carteira de Trabalho (CTPS)",
      "Adicionais de Insalubridade e Periculosidade por exposição a riscos e agentes nocivos à saúde",
      "Indenizações por Acidente de Trabalho, doenças profissionais e reparação por assédio moral",
      "Reversão judicial de Demissão por Justa Causa indevida com garantia de todas as indenizações",
    ],
    whatsAppText:
      "Olá, Dra. Katia! Gostaria de consultar sobre meus direitos trabalhistas (rescisão, demissão ou horas extras).",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: HeartHandshake,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Salário-Maternidade",
    summary:
      "Orientação acolhedora e segura para conquistar seu benefício no INSS ou reverter negativas na Justiça Federal.",
    details:
      "O benefício previdenciário garante o sustento e a tranquilidade da sua família. A Dra. Katia Silaine Santos conduz requerimentos administrativos e processos judiciais para concessão de aposentadorias (idade, tempo e especial), BPC/LOAS para idosos e pessoas com deficiência em situação de vulnerabilidade, auxílio por incapacidade temporária (auxílio-doença), aposentadoria por invalidez, pensão por morte e salário-maternidade, revertendo negativas indevidas do INSS.",
    topics: [
      "Aposentadoria por Idade e Tempo de Contribuição (enquadramento nas regras de transição da Reforma)",
      "BPC / LOAS (Benefício de Prestação Continuada para Idosos 65+ e Pessoas com Deficiência de baixa renda)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e restabelecimento de benefícios cancelados",
      "Aposentadoria por Incapacidade Permanente (Aposentadoria por Invalidez)",
      "Salário-Maternidade para trabalhadoras urbanas, rurais e contribuintes individuais",
      "Pensão por Morte para dependentes com comprovação segura de união estável e dependência",
      "Ações judiciais perante a Justiça Federal para reverter indeferimentos do INSS e receber atrasados",
    ],
    whatsAppText:
      "Olá, Dra. Katia! Gostaria de orientação sobre aposentadoria, BPC/LOAS ou benefício do INSS.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família, Sucessões & Inventários",
    icon: Users,
    tag: "Inventários em Cartório · Divórcio · Partilha de Bens · Pensão Alimentícia",
    summary:
      "Condução humanizada, sensível e ágil de inventários, partilhas e acordos familiares para preservar seu patrimônio.",
    details:
      "Momentos de transição familiar exigem não apenas conhecimento técnico, mas empatia, discrição e apoio genuíno. A Dra. Katia atua com maestria em inventários judiciais e extrajudiciais (em cartório, com muito mais rapidez e economia), divórcios consensuais e litigiosos, partilha equitativa de bens, fixação de pensão alimentícia, guarda e convivência familiar, sempre buscando pacificar conflitos e proteger seus direitos.",
    topics: [
      "Inventário Extrajudicial em Cartório (rápido, prático e econômico) e Inventário Judicial",
      "Divórcio Consensual e Litigioso, dissolução de união estável e partilha de bens do casal",
      "Ações de Fixação, Revisão e Cobrança de Pensão Alimentícia com apuração real dos rendimentos",
      "Regulamentação de Guarda compartilhada e convivência equilibrada com os filhos",
      "Planejamento Sucessório preventivo com doações em vida, usufruto e proteção patrimonial",
      "Alvarás judiciais para levantamento de valores, FGTS e contas bancárias de falecidos",
    ],
    whatsAppText:
      "Olá, Dra. Katia! Gostaria de suporte jurídico para um inventário ou questão de Direito de Família.",
  },
  {
    id: "direito-civil-contratos",
    title: "Direito Civil & Defesa do Consumidor",
    icon: Scale,
    tag: "Indenizações · Contratos · Cobranças · Danos Morais e Materiais",
    summary:
      "Assessoria jurídica preventiva e combativa para reparar prejuízos, honrar contratos e combater abusos.",
    details:
      "Relações patrimoniais e de consumo bem estruturadas evitam litígios e garantem segurança. O escritório atua na elaboração e revisão técnica de contratos civis, ações de reparação por danos morais e materiais, cobranças judiciais de dívidas e títulos, além da defesa do consumidor contra cobranças indevidas, fraudes bancárias e inclusões ilegais nos órgãos de proteção ao crédito (SPC/Serasa).",
    topics: [
      "Ações de Reparação por Danos Morais, Materiais e Estéticos decorrentes de ilícitos civis",
      "Defesa do Consumidor contra negativação indevida, juros abusivos e golpes bancários",
      "Elaboração minuciosa e revisão de Contratos Civis e Comerciais com cláusulas protetivas",
      "Ações de Cobrança judicial (Execução de Títulos, Ações Monitórias) e recuperação de créditos",
      "Resolução pacífica de impasses contratuais e mediação extrajudicial",
      "Cumprimento forçado de obrigações de fazer e rescisões com apuração de perdas e danos",
    ],
    whatsAppText:
      "Olá, Dra. Katia! Gostaria de orientação em Direito Civil, contratos ou danos morais.",
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário Estratégico",
    icon: FileSpreadsheet,
    tag: "Análise de CNIS · Cálculo do Melhor Benefício · Prevenção de Erros",
    summary:
      "Estudo detalhado do seu histórico de trabalho para você conquistar a melhor aposentadoria possível sem perder dinheiro.",
    details:
      "Aposentar-se sem planejamento pode custar milhares de reais perdidos todos os anos. Com uma auditoria completa do seu Extrato Previdenciário (CNIS), a Dra. Katia identifica períodos não computados, simula as regras de transição mais vantajosas e orienta os recolhimentos ideais para você alcançar o teto do benefício com tranquilidade.",
    topics: [
      "Auditoria e diagnóstico completo de todo o histórico contributivo no extrato do CNIS",
      "Correção de pendências cadastrais, indicadores de erro e vínculos em aberto perante o INSS",
      "Simulação comparativa entre todas as regras de transição pós-Reforma da Previdência",
      "Cálculo exato da data ideal para requerer o benefício e estimativa de valor da renda mensal",
      "Indicação dos valores ideais de contribuição futura para maximizar o benefício final",
    ],
    whatsAppText:
      "Olá, Dra. Katia! Gostaria de realizar um Planejamento Previdenciário para a minha aposentadoria.",
  },
  {
    id: "atendimento-digital-brasil",
    title: "Atendimento Digital Humanizado para Todo o Brasil",
    icon: Globe,
    tag: "Videoconferência · Assinatura Digital · Acompanhamento Ágil no WhatsApp",
    summary:
      "A mesma atenção acolhedora e excelência técnica no conforto da sua casa, em qualquer cidade do país.",
    details:
      "Você não precisa sair de casa para contar com a advocacia dedicada da Dra. Katia Silaine Santos. Através de ferramentas digitais seguras, realizamos consultas por vídeo, envio prático de fotos e documentos pelo celular e assinatura eletrônica de contratos, permitindo defender seus direitos nos tribunais e no INSS com máxima rapidez e proximidade.",
    topics: [
      "Consultas jurídicas individualizadas por chamada de vídeo com a Dra. Katia",
      "Envio ágil e seguro de documentos e comprovantes diretamente pelo WhatsApp",
      "Assinatura eletrônica de procurações e contratos com plena validade jurídica",
      "Acompanhamento constante com atualizações no seu celular sobre cada movimentação",
      "Atuação integrada perante a Justiça do Trabalho, Justiça Federal e Cartórios de todo o Brasil",
    ],
    whatsAppText:
      "Olá, Dra. Katia! Sou de outra cidade e gostaria de saber como funciona o atendimento online.",
  },
];

const clientReviews = [
  {
    name: "Debora Cristine Debora",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Excelente Atendimento e Muita Segurança",
    rating: 5,
    content:
      "Profissional extremamente competente e dedicado. Desde o início, explicou cada etapa do processo com clareza, me transmitindo muita segurança. Recomendo de olhos fechados! Um atendimento de excelência! Deus abençoe você grandemente.",
    reply: "Fico feliz em poder ajudar! Eu quem agradeço a confiança 🙏🏻",
  },
  {
    name: "Elaine Freitas",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Mais que uma Advogada, uma Amiga de Verdade",
    rating: 5,
    content:
      "Minha experiência com a Dra. Katia foi nos momentos mais difíceis da minha vida, eu tinha perdido minha mãe, precisava fazer um inventário e ela foi mais que uma advogada, uma amiga! Me orientou em tudo com toda paciência e sempre alegre, isso pra mim foi tudo. Muito obrigada, Deus continue abençoando sua vida cada dia mais! 🙏❤️",
  },
  {
    name: "Regina Aparecida",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Sem Lero Lero: Nota Mil",
    rating: 5,
    content:
      "Profissional! Explica tudo bem direitinho, disposta em ajudar mesmo, sem lero lero, nota mil!",
  },
  {
    name: "Mariana Santos",
    reviewerTag: "Local Guide · 19 avaliações · 5,0 ★",
    badge: "Inteligente, Poderosa e Resolve Tudo",
    rating: 5,
    content:
      "Muito inteligente, sabe fazer as coisas, resolve tudo. Nunca vi uma advogada assim. Se eu precisar de novo, não vou pensar duas vezes. Eu indico mil vezes. Poderosa!",
  },
  {
    name: "Sérgio Eleutério dos Reis",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Super Correta, Honesta e Atualizada",
    rating: 5,
    content:
      "Advogada super correta e honesta nas explicações sobre a causa e valores e possíveis ganhos. Se atualiza sobre as leis trabalhistas mais recentes! Recomendo demais!!!!",
  },
  {
    name: "Renata Vicente",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Sensibilidade e Profissionalismo Impecável",
    rating: 5,
    content:
      "Super recomendo! Conhecimento, sensibilidade, capacidade de negociação, são umas das qualidades que encontrei no seu atendimento. Profissionalismo impecável!",
  },
  {
    name: "Maria Aparecida",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "A Gente Fica Muito à Vontade",
    rating: 5,
    content:
      "Estou muito satisfeita com o trabalho, ela tem uma dedicação, a gente fica à vontade com ela. Doutora Kátia você é maravilhosa!",
  },
  {
    name: "Douglas Silva",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Transparência Total e Educação",
    rating: 5,
    content:
      "Estou muito satisfeito pelo trabalho prestado, pela educação, pela atenção, muito bom trabalho e sempre transparente com o cliente.",
  },
  {
    name: "Alexis Dornelas",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Clara nas Explicações do Serviço",
    rating: 5,
    content:
      "Excelente profissional. Muito clara nas explicações diante do serviço a ser prestado.",
    reply: "Agradeço a confiança!",
  },
];

const faqs = [
  {
    q: "Onde fica localizado o escritório da Dra. Katia Silaine Santos?",
    a: "Nosso escritório está localizado na R. Pres. Kenedy, 189 - José Brandão, Caeté - MG (CEP 34800-000). Contamos com uma sede acolhedora para atendimento presencial com hora marcada, além de atendimento online para toda a Região Metropolitana de BH e para todo o Brasil.",
  },
  {
    q: "Como funciona o atendimento online para quem mora fora de Caeté?",
    a: "O atendimento digital é simples, seguro e muito acolhedor. Nós conversamos diretamente pelo WhatsApp ou por chamada de vídeo, analisamos suas fotos e documentos em formato PDF ou imagem e você assina a procuração e os documentos pelo próprio celular, com total validade jurídica e segurança.",
  },
  {
    q: "Fui demitido ou estou passando por situações abusivas na empresa. O que fazer?",
    a: "O primeiro passo é reunir recibos de pagamento, extrato do FGTS, mensagens e testemunhas. A Dra. Katia realiza uma análise minuciosa para verificar se houve supressão de horas extras, adicionais de insalubridade não pagos, atraso reiterado de salários ou cabimento de Rescisão Indireta (onde o empregado sai da empresa recebendo todos os direitos de uma demissão sem justa causa).",
  },
  {
    q: "Tive meu benefício do INSS (Auxílio-Doença, BPC/LOAS ou Aposentadoria) negado. Posso recorrer?",
    a: "Sim, com certeza. A maioria dos indeferimentos do INSS ocorre por falhas documentais ou perícias médicas superficiais. Nós examinamos o processo administrativo e, constatado o direito, ingressamos com ação perante a Justiça Federal, onde novos laudos e provas são produzidos para garantir a concessão do benefício e o pagamento de todas as parcelas atrasadas.",
  },
  {
    q: "Como funciona o Inventário em Cartório (Extrajudicial)?",
    a: "Quando todos os herdeiros são maiores de idade, capazes e estão de acordo com a partilha dos bens (e não há testamento conflitante), o inventário pode ser feito diretamente em Cartório de Notas. É um procedimento consideravelmente mais rápido, menos desgastante emocionalmente e mais econômico do que a via judicial.",
  },
  {
    q: "Como posso agendar uma conversa com a Dra. Katia Silaine Santos?",
    a: "Você pode clicar em qualquer um dos botões desta página para iniciar uma conversa direta pelo WhatsApp no número (31) 99850-8837. Basta nos contar resumidamente a sua necessidade e agendaremos o seu horário com a maior brevidade.",
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
          isDark ? "text-white" : "text-[#0e141c]"
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
      <main className="relative min-h-screen selection:bg-[#ca9759] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (Deep Obsidian Charcoal - Alto Contraste) */}
        <div className="border-b border-slate-800 bg-[#080c12] px-4 py-2.5 text-center text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#dfae67]" />
              <strong>Sede em Caeté - MG</strong>
              <span className="hidden md:inline text-slate-400">
                · R. Pres. Kenedy, 189 - José Brandão · Atendimento Presencial & Online em Todo o Brasil
              </span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f3dfb9] transition-colors"
            >
              <span className="flex text-[#dfae67]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#dfae67]" />
                ))}
              </span>
              <span>5,0 ★ no Google (57 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Clean Silk White, Obsidian & Imperial Gold) */}
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
              aria-label="Katia Silaine Santos Advocacia e Consultoria Jurídica - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-10"
            >
              <div className="relative size-[48px] sm:size-[54px] lg:size-[58px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma Dourado KS - Dra. Katia Silaine Santos"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-[15px] sm:text-[17px] lg:text-[19px] font-bold tracking-[0.14em] text-[#0e141c] leading-tight">
                  KATIA SILAINE SANTOS
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] font-bold tracking-[0.22em] text-[#8e6027] uppercase mt-0.5">
                  ADVOCACIA & CONSULTORIA JURÍDICA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (57)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Right Action: Primary WhatsApp Button (Imperial Gold Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Katia! Gostaria de agendar uma consulta jurídica com você."
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
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b88540]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    A Advogada & Escritório
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b88540]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b88540]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Diferenciais
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b88540]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (57)
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b88540]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b88540]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Contato & Sede em Caeté
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

        {/* DOBRA 1: HERO SECTION (Clean Silk White & Imperial Gold Aura) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(223,174,103,0.15),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(16,22,31,0.06),transparent_65%)]" />

          <div className="mx-auto grid min-h-[620px] max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center gap-10 px-5 sm:px-8 lg:min-h-[700px] lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-16 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:max-w-xl xl:max-w-2xl"
            >
              {/* Secondary Gold Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#ca9759]/30 bg-[#fdfbf7] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6027] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfae67] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#ca9759]"></span>
                </span>
                <span>DRA. KATIA SILAINE SANTOS · CAETÉ - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0e141c] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Defesa firme dos seus direitos, orientação jurídica clara e{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6027] via-[#ca9759] to-[#dfae67]">
                  atendimento verdadeiramente humano.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Sob a liderança da advogada <strong className="font-semibold text-slate-900">Dra. Katia Silaine Santos</strong>, nosso escritório alia rigor técnico, combate intransigente e acolhimento em <strong className="font-semibold text-slate-900">Direito Trabalhista, Previdenciário (INSS) e Cível / Família</strong>. Reconhecido com nota máxima 5,0 ★ no Google (57 avaliações). Sede acolhedora em Caeté - MG e atendimento digital ágil para todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Katia! Gostaria de conversar com você para analisar o meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-lg"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com a Dra. Katia
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
                  <CheckCircle2 size={16} className="text-[#b88540] shrink-0" />
                  <span>Direito do Trabalhador & Rescisão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b88540] shrink-0" />
                  <span>Aposentadorias, BPC/LOAS & INSS</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#b88540] shrink-0" />
                  <span>Inventários, Família & Contratos</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dra. Katia Official Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-[460px] xl:max-w-[500px]"
            >
              {/* Luxury ambient warm glow */}
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#ca9759]/30 via-[#dfae67]/15 to-[#10161f]/15 blur-2xl opacity-75" />

              <div className="relative aspect-[3.6/5] sm:aspect-[3.8/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50 shadow-[0_25px_60px_-15px_rgba(14,20,28,0.25)] ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Katia Silaine Santos — Advocacia Cível, Trabalhista e Previdenciária"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-5 lg:bottom-5 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4 lg:p-4.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8e6027]">
                        Advogada Titular
                      </p>
                      <p className="font-serif text-sm font-bold text-slate-900 sm:text-base lg:text-lg">
                        Dra. Katia Silaine Santos
                      </p>
                      <p className="text-[10.5px] sm:text-[11.5px] text-slate-600 line-clamp-1 mt-0.5">
                        Trabalhista · Previdenciário (INSS) · Cível e Inventários
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-[#ca9759]/30 bg-[#fdfbf7] px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold text-[#8e6027] shadow-xs">
                      5,0 ★ Google
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: SOBRE A ADVOGADA & O ESCRITÓRIO (Silk Surface) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-slate-200 bg-[#faf8f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Katia Portrait & Authority Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[440px] lg:max-w-[420px]"
            >
              <div className="relative aspect-[3.7/5] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Katia Silaine Santos — Atendimento humanizado em Caeté - MG"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-8 right-2 max-w-[340px] rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-4 sm:px-6">
                <div className="flex items-center gap-2 text-[#b88540]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e6027]">
                    Atendimento Humanizado
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Dra. Katia Silaine Santos
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8e6027]">
                  Advocacia Cível, Trabalhista e Previdenciária
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  R. Pres. Kenedy, 189 - José Brandão · Caeté - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#ca9759]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#ca9759]/25 bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e6027] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#ca9759]" />
                <span>COMPROMISSO ÉTICO, PROXIMIDADE E RESULTADO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0e141c] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia acolhedora, transparente e incansável na{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6027] via-[#ca9759] to-[#dfae67]">
                  conquista dos seus direitos legítimos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                A <strong className="font-bold text-slate-900">Dra. Katia Silaine Santos</strong> consolidou sua atuação na advocacia pautada em valores que fazem a diferença na vida real de cada cliente: escuta atenta, comunicação clara ("sem lero lero", explicando cada passo com paciência) e firmeza combativa na defesa dos interesses de quem confia em seu trabalho.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Seja para garantir a reparação justa de verbas trabalhistas de quem deu seu suor pela empresa, assegurar uma aposentadoria, BPC/LOAS ou auxílio-doença no INSS, ou amparar famílias na condução sensível e célere de inventários e partilhas, cada processo é tratado com a máxima dedicação pessoal, sigilo e rigor técnico.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;Minha experiência com a Dra. Katia foi nos momentos mais difíceis da minha vida, eu tinha perdido minha mãe, precisava fazer um inventário e ela foi mais que uma advogada, uma amiga! Me orientou em tudo com paciência e sempre alegre, isso pra mim foi tudo.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8e6027]">
                  — Elaine Freitas (Avaliação verificada 5,0 ★ no Google)
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
                    57 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Atendimento Direto</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Com a Dra. Katia Silaine
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Sede em Caeté - MG</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    R. Pres. Kenedy, 189
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b88540] shrink-0" />
                  <span>Sede acolhedora na R. Pres. Kenedy, 189 - José Brandão, Caeté - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b88540] shrink-0" />
                  <span>Atendimento online humanizado para clientes de todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Katia! Gostaria de conversar com você sobre a minha causa."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Katia Silaine
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (Deep Obsidian Slate - Alto Impacto) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-slate-800 bg-[#080c12] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILARES DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossas áreas de especialidade técnica. Clique em qualquer área para ver os detalhes, estratégias e direcionamento imediato para o seu caso."
              >
                Soluções jurídicas com dedicação em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3dfb9] to-[#dfae67]">
                  Caeté, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Katia! Gostaria de tirar uma dúvida sobre uma área de atuação."
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
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0e141c] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ca9759] hover:bg-[#131b26] hover:shadow-[0_12px_36px_rgba(202,151,89,0.22)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-700 bg-[#1b2635] text-[#dfae67] transition-colors group-hover:border-[#ca9759] group-hover:bg-[#ca9759] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfae67]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#fcf8f0]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f3dfb9]">
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
              description="A combinação de transparência sem enrolação, empatia genuína e atuação combativa em defesa dos seus direitos."
            >
              O que diferencia a advocacia da{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6027] via-[#ca9759] to-[#dfae67]">
                Dra. Katia Silaine Santos?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#faf8f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ca9759] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ca9759]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8e6027]">
                      <Compass size={14} /> Clareza & Transparência
                    </span>
                    <span className="text-xs font-semibold text-[#8e6027]">
                      5,0 ★ Google (57)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Sem Lero Lero: Explicações Claras e Acessíveis
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como destacam as dezenas de avaliações cinco estrelas no Google, a Dra. Katia se diferencia pela linguagem franca e didática. Você não fica perdido em termos jurídicos complicados: cada etapa do processo é explicada nos mínimos detalhes, com as reais chances de êxito e transparência total.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88540]" />
                      <span>Comunicação direta e acolhedora com a própria advogada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88540]" />
                      <span>Respostas rápidas no WhatsApp sobre cada andamento da sua causa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88540]" />
                      <span>Honorários justos, transparentes e alinhados ao Código de Ética da OAB</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Katia! Gostaria de conversar com você sobre a minha situação jurídica."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#ca9759] hover:bg-[#ca9759] hover:text-white"
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
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#faf8f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ca9759] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#ca9759]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8e6027]">
                      <HeartHandshake size={14} /> Acolhimento & Sensibilidade
                    </span>
                    <span className="text-xs font-semibold text-[#8e6027]">
                      Atendimento Humanizado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Dedicação Pessoal a Cada Caso e Cada Família
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    O seu processo não é apenas mais um número. Seja em um momento doloroso como a perda de um familiar para fazer um inventário, ou diante da angústia de uma demissão injusta ou negativa do INSS, você encontra um porto seguro de apoio, sensibilidade e firmeza técnica para lutar pelo que é seu por direito.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88540]" />
                      <span>Empatia profunda e respeito à sua história de vida e trabalho</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88540]" />
                      <span>Sede acolhedora na R. Pres. Kenedy, 189 - José Brandão em Caeté</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88540]" />
                      <span>Atuação forte nos tribunais, varas trabalhistas, Justiça Federal e cartórios</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Katia! Gostaria de agendar um atendimento para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#ca9759] hover:bg-[#ca9759] hover:text-white"
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

        {/* DOBRA 5: MÉTODO EM 3 ETAPAS (Deep Obsidian Slate) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#080c12] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, estratégico e focado na proteção dos seus direitos e do seu bem-estar."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3dfb9] to-[#dfae67]">
                  conduzir sua causa com segurança e tranquilidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-slate-800 bg-[#0e141c] p-6 font-serif text-base italic leading-7 text-slate-200 shadow-md">
                &ldquo;Nosso compromisso é desmistificar o direito e entregar uma advocacia de resultado, pautada na verdade, na ética e na defesa incansável de quem confia em nosso trabalho.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfae67]">
                  — Dra. Katia Silaine Santos
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
                  "Atendimento Acolhedor & Diagnóstico Preciso",
                  "Contato direto pelo WhatsApp ou presencialmente em nossa sede na R. Pres. Kenedy em Caeté. Avaliamos detalhadamente seus documentos e fatos com sigilo profissional absoluto.",
                ],
                [
                  "02",
                  "Estratégia Jurídica & Ação Resolutiva",
                  "Planejamos a melhor rota jurídica (seja requerimento administrativo no INSS, inventário em cartório, ação trabalhista ou civil), atuando com rapidez e rigor perante as instâncias competentes.",
                ],
                [
                  "03",
                  "Acompanhamento Transparente & Informação Direta",
                  "Você não fica no escuro. A Dra. Katia mantém você informado sobre cada andamento e decisão diretamente no seu celular, com explicações fáceis de compreender.",
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

        {/* DOBRA 6: AVALIAÇÕES GOOGLE 5.0 (Silk Surface - Depoimentos Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-slate-200 bg-[#faf8f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos reais e espontâneos de clientes atendidos pela Dra. Katia Silaine Santos em Caeté e em Minas Gerais."
              >
                Avaliado com nota máxima 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6027] via-[#ca9759] to-[#dfae67]">
                  57 avaliações no Google.
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
                    Katia Silaine Santos — Advocacia
                  </p>
                  <p className="text-[11px] text-slate-500">
                    57 avaliações 5 estrelas no Google
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
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#ca9759] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#dfae67]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#dfae67]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#ca9759]/25 bg-[#fdfbf7] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8e6027]">
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
                      <div className="mt-3 rounded-lg border-l-2 border-[#ca9759] bg-[#fdfbf7] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#8e6027]">Resposta da Dra. Katia:</p>
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#ca9759] hover:text-[#8e6027]"
              >
                <GoogleIcon size={16} /> Ver avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7: PERGUNTAS FREQUENTES / FAQ (Deep Obsidian Slate) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-slate-800 bg-[#080c12] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3dfb9] to-[#dfae67]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Transparência total desde o primeiro contato. Se você tiver outra dúvida sobre seu caso, fale agora mesmo com a Dra. Katia no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#0e141c] transition-colors hover:border-slate-700"
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
                    "Olá, Dra. Katia! Gostaria de tirar uma dúvida jurídica com você."
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
                eyebrow="CONTATO & SEDE EM CAETÉ - MG"
                description="Converse diretamente com a Dra. Katia Silaine Santos pelo WhatsApp para acolhimento imediato, sigilo e rigor técnico."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e6027] via-[#ca9759] to-[#dfae67]">
                  orientar você e defender seus interesses com responsabilidade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Katia! Gostaria de agendar um atendimento com você."
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
                    className="mt-0.5 shrink-0 text-[#b88540]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#8e6027] font-bold">
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento presencial em nossa sede e suporte online contínuo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#b88540]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#8e6027]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#b88540]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8e6027] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#b88540]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8e6027] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b88540]"
                  />
                  <div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 font-medium hover:text-[#8e6027] transition-colors"
                    >
                      {ADDRESS_TEXT}
                    </a>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Caeté - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[#faf8f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b88540] via-[#dfae67] to-[#10161f]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma Dourado KS - Dra. Katia Silaine Santos"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[14px] font-bold uppercase tracking-[0.14em] text-[#0e141c]">
                    KATIA SILAINE SANTOS
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#8e6027] uppercase mt-0.5">
                    ADVOCACIA & CONSULTORIA JURÍDICA
                  </p>
                </div>
              </div>

              {/* Photo Presentation - Dra. Katia */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Katia Silaine Santos em seu escritório"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Defesa intransigente dos seus direitos</p>
                  <p className="text-[10px] text-slate-200">Caeté · Região Metropolitana de BH & Atendimento Digital</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-slate-700">
                <strong className="font-semibold text-slate-900">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} · Advocacia e Consultoria Jurídica
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8e6027]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-medium text-slate-900 font-semibold">
                    08:00 às 18:00
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-slate-600">
                    Sede em Caeté - José Brandão
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#8e6027] font-bold">Todo o Brasil</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Katia! Gostaria de agendar um atendimento com você."
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

        {/* DOBRA 9: PRÉ-FOOTER BANNER (Deep Obsidian Charcoal) */}
        <section className="border-t border-slate-800 bg-[#0e141c] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#dfae67]" /> KATIA SILAINE SANTOS — ADVOCACIA E CONSULTORIA JURÍDICA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronta para analisar o seu caso e defender seus direitos com técnica impecável e clareza.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dra. Katia! Preciso de orientação jurídica para o meu caso."
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

        {/* DOBRA 10: RODAPÉ INSTITUCIONAL (Deep Obsidian Slate) */}
        <footer className="border-t border-slate-800 bg-[#080c12] px-5 py-14 text-slate-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Katia Silaine Santos Advocacia e Consultoria Jurídica"
                className="flex items-center gap-3.5"
              >
                <div className="relative size-14 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma Dourado KS - Dra. Katia Silaine Santos"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-lg font-bold tracking-[0.14em] text-white">
                    KATIA SILAINE SANTOS
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#dfae67] uppercase mt-0.5">
                    ADVOCACIA & CONSULTORIA JURÍDICA
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Advocacia dedicada com orientação clara e responsável em Direito Trabalhista, Previdenciário (benefícios e aposentadorias do INSS), Cível e Direito de Família / Inventários. Sede em Caeté - MG e atendimento digital para todo o Brasil.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0e141c] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfae67] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#dfae67]" /> Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0e141c] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfae67] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (57 avaliações)
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
                    A Advogada
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
                    Avaliações no Google (57)
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
                    href={getWhatsAppUrl("Olá, Dra. Katia! Gostaria de falar com você.")}
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
                  Trabalhista · Previdenciário (INSS) · Cível · Inventários & Família
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800/80 pt-6 text-center text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Katia Silaine Santos — Advocacia e Consultoria Jurídica. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              R. Pres. Kenedy, 189 - José Brandão, Caeté - MG, 34800-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dra. Katia! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Katia Silaine Santos"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">Falar no WhatsApp</span> · Dra. Katia Silaine
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-slate-700 bg-[#0e141c] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
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
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-[#080c12] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma Dourado KS - Dra. Katia Silaine Santos"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">KATIA SILAINE SANTOS</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfae67] uppercase">
                      ADVOCACIA & CONSULTORIA JURÍDICA
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
