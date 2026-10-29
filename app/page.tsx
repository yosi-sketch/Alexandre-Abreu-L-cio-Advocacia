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
  Compass,
  FileSpreadsheet,
  Globe,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537999710510";
const PHONE_DISPLAY = "(37) 99971-0510";
const EMAIL_CONTACT = "contato@alexandreabreulucio.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/alexandreabreulucio/";
const INSTAGRAM_HANDLE = "@alexandreabreulucio";

const FIRM_NAME = "Escritório de Advocacia - Dr. Alexandre Abreu Lúcio";
const FIRM_SHORT_NAME = "Alexandre Abreu Lúcio — Advocacia";
const FIRM_SLOGAN =
  "Defesa combativa, rigor técnico e soluções jurídicas com discrição, ética e excelência";
const LAWYER_NAME = "Dr. Alexandre Abreu Lúcio";
const LAWYER_OAB = "OAB/MG 122.827";

const ADDRESS_TEXT =
  "Praça Dr. Isauro Epifânio, 141 - bairro São Francisco, Pitangui - MG, 35650-000";
const REGION_TEXT =
  "Pitangui · Centro-Oeste Mineiro · Minas Gerais & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Alexandre+Abreu+L%C3%BAcio+%E2%80%94+Advocacia%0APitangui+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=34388a73116c39a8&sxsrf=AKL5yDh6Ar49AJnbWOYP4bHubI94R1JngA:1793290699607&q=escrit%C3%B3rio+de+advocacia+-+dr.+alexandre+abreu+l%C3%BAcio+pitangui+endere%C3%A7o&ludocid=2858374849778695354&sa=X&ved=2ahUKEwiB34O50N-XAxWtqJUCHWDtKC8Q6BN6BAg7EAI";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogado.jpg";
const FOTO_SOBRE_SRC = "/sobre-advogado.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Alexandre! Gostaria de conversar sobre o meu caso e agendar um atendimento jurídico.";
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
    id: "direito-familia-ibdfam",
    title: "Direito de Família & Relações Familiares (IBDFAM)",
    icon: Users,
    tag: "Divórcio Consensual e Litigioso · Partilha de Bens · Guarda e Convivência · Alimentos",
    summary:
      "Atuação acolhedora, estratégica e pacificadora de conflitos com a autoridade de membro do Instituto Brasileiro de Direito de Família (IBDFAM).",
    details:
      "Questões de família exigem sensibilidade humana, discrição irrestrita e firmeza jurídica para preservar relacionamentos e proteger o patrimônio. Como membro do IBDFAM, o Dr. Alexandre Abreu Lúcio conduz divórcios consensuais e litigiosos, dissoluções de união estável, partilha de patrimônio com apuração de bens, fixação e revisão de alimentos (pensão alimentícia), além de acordos equilibrados de guarda e convivência com foco no melhor interesse dos filhos.",
    topics: [
      "Divórcio Consensual Extrajudicial em Cartório (rápido, prático e sem desgaste) e Divórcio Judicial Litigioso",
      "Dissolução de União Estável com partilha equilibrada de bens e proteção contra fraudes patrimoniais",
      "Ações de Fixação, Revisão, Exoneração e Execução de Alimentos (Pensão Alimentícia)",
      "Regulamentação de Guarda (compartilhada e unilateral) e plano detalhado de convivência familiar",
      "Investigação e Reconhecimento de Paternidade, filiação socioafetiva e tutela contra alienação parental",
      "Elaboração de Pactos Antenupciais e Contratos de Convivência com planejamento de regime de bens",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Gostaria de consultar sobre uma questão de Direito de Família (divórcio, pensão ou guarda).",
  },
  {
    id: "sucessoes-inventarios-planejamento",
    title: "Sucessões, Inventários & Planejamento Patrimonial",
    icon: Building2,
    tag: "Inventário em Cartório · Inventário Judicial · Heranças · Planejamento Sucessório",
    summary:
      "Condução ágil e pacífica de inventários judiciais e extrajudiciais, com desfecho seguro, economia de tributos e proteção aos herdeiros.",
    details:
      "O momento da perda de um ente querido não deve ser agravado por conflitos ou demoras burocráticas. O Dr. Alexandre Abreu Lúcio conduz Inventários Extrajudiciais em Cartório de Notas — com extrema celeridade e custos reduzidos quando há consenso entre herdeiros —, além de Inventários Judiciais complexos, arrolamentos, testamentos, doações com reserva de usufruto e planejamento sucessório estruturado para transferência harmoniosa de bens.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas (procedimento ágil, econômico e sem burocracia forense)",
      "Inventário Judicial e partilha de bens litigiosa entre herdeiros com apuração rigorosa do espólio",
      "Planejamento Sucessório preventivo com doação com reserva de usufruto e estruturação patrimonial",
      "Alvarás Judiciais para liberação rápida de saldos bancários, FGTS, PIS/PASEP e veículos de falecidos",
      "Regularização fundiária e imobiliária de bens herdados perante os Cartórios de Registro de Imóveis",
      "Defesa contra exclusão indevida de herdeiros necessários e anulação de partilhas fraudulentas",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Gostaria de orientações para abertura de inventário ou planejamento sucessório.",
  },
  {
    id: "direito-civil-indenizacoes-contratos",
    title: "Direito Civil, Contratos & Reparação de Danos",
    icon: Scale,
    tag: "Indenizações por Danos Morais e Materiais · Contratos · Cobranças · Usucapião",
    summary:
      "Rigor técnico na elaboração e blindagem de contratos, cobrança estratégica de créditos e ações de responsabilidade civil para reparar prejuízos.",
    details:
      "Relações patrimoniais e negociais exigem precisão jurídica para blindar direitos e afastar litígios dispendiosos. O Dr. Alexandre atua em ações de indenização por perdas e danos decorrentes de atos ilícitos ou acidentes, cobranças e execuções judiciais de dívidas e títulos, elaboração e revisão minuciosa de contratos cíveis e imobiliários, usucapião, reintegrações de posse e cumprimento compulsório de obrigações contratuais.",
    topics: [
      "Ações Indenizatórias por Danos Morais, Materiais, Estéticos e Lucros Cessantes",
      "Execução de Títulos Judiciais e Extrajudiciais, Ações Monitórias e recuperação de créditos inadimplidos",
      "Elaboração minuciosa e revisão técnica de Contratos Civis, Imobiliários e Comerciais",
      "Ações de Usucapião (judicial e extrajudicial em cartório), ações possessórias e disputas de propriedade",
      "Resolução pacífica de impasses contratuais e mediação técnica extrajudicial",
      "Cumprimento forçado de obrigações de fazer e rescisões motivadas com apuração de perdas e danos",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Preciso de assessoria jurídica em Direito Civil, contratos ou cobrança/indenização.",
  },
  {
    id: "direito-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Contra Abusos",
    icon: Shield,
    tag: "Negativação Indevida SPC/Serasa · Golpes Bancários · Juros Abusivos · Fraudes",
    summary:
      "Combate enérgico a práticas abusivas de instituições financeiras e fornecedores, com pedidos liminares de urgência e indenização integral.",
    details:
      "O consumidor não deve arcar com prejuízos provocados por fraudes, falhas de segurança bancária ou cobranças indevidas. O escritório atua com celeridade para obter decisões liminares imediatas que limpam o nome negativado no SPC e Serasa, revertem empréstimos fraudulentos (inclusive consignados não contratados), recuperam valores desviados em golpes e combatem cláusulas abusivas e juros extorsivos em financiamentos.",
    topics: [
      "Ação com Pedido Liminar para exclusão de negativação indevida no SPC/Serasa e indenização por dano moral",
      "Ações contra Golpes do Pix, fraudes bancárias, clonagem de cartões e invasões de contas correntes",
      "Anulação e restituição em dobro de Empréstimos Consignados e RMC (Reserva de Margem) não autorizados",
      "Ação Revisional de juros abusivos, tarifas ilegais e vendas casadas em financiamentos e contratos",
      "Indenizações por recusa indevida de cobertura de planos de saúde e seguradoras",
      "Defesa contra cobranças vexatórias, protestos indevidos e práticas desleais de consumo",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Sofri uma negativação indevida ou problema com banco/consumo e preciso de ajuda.",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & Benefícios do INSS",
    icon: HeartHandshake,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Invalidez · Planejamento Previdenciário",
    summary:
      "Planejamento previdenciário minucioso, requerimentos administrativos e processos na Justiça Federal para reverter negativas do INSS.",
    details:
      "A conquista do benefício previdenciário representa a segurança e o sustento de quem trabalhou a vida inteira ou enfrenta incapacidade temporária ou permanente. O Dr. Alexandre analisa todo o histórico contributivo no CNIS, identifica a regra de transição mais vantajosa pós-Reforma, e ingressa na Justiça Federal para anular indeferimentos arbitrários do INSS, garantindo a concessão do benefício com o pagamento de todos os atrasados devidos.",
    topics: [
      "Aposentadoria por Idade, Tempo de Contribuição e Especial (enquadramento nas regras mais vantajosas da Reforma)",
      "Planejamento Previdenciário com auditoria minuciosa do CNIS e cálculo do maior valor de benefício",
      "BPC / LOAS (Benefício de Prestação Continuada para Idosos 65+ e Pessoas com Deficiência de baixa renda)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente (Invalidez)",
      "Pensão por Morte para dependentes com comprovação segura de união estável e dependência econômica",
      "Ações perante a Justiça Federal para reverter perícias negativas do INSS e receber todos os retroativos",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Gostaria de uma avaliação sobre minha aposentadoria ou benefício no INSS.",
  },
  {
    id: "direito-trabalho-defesa-laboral",
    title: "Direito do Trabalho & Defesa dos Direitos Laborais",
    icon: Briefcase,
    tag: "Rescisão Indireta · Horas Extras · Acidentes de Trabalho · Insalubridade e Periculosidade",
    summary:
      "Atuação combativa na Justiça do Trabalho para reparação de abusos, apuração de verbas sonegadas e respeito à dignidade laboral.",
    details:
      "O trabalhador que dedica seu tempo e esforço tem direito ao cumprimento irrestrito das leis trabalhistas. O escritório promove ações para cobrança judicial de verbas rescisórias pendentes, reconhecimento de vínculo empregatício sem carteira assinada, rescisão indireta em razão de faltas graves da empresa, indenizações por acidentes de trabalho e doenças ocupacionais, além de adicionais de periculosidade e insalubridade.",
    topics: [
      "Ação de Rescisão Indireta do Contrato de Trabalho (demissão motivada pelo descumprimento das obrigações do empregador)",
      "Apuração e cobrança judicial de Verbas Rescisórias, salários em atraso, depósitos de FGTS e multa de 40%",
      "Cobrança de Horas Extras, horas de sobreaviso, adicional noturno e descansos semanais remunerados suprimidos",
      "Reconhecimento de vínculo de emprego com anotação retroativa na Carteira de Trabalho (CTPS)",
      "Adicionais de Insalubridade e Periculosidade decorrentes de exposição a riscos e agentes nocivos",
      "Indenizações por Acidente de Trabalho, doenças profissionais (LER/DORT) e assédio moral corporativo",
      "Reversão judicial de Demissões por Justa Causa indevidas com restabelecimento de todas as indenizações",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Gostaria de consultar sobre meus direitos trabalhistas (rescisão, demissão ou horas extras).",
  },
];

const clientReviews = [
  {
    name: "Carlos Eduardo Resende",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Excelente Atendimento e Muita Segurança",
    rating: 5,
    content:
      "Dr. Alexandre é um profissional diferenciado. Extremamente ético, atencioso e com um conhecimento jurídico admirável. Conduziu nosso inventário com uma rapidez impressionante e muita tranquilidade para toda a família. Recomendo de olhos fechados!",
    reply: "Agradeço a confiança depositada em nosso trabalho, Carlos!",
  },
  {
    name: "Mariana Vasconcelos de Oliveira",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Clareza, Transparência e Resultado",
    rating: 5,
    content:
      "Fui muito bem acolhida desde a primeira consulta. O Dr. Alexandre explicou cada etapa do processo com muita clareza e transparência, sempre pronto a tirar dúvidas no WhatsApp. Conquistamos um resultado excelente. Nota mil!",
  },
  {
    name: "Roberto Mendes da Silva",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Advocacia de Altíssimo Nível e Firmeza",
    rating: 5,
    content:
      "Advocacia de altíssimo nível em Pitangui e em toda a região! O Dr. Alexandre defendeu meus interesses com uma firmeza e dedicação que poucos advogados demonstram. Sua experiência institucional e ética transparecem na solidez do trabalho.",
  },
  {
    name: "Patrícia Helena Guimarães",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Sensibilidade e Profissionalismo Impecável",
    rating: 5,
    content:
      "Precisei de suporte em uma questão delicada de Direito de Família e o Dr. Alexandre foi fundamental. Soube conduzir com sensibilidade, firmeza e respeito à integridade de todos. O escritório é impecável e o atendimento humanizado.",
  },
  {
    name: "Geraldo Magela Duarte",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Competência e Vitória na Justiça Federal",
    rating: 5,
    content:
      "Profissional sério, honesto e competente. Reverteu uma negativa injusta do INSS com maestria perante a Justiça Federal e garantiu todos os retroativos devidos. Nota dez pelo profissionalismo e dedicação!",
    reply: "Fico muito honrado com seu relato, Sr. Geraldo. Conte sempre conosco!",
  },
  {
    name: "Luciana Fernandes Costa",
    reviewerTag: "Local Guide · 5,0 ★",
    badge: "Atendimento Digital Impecável em Todo o Brasil",
    rating: 5,
    content:
      "Atendimento impecável! Resido fora de Pitangui e fizemos tudo por videoconferência e WhatsApp com extrema segurança e agilidade. A dedicação e clareza nas explicações me deram muita tranquilidade.",
  },
  {
    name: "Antônio Marcos Ferreira",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Transparência Total e Honestidade",
    rating: 5,
    content:
      "Dr. Alexandre Abreu Lúcio é sinônimo de credibilidade. Transparência total em relação a honorários e estratégias da causa. Se você busca um advogado de confiança e de resultados, não existe melhor escolha.",
  },
  {
    name: "Camila Alvarenga Santos",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Eficiência e Resolução Rápida",
    rating: 5,
    content:
      "Competência técnica exemplar aliada a uma atenção genuína ao cliente. Me auxiliou na anulação de cobranças indevidas e danos morais de forma rápida e eficiente. Nota 5 estrelas mais que merecida!",
  },
  {
    name: "José Vicente de Paula",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Honra a Advocacia Mineira",
    rating: 5,
    content:
      "Um advogado que honra a beca e a advocacia mineira. Firme na defesa dos direitos e sempre disponível para esclarecer o andamento dos processos. Excelente experiência em Pitangui - MG.",
  },
];

const faqs = [
  {
    q: "Onde fica localizado o escritório do Dr. Alexandre Abreu Lúcio?",
    a: "Nosso escritório está localizado na Praça Dr. Isauro Epifânio, 141 - bairro São Francisco, Pitangui - MG (CEP 35650-000). Dispomos de um espaço discreto, moderno e estruturado para atendimentos presenciais com hora marcada, além de atendimento digital ágil para clientes de Nova Serrana, Pará de Minas, Conceição do Pará, Bom Despacho, Divinópolis, Belo Horizonte e de todo o Brasil.",
  },
  {
    q: "Como funciona o atendimento online para quem reside fora de Pitangui?",
    a: "O atendimento digital é rápido, seguro e muito próximo. Realizamos consultas por videochamada ou WhatsApp, examinamos seus documentos e fotos de forma eletrônica e você assina procurações e contratos diretamente na tela do seu celular, com certificação digital criptografada e plena validade jurídica perante todos os tribunais do país.",
  },
  {
    q: "Qual a importância de contar com um membro do IBDFAM em causas de família e inventários?",
    a: "O IBDFAM (Instituto Brasileiro de Direito de Família) reúne os maiores especialistas do país em soluções contemporâneas, humanizadas e protetivas para relações familiares e sucessórias. Contar com um membro do IBDFAM assegura que o seu caso seja conduzido com as teses jurídicas mais modernas, buscando a pacificação de conflitos, rapidez na partilha e blindagem dos seus direitos patrimoniais.",
  },
  {
    q: "Como funciona a abertura de um Inventário em Cartório (Extrajudicial)?",
    a: "Quando todos os herdeiros são maiores, capazes e há consenso na divisão dos bens (sem testamento com divergência), o inventário pode ser lavrado diretamente por escritura pública em Cartório de Notas. É um procedimento muito mais célere e econômico do que a via judicial tradicional. O Dr. Alexandre conduz todo o levantamento de certidões, cálculo do ITCD e redação da minuta da partilha.",
  },
  {
    q: "Fui vítima de negativação indevida ou golpe bancário. Como proceder?",
    a: "Reúna extratos, comprovantes de contestação e notificações. O Dr. Alexandre ajuíza imediatamente ação com pedido de tutela de urgência (liminar) para exclusão do seu nome dos órgãos de proteção ao crédito (SPC/Serasa) no prazo de 24 a 48 horas, cumulada com pedido de indenização por danos morais e restituição dos prejuízos materiais sofridos.",
  },
  {
    q: "Como posso agendar uma conversa com o Dr. Alexandre Abreu Lúcio?",
    a: "Você pode clicar em qualquer um dos botões desta página para iniciar uma conversa direta pelo WhatsApp no número (37) 99971-0510. Basta nos contar resumidamente a sua necessidade e agendaremos o seu horário com a maior brevidade.",
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
          isDark ? "text-white" : "text-[#0e1217]"
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
      <main className="relative min-h-screen selection:bg-[#c5b293] selection:text-[#090b0e]">
        {/* DOBRA 0: Top Announcement Bar (Deep Obsidian Noir - Alto Contraste) */}
        <div className="border-b border-slate-800 bg-[#090b0e] px-4 py-2.5 text-center text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#dfcfb2]" />
              <strong>Sede em Pitangui - MG</strong>
              <span className="hidden md:inline text-slate-400">
                · Praça Dr. Isauro Epifânio, 141 - São Francisco · Atendimento Presencial & Online em Todo o Brasil
              </span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#fbf9f4] transition-colors"
            >
              <span className="flex text-[#dfcfb2]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#dfcfb2]" />
                ))}
              </span>
              <span>5,0 ★ no Google (39 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Clean Silk White, Obsidian & Champagne Gold) */}
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
              aria-label="Escritório de Advocacia Dr. Alexandre Abreu Lúcio - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-10"
            >
              <div className="relative size-[48px] sm:size-[54px] lg:size-[58px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma AL - Dr. Alexandre Abreu Lúcio"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-[15px] sm:text-[17px] lg:text-[19px] font-bold tracking-[0.14em] text-[#0e1217] leading-tight">
                  ALEXANDRE ABREU LÚCIO
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] font-bold tracking-[0.22em] text-[#8e7a5e] uppercase mt-0.5">
                  ADVOCACIA &bull; OAB/MG 122.827
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
              <a className="nav-link" href="#sobre">
                O Advogado
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (39)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Right Action: Primary WhatsApp Button (Champagne Gold Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Alexandre! Gostaria de agendar uma consulta jurídica com você."
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
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#8e7a5e]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    O Advogado & Escritório
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#8e7a5e]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#8e7a5e]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Diferenciais
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#8e7a5e]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (39)
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#8e7a5e]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#8e7a5e]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Contato & Sede em Pitangui
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

        {/* DOBRA 1: HERO SECTION (Clean Silk White & Brushed Champagne Aura) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(223,207,178,0.18),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(9,11,14,0.05),transparent_65%)]" />

          <div className="mx-auto grid min-h-[620px] max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center gap-10 px-5 sm:px-8 lg:min-h-[700px] lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-16 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:max-w-xl xl:max-w-2xl"
            >
              {/* Secondary Champagne Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c5b293]/40 bg-[#fbf9f4] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e7a5e] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfcfb2] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#c5b293]"></span>
                </span>
                <span>DR. ALEXANDRE ABREU LÚCIO &bull; OAB/MG 122.827</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0e1217] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Defesa combativa dos seus direitos, rigor técnico e{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#dfcfb2]">
                  soluções jurídicas de excelência.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Sob a liderança do advogado <strong className="font-semibold text-slate-900">Dr. Alexandre Abreu Lúcio</strong> — Conselheiro Subseccional da OAB (2025/2027), membro da Comissão de Prerrogativas da OAB/MG e membro do IBDFAM —, nosso escritório alia autoridade jurídica e discrição em <strong className="font-semibold text-slate-900">Direito de Família, Sucessões (Inventários), Cível, Consumidor, Previdenciário e Trabalhista</strong>. Avaliado com nota máxima 5,0 ★ no Google (39 avaliações). Sede em Pitangui - MG e atuação em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alexandre! Gostaria de conversar com você para analisar o meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-lg"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com o Dr. Alexandre
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
                  <CheckCircle2 size={16} className="text-[#8e7a5e] shrink-0" />
                  <span>Membro do IBDFAM (Família)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#8e7a5e] shrink-0" />
                  <span>Conselheiro OAB 2025/2027</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#8e7a5e] shrink-0" />
                  <span>Inventários & Atuação Nacional</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dr. Alexandre Official Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-[460px] xl:max-w-[500px]"
            >
              {/* Luxury ambient warm glow */}
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#c5b293]/35 via-[#dfcfb2]/20 to-[#090b0e]/15 blur-2xl opacity-75" />

              <div className="relative aspect-[3.6/5] sm:aspect-[3.8/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50 shadow-[0_25px_60px_-15px_rgba(9,11,14,0.25)] ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Alexandre Abreu Lúcio — Advogado Titular"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-5 lg:bottom-5 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4 lg:p-4.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8e7a5e]">
                        Advogado Titular · OAB/MG 122.827
                      </p>
                      <p className="font-serif text-sm font-bold text-slate-900 sm:text-base lg:text-lg">
                        Dr. Alexandre Abreu Lúcio
                      </p>
                      <p className="text-[10.5px] sm:text-[11.5px] text-slate-600 line-clamp-1 mt-0.5">
                        Conselheiro OAB &bull; Membro do IBDFAM &bull; Prerrogativas OAB/MG
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-[#c5b293]/35 bg-[#fbf9f4] px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold text-[#8e7a5e] shadow-xs">
                      5,0 ★ Google
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: SOBRE O ADVOGADO & O ESCRITÓRIO (Silk Surface) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-slate-200 bg-[#faf8f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dr. Alexandre Portrait & Authority Card */}
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
                  alt="Dr. Alexandre Abreu Lúcio — Atendimento em Pitangui - MG e todo o Brasil"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-8 right-2 max-w-[340px] rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-4 sm:px-6">
                <div className="flex items-center gap-2 text-[#8e7a5e]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e7a5e]">
                    Autoridade Institucional
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Dr. Alexandre Abreu Lúcio
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#8e7a5e]">
                  OAB/MG 122.827 &bull; Conselheiro OAB 2025/2027
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Praça Dr. Isauro Epifânio, 141 - São Francisco · Pitangui - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c5b293]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c5b293]/30 bg-[#fbf9f4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8e7a5e] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c5b293]" />
                <span>RIGOR TÉCNICO, ÉTICA E COMPROMISSO INABALÁVEL</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0e1217] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia combativa, estratégica e dedicada à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#dfcfb2]">
                  defesa intransigente dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                O <strong className="font-bold text-slate-900">Dr. Alexandre Abreu Lúcio (OAB/MG 122.827)</strong> construiu uma carreira jurídica consolidada e de alto prestígio em Minas Gerais. Eleito Conselheiro Subseccional da OAB para o triênio 2025/2027, membro atuante da seleta Comissão de Defesa das Prerrogativas da OAB/MG e membro do prestigiado Instituto Brasileiro de Direito de Família (IBDFAM), ele alia conhecimento técnico profundo, liderança institucional e atendimento personalizado a cada constituinte.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Seja para pacificar disputas familiares e conduzir inventários com agilidade e proteção do patrimônio, reparar prejuízos contra instituições bancárias e fornecedores, assegurar benefícios do INSS ou defender trabalhadores e empresas na Justiça do Trabalho, cada caso é conduzido com discrição absoluta, energia combativa e transparência em todas as fases.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;Dr. Alexandre é um profissional diferenciado. Extremamente ético, atencioso e com um conhecimento admirável. Conduziu nosso inventário com uma rapidez impressionante e muita tranquilidade para toda a família. Recomendo de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#8e7a5e]">
                  — Carlos Eduardo Resende (Avaliação verificada 5,0 ★ no Google)
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
                    39 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Conselho OAB 25/27</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Comissão de Prerrogativas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Membro IBDFAM</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Direito de Família & Sucessões
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#8e7a5e] shrink-0" />
                  <span>Sede na Praça Dr. Isauro Epifânio, 141 - São Francisco, Pitangui - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#8e7a5e] shrink-0" />
                  <span>Atendimento online seguro e consultoria estratégica em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alexandre! Gostaria de conversar com você sobre a minha causa."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Alexandre Abreu Lúcio
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (Deep Obsidian Noir - Alto Impacto) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-slate-800 bg-[#090b0e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILARES DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossas áreas de especialidade técnica. Clique em qualquer área para ver os detalhes, procedimentos e direcionamento imediato para o seu caso."
              >
                Soluções jurídicas com autoridade em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fbf9f4] to-[#dfcfb2]">
                  Pitangui, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alexandre! Gostaria de tirar uma dúvida sobre uma área de atuação."
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
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0e1217] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5b293] hover:bg-[#131820] hover:shadow-[0_12px_36px_rgba(197,178,147,0.22)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-700 bg-[#1b222c] text-[#dfcfb2] transition-colors group-hover:border-[#c5b293] group-hover:bg-[#c5b293] group-hover:text-[#090b0e]">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfcfb2]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#fbf9f4]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f1e7d6]">
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-[#dfcfb2] cursor-pointer"
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
              description="A união de liderança institucional na OAB, técnica apurada, atendimento humanizado e combatividade intransigente."
            >
              O que diferencia a advocacia do{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#dfcfb2]">
                Dr. Alexandre Abreu Lúcio?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#faf8f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5b293] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5b293]/30 bg-[#fbf9f4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8e7a5e]">
                      <Compass size={14} /> Rigor Técnico & Autoridade
                    </span>
                    <span className="text-xs font-semibold text-[#8e7a5e]">
                      5,0 ★ Google (39)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Liderança Institucional e Defesa Incansável
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como Conselheiro Subseccional da OAB (2025/2027) e membro da Comissão de Defesa das Prerrogativas da OAB/MG, o Dr. Alexandre traz para cada processo uma postura firme, independente e respeitada perante todos os juizados, varas e tribunais do país.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e7a5e]" />
                      <span>Comunicação direta, transparente e sem rodeios com o titular</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e7a5e]" />
                      <span>Acompanhamento constante com atualizações claras no WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e7a5e]" />
                      <span>Honorários justos, contratuais e alinhados à tabela ética da OAB</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Alexandre! Gostaria de conversar com você sobre a minha situação jurídica."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#c5b293] hover:bg-[#c5b293] hover:text-[#090b0e]"
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
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#faf8f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5b293] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5b293]/30 bg-[#fbf9f4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8e7a5e]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & IBDFAM
                    </span>
                    <span className="text-xs font-semibold text-[#8e7a5e]">
                      Discrição & Sensibilidade
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Dedicação Pessoal a Cada Caso e Família
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    O seu processo não é um número. Nas questões mais sensíveis da vida — como a realização de um inventário após o luto, um divórcio ou a busca por uma aposentadoria —, você encontra acolhimento empático aliado à solidez do Direito de Família contemporâneo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e7a5e]" />
                      <span>Membro do IBDFAM (Instituto Brasileiro de Direito de Família)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e7a5e]" />
                      <span>Sede estruturada na Praça Dr. Isauro Epifânio em Pitangui</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#8e7a5e]" />
                      <span>Atuação forte perante varas cíveis, trabalhistas, federais e cartórios</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Alexandre! Gostaria de agendar um atendimento para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#c5b293] hover:bg-[#c5b293] hover:text-[#090b0e]"
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

        {/* DOBRA 5: MÉTODO EM 3 ETAPAS (Deep Obsidian Noir) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#090b0e] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, estratégico e focado na proteção dos seus direitos e do seu patrimônio."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fbf9f4] to-[#dfcfb2]">
                  conduzir sua causa com segurança e tranquilidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-slate-800 bg-[#0e1217] p-6 font-serif text-base italic leading-7 text-slate-200 shadow-md">
                &ldquo;Nosso compromisso é desmistificar o direito e entregar uma advocacia de resultado, pautada na verdade, na ética e na defesa incansável de quem confia em nosso trabalho.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfcfb2]">
                  — Dr. Alexandre Abreu Lúcio &bull; OAB/MG 122.827
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
                  "Atendimento Inicial & Diagnóstico Estratégico",
                  "Contato direto pelo WhatsApp ou presencialmente em nossa sede na Praça Dr. Isauro Epifânio em Pitangui. Avaliamos detalhadamente seus documentos e fatos com sigilo profissional absoluto.",
                ],
                [
                  "02",
                  "Estratégia Jurídica & Ação Resolutiva",
                  "Planejamos a melhor rota jurídica (seja inventário em cartório, divórcio, requerimento no INSS, ação civil ou trabalhista), atuando com rapidez e precisão técnica perante as instâncias competentes.",
                ],
                [
                  "03",
                  "Acompanhamento Transparente & Informação Direta",
                  "Você não fica no escuro. O Dr. Alexandre mantém você informado sobre cada andamento e decisão diretamente no seu celular, com explicações objetivas e fáceis de compreender.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfcfb2]">
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
                description="Veja depoimentos reais e espontâneos de clientes atendidos pelo Dr. Alexandre Abreu Lúcio em Pitangui, Minas Gerais e em todo o Brasil."
              >
                Avaliado com nota máxima 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#dfcfb2]">
                  39 avaliações no Google.
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
                    <div className="flex text-[#dfcfb2]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#dfcfb2]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Dr. Alexandre Abreu Lúcio — Advocacia
                  </p>
                  <p className="text-[11px] text-slate-500">
                    39 avaliações 5 estrelas no Google Meu Negócio
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
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#c5b293] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#dfcfb2]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#dfcfb2]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c5b293]/30 bg-[#fbf9f4] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8e7a5e]">
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
                      <div className="mt-3 rounded-lg border-l-2 border-[#c5b293] bg-[#fbf9f4] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#8e7a5e]">Resposta do Dr. Alexandre:</p>
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#c5b293] hover:text-[#8e7a5e]"
              >
                <GoogleIcon size={16} /> Ver avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7: PERGUNTAS FREQUENTES / FAQ (Deep Obsidian Noir) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-slate-800 bg-[#090b0e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fbf9f4] to-[#dfcfb2]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Transparência total desde o primeiro contato. Se você tiver outra dúvida sobre seu caso, fale agora mesmo com o Dr. Alexandre no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#0e1217] transition-colors hover:border-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#dfcfb2] transition-transform duration-200 ${
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
                    "Olá, Dr. Alexandre! Gostaria de tirar uma dúvida jurídica com você."
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
                eyebrow="CONTATO & SEDE EM PITANGUI - MG"
                description="Converse diretamente com o Dr. Alexandre Abreu Lúcio pelo WhatsApp para acolhimento imediato, sigilo e rigor técnico."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#dfcfb2]">
                  orientar você e defender seus interesses com responsabilidade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alexandre! Gostaria de agendar um atendimento com você."
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
                    className="mt-0.5 shrink-0 text-[#8e7a5e]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#8e7a5e] font-bold">
                      Aberto &bull; Segunda a Sexta: 08:30 às 18:30
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento presencial em nossa sede e suporte online contínuo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#8e7a5e]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#8e7a5e]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#8e7a5e]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#8e7a5e] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial &bull; 3.803 seguidores)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#8e7a5e]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#8e7a5e] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8e7a5e]"
                  />
                  <div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 font-medium hover:text-[#8e7a5e] transition-colors"
                    >
                      {ADDRESS_TEXT}
                    </a>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Pitangui - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[#faf8f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#090b0e]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma AL - Dr. Alexandre Abreu Lúcio"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[14px] font-bold uppercase tracking-[0.14em] text-[#0e1217]">
                    DR. ALEXANDRE ABREU LÚCIO
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#8e7a5e] uppercase mt-0.5">
                    ADVOCACIA &bull; OAB/MG 122.827
                  </p>
                </div>
              </div>

              {/* Photo Presentation - Dr. Alexandre */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Alexandre Abreu Lúcio em seu escritório em Pitangui"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Defesa intransigente dos seus direitos</p>
                  <p className="text-[10px] text-slate-200">Pitangui · Centro-Oeste Mineiro & Atendimento Nacional</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-slate-700">
                <strong className="font-semibold text-slate-900">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} &bull; {LAWYER_OAB}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8e7a5e]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-medium text-slate-900 font-semibold">
                    08:30 às 18:30
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-slate-600">
                    Sede em Pitangui - São Francisco
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#8e7a5e] font-bold">Todo o Brasil</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alexandre! Gostaria de agendar um atendimento com você."
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

        {/* DOBRA 9: PRÉ-FOOTER BANNER (Deep Obsidian Noir) */}
        <section className="border-t border-slate-800 bg-[#0e1217] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#dfcfb2]" /> ESCRITÓRIO DE ADVOCACIA - DR. ALEXANDRE ABREU LÚCIO
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronto para analisar o seu caso e defender seus direitos com técnica impecável e clareza.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dr. Alexandre! Preciso de orientação jurídica para o meu caso."
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

        {/* DOBRA 10: RODAPÉ INSTITUCIONAL (Deep Obsidian Noir) */}
        <footer className="border-t border-slate-800 bg-[#090b0e] px-5 py-14 text-slate-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Escritório de Advocacia - Dr. Alexandre Abreu Lúcio"
                className="flex items-center gap-3.5"
              >
                <div className="relative size-14 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma AL - Dr. Alexandre Abreu Lúcio"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-lg font-bold tracking-[0.14em] text-white">
                    DR. ALEXANDRE ABREU LÚCIO
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#dfcfb2] uppercase mt-0.5">
                    ADVOCACIA &bull; OAB/MG 122.827
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Advocacia de alto padrão com atuação estratégica em Direito de Família (IBDFAM), Sucessões e Inventários, Cível e Contratos, Defesa do Consumidor, Previdenciário (INSS) e Trabalhista. Sede em Pitangui - MG e atendimento digital em todo o território nacional.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0e1217] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfcfb2] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#dfcfb2]" /> Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0e1217] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfcfb2] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (39 avaliações)
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
                    O Advogado
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
                    Avaliações no Google (39)
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
                    href={getWhatsAppUrl("Olá, Dr. Alexandre! Gostaria de falar com você.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#dfcfb2] hover:underline"
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
                  Segunda a Sexta: 08:30 às 18:30
                </li>
                <li>
                  <strong className="text-white">E-mail:</strong>
                  <br />
                  <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white">
                    {EMAIL_CONTACT}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Qualificações:</strong>
                  <br />
                  OAB/MG 122.827 &bull; Conselheiro OAB 25/27 &bull; Membro IBDFAM
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800/80 pt-6 text-center text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Escritório de Advocacia - Dr. Alexandre Abreu Lúcio &bull; OAB/MG 122.827. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              Praça Dr. Isauro Epifânio, 141 - bairro São Francisco, Pitangui - MG, 35650-000 · Advocacia em estrita conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dr. Alexandre! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Alexandre Abreu Lúcio"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">Falar no WhatsApp</span> &bull; Dr. Alexandre
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-slate-700 bg-[#0e1217] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-white transition-colors hover:border-[#dfcfb2] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-[#090b0e] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma AL - Dr. Alexandre Abreu Lúcio"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">DR. ALEXANDRE ABREU LÚCIO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfcfb2] uppercase">
                      ADVOCACIA &bull; OAB/MG 122.827
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfcfb2]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfcfb2]" />
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
