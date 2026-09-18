// Dados centralizados da Resolução CONTRAN nº 996/2023

export const REGRAS_VIAS = [
  {
    id: 'calcada',
    titulo: 'Áreas de Pedestres e Calçadas',
    limite: 'Até 6 km/h',
    badgeColor: '#16a34a',
    icone: 'walk-outline',
    detalhes:
      'A circulação de autopropelidos em calçadas e passeios públicos só é permitida onde expressamente autorizada pelo órgão de trânsito local. A prioridade de trânsito é sempre e integralmente do pedestre.',
    dicas: [
      'Velocidade limite máxima de 6 km/h (passo rápido humano).',
      'Mantenha distância segura de pedestres e crianças.',
      'Dê sempre a preferência aos pedestres.',
      'Use a campainha com moderação apenas para alertar.',
    ],
    baseLegal: 'Art. 11, inciso I da Resolução CONTRAN 996/2023',
  },
  {
    id: 'ciclovia',
    titulo: 'Ciclovias, Ciclofaixas e Ciclorrotas',
    limite: 'Até 20 km/h',
    badgeColor: '#2563eb',
    icone: 'bicycle-outline',
    detalhes:
      'Espaço preferencial e mais seguro para a circulação de autopropelidos e bicicletas elétricas. A velocidade máxima permitida de fabricação ou circulação é de 20 km/h.',
    dicas: [
      'Velocidade máxima de até 20 km/h.',
      'Respeite o sentido de circulação indicado na via.',
      'Mantenha distância das bicicletas convencionais.',
      'Sinalize manobras com as mãos antes de virar ou parar.',
    ],
    baseLegal: 'Art. 11, inciso II da Resolução CONTRAN 996/2023',
  },
  {
    id: 'ruas',
    titulo: 'Ruas e Vias Urbanas (Até 40 km/h)',
    limite: 'Até 20 km/h',
    badgeColor: '#d97706',
    icone: 'car-outline',
    detalhes:
      'Permitida a circulação somente em ruas com velocidade máxima regulamentada para automóveis de até 40 km/h. O autopropelido deve transitar pelo bordo da pista, no mesmo sentido dos veículos.',
    dicas: [
      'Velocidade máxima do autopropelido: até 20 km/h.',
      'Transite sempre pelo bordo direito da pista.',
      'No mesmo sentido do fluxo dos automóveis (nunca na contramão).',
      'PROIBIDO circular em vias de trânsito rápido e rodovias.',
    ],
    baseLegal: 'Art. 11, inciso III da Resolução CONTRAN 996/2023',
  },
];

export const EQUIPAMENTOS_OBRIGATORIOS = [
  {
    id: 'velocimetro',
    nome: 'Velocímetro',
    desc: 'Indicador de velocidade em tempo real (pode ser analógico, digital ou aplicativo com GPS no guidão).',
    icone: 'speedometer-outline',
    exigencia: 'Obrigatório para controlar os limites de 6 km/h e 20 km/h.',
  },
  {
    id: 'campainha',
    nome: 'Campainha ou Buzina',
    desc: 'Dispositivo sonoro para emitir alertas aos pedestres e outros ciclistas.',
    icone: 'notifications-outline',
    exigencia: 'Obrigatório para alertar manobras em calçadas e ciclovias.',
  },
  {
    id: 'luz_dianteira',
    nome: 'Sinalização Dianteira',
    desc: 'Luz ou farol de cor branca ou amarela emitindo feixe luminoso para condução noturna.',
    icone: 'sunny-outline',
    exigencia: 'Obrigatório para visibilidade noturna.',
  },
  {
    id: 'luz_traseira',
    nome: 'Sinalização Traseira',
    desc: 'Luz ou refletor óptico traseiro de cor vermelha visível à distância.',
    icone: 'flashlight-outline',
    exigencia: 'Obrigatório para ser visto por condutores atrás.',
  },
  {
    id: 'refletores_laterais',
    nome: 'Sinalizadores Laterais e nos Apoios',
    desc: 'Refletores em ambas as laterais e nos apoios de pé/pedais para visibilidade transversal.',
    icone: 'shield-outline',
    exigencia: 'Obrigatório em cruzamentos e conversões.',
  },
  {
    id: 'retrovisor_esquerdo',
    nome: 'Espelho Retrovisor',
    desc: 'Espelho retrovisor instalado obrigatoriamente do lado esquerdo do condutor.',
    icone: 'eye-outline',
    exigencia: 'Obrigatório para ultrapassagens e manobras seguras.',
  },
];

export const COMPARATIVO_CATEGORIAS = [
  {
    id: 'autopropelido',
    categoria: 'Autopropelido',
    subtitulo: 'Patinetes, monociclos elétricos, hoverboards',
    cor: '#2563eb',
    potencia: 'Até 1.000 W (até 4.000 W se for autoequilíbrio/monociclo)',
    velocidade: 'Até 32 km/h de fábrica',
    dimensoes: 'Largura até 70 cm, entre-eixos até 130 cm',
    acelerador: 'Permitido acelerador manual no punho/pedal',
    cnh: 'NÃO exige CNH nem ACC',
    emplacamento: 'NÃO precisa emplacar nem registrar no Detran',
    capacete: 'Recomendado capacete de ciclista',
    ondeRodar: 'Calçadas (até 6 km/h), Ciclovias (até 20 km/h) e Ruas ≤ 40 km/h',
  },
  {
    id: 'bicicleta_eletrica',
    categoria: 'Bicicleta Elétrica',
    subtitulo: 'Pedelec com pedal assistido',
    cor: '#16a34a',
    potencia: 'Até 1.000 W',
    velocidade: 'Motor corta assistência aos 32 km/h',
    dimensoes: 'Dimensões padrão de bicicleta',
    acelerador: 'Motor só auxilia ao pedalar (sem acelerador livre contínuo)',
    cnh: 'NÃO exige CNH nem ACC',
    emplacamento: 'NÃO precisa de emplacamento',
    capacete: 'Recomendado capacete ciclístico',
    ondeRodar: 'Ciclovias, ciclofaixas e vias urbanas compartilhadas',
  },
  {
    id: 'ciclomotor',
    categoria: 'Ciclomotor',
    subtitulo: 'Scooters elétricas potentes, motonetas até 50cc/4kW',
    cor: '#dc2626',
    potencia: 'Até 4.000 W (4 kW) ou 50 cm³ a combustão',
    velocidade: 'Até 50 km/h de velocidade máxima de fábrica',
    dimensoes: 'Estrutura veicular',
    acelerador: 'Acelerador no punho independente',
    cnh: 'SIM! Exige CNH categoria A ou ACC (Autorização Ciclomotor)',
    emplacamento: 'SIM! Registro, emplacamento e licenciamento no Detran',
    capacete: 'SIM! Capacete motociclístico fechado com viseira',
    ondeRodar: 'Pista de rolamento com veículos. PROIBIDO em calçadas e ciclovias',
  },
];

export const FAQ_ITENS = [
  {
    id: 'passageiro',
    pergunta: 'Posso levar carona/passageiro no patinete elétrico?',
    resposta:
      'Não. Os autopropelidos são concebidos exclusivamente para mobilidade individual. O transporte de passageiros é proibido pela Resolução CONTRAN nº 996/2023, visando a estabilidade e a segurança.',
  },
  {
    id: 'capacete',
    pergunta: 'O capacete é obrigatório para autopropelido?',
    resposta:
      'Para autopropelidos e bicicletas elétricas, o uso de capacete ciclístico é fortemente recomendado pelas autoridades de trânsito. Já para ciclomotores (scooters que exigem placa), o capacete motociclístico com viseira ou óculos de proteção é obrigatório por lei.',
  },
  {
    id: 'idade',
    pergunta: 'Qual a idade mínima para conduzir?',
    resposta:
      'Para ciclomotores, a idade mínima é de 18 anos completos (pois exige habilitação ACC ou CNH A). Para autopropelidos, a regra federal delega aos municípios e às normas dos fabricantes, sendo comum a recomendação mínima de 16 ou 18 anos.',
  },
  {
    id: 'rodovias',
    pergunta: 'Posso andar em rodovias ou pistas expressas?',
    resposta:
      'Não! É expressamente proibida a circulação de autopropelidos em rodovias e vias de trânsito rápido. O limite máximo permitido para vias urbanas é onde os carros rodam a até 40 km/h, sempre pelo bordo direito.',
  },
  {
    id: 'placa',
    pergunta: 'Como saber com certeza se meu veículo precisa de placa?',
    resposta:
      'Se tiver acelerador manual, motor acima de 1.000W ou atingir mais de 32 km/h de fábrica, ele é legalmente um CICLOMOTOR ou MOTOCICLETA, exigindo registro no Detran, emplacamento e CNH/ACC. Você pode simular agora no nosso Simulador no menu inicial!',
  },
];
