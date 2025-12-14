export type Product = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "consignado",
    icon: "$",
    title: "Empréstimo Consignado",
    description:
      "Crédito seguro com desconto em folha para servidores públicos, com taxas competitivas e processo ágil.",
  },
  {
    id: "cartao-consignado",
    icon: "💳",
    title: "Cartão de Crédito Consignado",
    description:
      "Limite extra para o dia a dia, com desconto em folha e benefícios exclusivos para servidores públicos.",
  },
  {
    id: "seguros",
    icon: "🛡️",
    title: "Seguros em Grupo",
    description:
      "Proteção sob medida para empresas e colaboradores, com coberturas alinhadas às necessidades do setor público e privado.",
  },
];
