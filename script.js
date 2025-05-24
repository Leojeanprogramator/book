const livros = [
  {
    id: 1,
    titulo: "As 48 Leis Do Poder",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://i.postimg.cc/MTn8pqvm/Livro-As-48-Leis-do-Poder-por-Robert-Greene.jpg",
    link: "https://pay.kirvano.com/809f6bc1-92b4-4314-b7a7-c2ac2289ae97",
    descricao: "Em As 48 leis do poder, o leitor aprende a manipular pessoas e situações para alcançar seus objetivos. E descobre por que alguns conseguem ser tão bem-sucedidos, enquanto outros estão sempre sendo passados para trás. Querer ser melhor do que o chefe, por exemplo, é um erro fatal."
  },
  {
    id: 2,
    titulo: "Verity Coleen Hoover",
    categoria: "romance",
    preco: 4.99,
    img: "https://i.postimg.cc/FKkbcb9S/Chat-GPT-Image-2-05-2025-18-39-44.png",
    link: "https://pay.kirvano.com/a4c0538a-4ec5-46b3-b904-ad4eb0f7b086",
    descricao: "O livro 'Verity', de Colleen Hoover, é um thriller psicológico que acompanha Lowen Ashleigh, uma escritora contratada para terminar a série de livros de sucesso de Verity Crawford, uma autora que se encontra em estado catatônico após um grave acidente."
  },
  {
    id: 3,
    titulo: "A Sutil Arte de Ligar o F*da-Se",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/51KP4VQOF1L._SY445_SX342_.jpg",
    link: "https://pay.kirvano.com/c5f1f73e-be56-41f0-b9e1-6805314bf41f",
    descricao: "Com uma linguagem bem-humorada e ácida, A sutil arte de ligar o f*da-se propõe um novo olhar para a vida, mais coerente com a realidade uma oposição à pressão social para sempre demonstrar otimismo."
  },
{id: 4, titulo:"Corte de Espinhos e Rosas", categoria:"romance", preco:4.99, img:"https://cdn.record.com.br/wp-content/uploads/2020/08/25155421/6123-600x889.jpeg", link:"https://pay.kirvano.com/8d0010b7-5455-4a05-8488-d1e49f5b5c38", descricao:"Num mundo dividido uma muralha mágica separa duas espécies. De um lado, os feéricos vivem dentro de suas fronteiras cheias de beleza e mistério; do outro, os humanos possuem apenas medo, desconfiança e dificuldades. Feyre, filha de um casal de mercadores humanos e falidos, se torna caçadora para sustentar a família."},
  {
  id: 5,
  titulo: "Garota exemplar",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/510k5EkYuWL._SY425_.jpg",
  link: "https://pay.kirvano.com/c711620e-5890-47a8-8af9-f49050881bd2",
  descricao: "Garota exemplar é tipicamente descrita como uma pessoa com bom comportamento, responsabilidade e sucesso acadêmico. Ela é conhecida por ser uma aluna dedicada, obediente, e que se destaca positivamente em suas atividades. Além disso, uma garota exemplar geralmente demonstra respeito, empatia e boas atitudes em suas interações sociais."
},
  {id: 6, titulo:"Os Segredos da Mente Milionaria - T. Harv Eker", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/41W22mT8L-L._SY445_SX342_.jpg", link:"https://pay.kirvano.com/ef104585-cbab-419c-b8b7-80edff0348e8", descricao:"Eker mostra como substituir uma mentalidade destrutiva – que você talvez nem perceba que tem – pelos, 17 modos de pensar e agir que distinguem os ricos das demais pessoas."},
  {id: 7, titulo:"Hábitos Atómicos", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/51DOkmV31rL._SY445_SX342_.jpg", link:"https://pay.kirvano.com/42fff375-a38a-4bfb-bdeb-e6618b4863a5", descricao:"Hábitos Atômicos é um livro do James Clear que explora a importância de pequenas mudanças diárias para alcançar grandes resultados. A ideia central é que, ao focar em melhorias de 1% por dia, acumuladas ao longo do tempo. podemos criar um efeito composto que leva a mudanças significativas em nossa vida."},
  {id: 8, titulo:"Pai Rico Pai Pobre", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/51UjO3YMafL._SY445_SX342_.jpg", link:"https://pay.kirvano.com/9d16ffce-ec50-4b13-b392-43802612471d", descricao:"Pai Rico, Pai Pobre é o primeiro best-seller de Robert Kiyosaki e Sharon Lechter. Ele advoga a busca pela independência financeira através de investimento, imóveis, ter seu próprio negócio e o uso de táticas financeiras de proteção do patrimônio."},
  {id: 9, titulo:"O Milagre Da Manhã Hal-Elrod", categoria:"desenvolvimento", preco:4.99, img:"https://static.estantevirtual.com.br/book/00/01F-2069-000/01F-2069-000_detail1.jpg?ts=1712761633425&ims=fit-in/600x800/filters:fill(fff):quality(100)", link:"https://pay.kirvano.com/bdae02b6-9100-43e6-8f82-3c2d82d05afa", descricao:"Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades. O milagre da manhã permite que o leitor alcance níveis de sucesso jamais imaginados, tanto na vida pessoal quanto profissional."},
  {id: 10, titulo:"Até o Verão Terminar - Collen Hoover", categoria:"romance", preco:4.99, img:"https://i.postimg.cc/FKrhF0HL/Whats-App-Image-2025-05-07-at-17-34-18.jpg", link:"https://pay.kirvano.com/b9cda7d8-e82f-406d-bf70-90172672a4b3", descricao:"Uma vida de dor e abandono fizeram de Beyah uma pessoa cética, desconfiada e boa em guardar segredos. Mas, até o verão terminar, ela terá que rever tudo o que acredita. Da mesma autora dos sucessos É assim que acaba, Layla e Verity ."},
  {id: 11, titulo:"12 Regras Para a Vida: Um Antídoto Para o Caos", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/71geoUmEoQL._SY425_.jpg", link:"https://pay.kirvano.com/0adda8dd-c071-49a2-98e6-469b6c0d4295", descricao:"Aclamado psicólogo clínico, Jordan Peterson tem influenciado a compreensão moderna sobre a personalidade e, agora, se transformou em um dos pensadores públicos mais populares do mundo, com suas palestras sobre tópicos que variam da bíblia, às relações amorosas e à mitologia, atraindo dezenas de milhões de espectadores. Em uma era de mudanças sem precedentes e polarização da política, sua mensagem franca e revigorante sobre o valor da responsabilidade individual e da sabedoria ancestral tem ecoado em todos os cantos do mundo. Neste livro, ele oferece doze princípios profundos e práticos sobre como viver uma vida com significado."},
  {id: 12, titulo:"Manual de persuasão do FBI", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/715Y9D5zNWL._SY425_.jpg", link:"https://pay.kirvano.com/96029433-d570-406c-99f4-d2ab44f7d6e7", descricao:"Como um agente especial para o Programa de Análise Comportamental da Divisão de Segurança Nacional do FBI, Dr. Jack Schafer desenvolveu estratégias dinâmicas e inovadoras para entrevistar terroristas e detectar mentiras.  Agora, Dr. Schafer evoluiu suas táticas e nos ensina como aplicá-las no cotidiano para obter sucesso nas relações interpessoais."},
  {id: 13, titulo:"Amor & gelato", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81EE1CAUoEL._SY425_.jpg", link:"https://pay.kirvano.com/54e97c33-a294-4d5b-ac64-b4472ff68eb2", descricao:"Depois da morte da mãe, Lina fica com a missão de realizar um último pedido: ir até a Itália para conhecer o pai. Do dia para a noite, ela se vê na famosa paisagem da Toscana, morando em uma casa localizada no mesmo terreno de um cemitério memorial de soldados americanos da Segunda Guerra Mundial, com um homem que nunca tinha ouvido falar."},
  {id: 14, titulo:"Todas as suas (im)perfeições", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81Vhnel+xxL._SY425_.jpg", link:"https://pay.kirvano.com/4448e112-4b64-4585-8d82-9f21c31b9408", descricao:"Todas as suas imperfeições narra a história de Quinn e Graham. Eles se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de conforto."},
  {id: 15, titulo:"É assim que começa", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81Izv2GRWoL._SY425_.jpg", link:"https://pay.kirvano.com/0f423d55-af25-407b-abe9-92399bccaadf", descricao:"Preparem os corações. Lily e Atlas estão de volta na aguardada sequência de É assim que acaba. É assim que começa chega para consagrar novamente Colleen Hoover como a autora mais vendida do Brasil. Colleen é um fenômeno editorial, acumulando não só milhões de visualizações no TikTok, mas também milhões de exemplares vendidos."},
  {id: 16, titulo:"Livro 16", categoria:"romance", preco:30.50, img:"https://m.media-amazon.com/images/I/81EE1CAUoEL._SY425_.jpg", link:"#", descricao:"Descrição detalhada do Livro 16."},
  {id: 17, titulo:"Sem esperança (Vol. 2 Hopeless) ", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91DszGVK+2L._SY425_.jpg", link:"https://pay.kirvano.com/f8f7868b-88ff-443a-80a1-0ffb47f05a2d", descricao:"Após se apaixonar por Sky e Holder em Um caso perdido, agora é a hora de conhecer o outro lado da história. Sem esperança oferece a perspectiva única dos impactantes acontecimentos através do olhar de Holder. Da autora dos best-sellersÉ assim que acaba e Verity, Colleen Hoover chega com mais um romance arrebatador e emocionante, nesta nova edição com capa inédita da artista Carmell Louize."},
  {id: 18, titulo:"Livro 18", categoria:"ficcao", preco:38.90, img:"https://m.media-amazon.com/images/I/81Izv2GRWoL._AC_UY218_.jpg", link:"https://pay.kirvano.com/0f423d55-af25-407b-abe9-92399bccaadf", descricao:"Preparem os corações. Lily e Atlas estão de volta na aguardada sequência de É assim que acaba. É assim que começa chega para consagrar novamente Colleen Hoover como a autora mais vendida do Brasil."},
  {id: 19, titulo:"O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/815iPX0SgkL._SY425_.jpg", link:"https://pay.kirvano.com/e2d6de7f-c5e5-424d-b69e-4ebbac312473", descricao:"Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. "},
  {id: 20, titulo:"Os sete maridos de Evelyn Hugo", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91yEPgRcELL._SY425_.jpg", link:"https://pay.kirvano.com/38059f54-3c73-48fa-97ad-82a54ce12e37", descricao:"Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez."},
  {id: 21, titulo:"A paciente silenciosa", categoria:"suspense", preco:4.99, img:"https://m.media-amazon.com/images/I/91R8S52UP6L._SY425_.jpg", link:"https://pay.kirvano.com/70181965-1a87-4bad-a2e5-621fa2686cc9", descricao:"Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa, deixando suspeitas e mistérios não resolvidos sobre o caso. E o terapeuta Theo Faber  está obcecado em descobrir o motivo da violencia e do silencio. Só ela sabe o que aconteceu. Só ele pode fazê-la falar.  A paciente silenciosa é um daqueles livros que não saem da cabeça do leitor, quer ele queira, quer não."},
  {id: 22, titulo:"Boa garota nunca mais: Manual de assassinato para boas garotas (vol. 3)", categoria:"suspense", preco:4.99, img:"https://m.media-amazon.com/images/I/81atsbPweKL._SY425_.jpg", link:"https://pay.kirvano.com/6b1923e0-43da-4a17-a470-9e028bc4a8f3", descricao:"Após uma série de eventos estranhos, Pip percebe que está sendo perseguida de verdade. E pior: seu stalker pode estar conectado a um assassino que aterrorizou a região na mesma época do caso de Andie Bell. Com a ajuda de Ravi, a garota precisa descobrir quem está por trás disso… antes que se torne a próxima vítima."},
  {id: 23, titulo:"Boa garota, segredo mortal(Vol.2)", categoria:"suspense", preco:4.99, img:"https://m.media-amazon.com/images/I/81JPQxDDNeL._SY425_.jpg", link:"https://pay.kirvano.com/0251a98b-a49d-4ad6-a9e6-365fee1d43cd", descricao:"Um ano após a investigação obsessiva que reescreveu a história de sua pacata cidade, Pip acredita que seus dias de detetive amadora chegaram ao fim. Prometendo nunca mais se envolver no emaranhado de segredos de Little Kilton, a garota planeja lançar um podcast sobre a resolução do caso e voltar a ter uma vida normal."},
  {id: 24, titulo:"Uma segunda chance", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/813WvRoZ0HL._SY466_.jpg", link:"https://pay.kirvano.com/ff78631c-f5fc-4623-87b8-7a3bac77ca4d", descricao:"Será que todos merecem uma segunda chance? É o que mais deseja Kenna Rowan, na luta para recuperar os pedaços estilhaçados de sua antiga vida após um trágico acidente ter colocado tudo a perder. Uma segunda chance é o tão esperado novo romance de Colleen Hoover, CoHo para os íntimos, autora fenômeno de vendas, que já ultrapassou a marca de 1 milhão de exemplares vendidos no Brasil. "},
  {id: 25, titulo:"O lado feio do amor", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81FEytag46L._SY466_.jpg", link:"https://pay.kirvano.com/3d937b36-9103-4080-8a3c-d63834d575f0", descricao:"Quando começou a se envolver com Miles, Tate prometeu não se apaixonar. Mas vai descobrir que nenhuma regra é capaz de controlar o amor e o desejo...Da autora-fenômeno Colleen Hoover, que acumula best- sellers , visualizações no TikTok e milhares de leitores apaixonados no mundo todo."},
  {id: 26, titulo:"É Assim que Acaba: 1", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91r5G8RxqfL._SY466_.jpg", link:"https://pay.kirvano.com/580ee354-9830-4dbb-b654-6f7c7df964b7", descricao:"Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta. "},
  {id: 27, titulo:"A Biblioteca da Meia-Noite", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81iqH8dpjuL._SY425_.jpg", link:"https://pay.kirvano.com/a40adda7-38b1-41b6-97ba-1c35e34b3f6e", descricao:"A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo."},
  {id: 28, titulo:"Vermelho, branco e sangue azul", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/41QaXCahKrL._SY445_SX342_.jpg", link:"https://pay.kirvano.com/3a2d741a-3fdc-4095-81ed-d708577e1b80", descricao:"Quando sua mãe foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da mídia norte-americana. Bonito, carismático e com personalidade forte, Alex tem tudo para seguir os passos de seus pais e conquistar uma carreira na política, como tanto deseja. Mas quando sua família é convidada para o casamento real do príncipe britânico Philip, Alex tem que encarar o seu primeiro desafio diplomático: lidar com Henry, irmão mais novo de Philip, o príncipe mais adorado do mundo, com quem ele é constantemente comparado ― e que ele não suporta."},
  {id: 29, titulo:"Coraline: Neil Gaiman & Chris Riddell", categoria:"ficcao", preco:4.99, img:"https://m.media-amazon.com/images/I/818565mPygL._SY466_.jpg", link:"https://pay.kirvano.com/d43c5ee2-878f-49f7-97e4-994a88ca9478", descricao:"Não é a névoa, nem o gato que parece estar sempre a observá-la, nem os sinais de perigo que a Srta. Spink e a Srta. Forcible, suas novas vizinhas, leem nas folhas de chá. É a outra casa – aquela atrás da velha porta da sala de estar. Outra mãe e um pai com olhos de botão preto e pele fina como papel esperam que Coraline se junte a eles. E querem que ela fique com eles. Para sempre. Ela sabe que, se se aventurar por aquela porta, pode nunca mais voltar."},
  {id: 30, titulo:"O verão que mudou minha vida: (Trilogia Verão vol. 1)", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91UjIwmok9L._SY425_.jpg", link:"https://pay.kirvano.com/ad17e3d9-2de6-4246-8eb6-54d86bc90f97", descricao:"Com uma história encantadora e personagens inesquecíveis, a Trilogia Verão acompanha os amores, as desilusões e os dilemas da protagonista Belly dos 15 aos 24 anos. Em meio a descobertas e mudanças, ela se apaixona, se envolve em um triângulo amoroso, entra na universidade e descobre que amadurecer também significa tomar decisões difíceis. A trama escrita por Jenny Han, autora de Para todos os garotos que já amei, inspirou a série de sucesso O verão que mudou minha vida, do Amazon Prime Video."},
  {id: 31, titulo:"Sem você não é verão: (Trilogia Verão vol. 2) ", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81RAaO1bJ1L._SY425_.jpg", link:"https://pay.kirvano.com/7d30c01a-eba7-446e-9f02-35443ff83733", descricao:"Com uma história encantadora e personagens inesquecíveis, a Trilogia Verão acompanha os amores, as desilusões e os dilemas da protagonista Belly dos 15 aos 24 anos. Em meio a descobertas e mudanças, ela se apaixona, se envolve em um triângulo amoroso, entra na universidade e descobre que amadurecer também significa tomar decisões difíceis. A trama escrita por Jenny Han, autora de Para todos os garotos que já amei, inspirou a série de sucesso O verão que mudou minha vida, do Amazon Prime Video."},
  {id: 32, titulo:"Sempre teremos o verão: (Trilogia Verão vol. 3)", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91-szq3u4AL._SY425_.jpg", link:"https://pay.kirvano.com/0b10ea4e-ec99-4b61-b2ce-ecc0f4853f95", descricao:"Com uma história encantadora e personagens inesquecíveis, a Trilogia Verão acompanha os amores, as desilusões e os dilemas da protagonista Belly dos 15 aos 24 anos. Em meio a descobertas e mudanças, ela se apaixona, se envolve em um triângulo amoroso, entra na universidade e descobre que amadurecer também significa tomar decisões difíceis. A trama escrita por Jenny Han, autora de Para todos os garotos que já amei, inspirou a série de sucesso O verão que mudou minha vida, do Amazon Prime Video."},
  {id: 33, titulo:"O príncipe cruel (Vol. 1 O Povo do Ar)", categoria:"ficcao", preco:4.99, img:"https://m.media-amazon.com/images/I/81FH6q0EqYS._SY425_.jpg", link:"https://pay.kirvano.com/fba4892c-82b9-45e1-b8c7-a1b808dd2492", descricao:"Jude tinha apenas sete anos quando seus pais foram brutalmente assasinados e ela e as irmãs levadas para viver no traiçoeiro Reino das Fadas. Dez anos depois, tudo o que Jude quer é se encaixar, mesmo sendo uma garota mortal. Mas todos os feéricos parecem desprezar os humanos... Especialmente o príncipe Cardan, o mais jovem e mais perverso dos filhos do Grande Rei de Elfhame."},
  {id: 34, titulo:"Livro 34", categoria:"negocios", preco:29.00, img:"https://via.placeholder.com/120x180?text=Livro+34", link:"#", descricao:"Descrição detalhada do Livro 34."},
  {id: 35, titulo:"Livro 35", categoria:"autoajuda", preco:30.00, img:"https://via.placeholder.com/120x180?text=Livro+35", link:"#", descricao:"Descrição detalhada do Livro 35."},
  {id: 36, titulo:"Livro 36", categoria:"desenvolvimento", preco:31.90, img:"https://via.placeholder.com/120x180?text=Livro+36", link:"#", descricao:"Descrição detalhada do Livro 36."},
  {id: 37, titulo:"Livro 37", categoria:"romance", preco:23.90, img:"https://via.placeholder.com/120x180?text=Livro+37", link:"#", descricao:"Descrição detalhada do Livro 37."},
  {id: 38, titulo:"Livro 38", categoria:"ficcao", preco:41.90, img:"https://via.placeholder.com/120x180?text=Livro+38", link:"#", descricao:"Descrição detalhada do Livro 38."},
  {id: 39, titulo:"Livro 39", categoria:"negocios", preco:27.00, img:"https://via.placeholder.com/120x180?text=Livro+39", link:"#", descricao:"Descrição detalhada do Livro 39."},
  {id: 40, titulo:"Livro 40", categoria:"autoajuda", preco:30.90, img:"https://via.placeholder.com/120x180?text=Livro+40", link:"#", descricao:"Descrição detalhada do Livro 40."},
  {id: 41, titulo:"Livro 41", categoria:"desenvolvimento", preco:29.90, img:"https://via.placeholder.com/120x180?text=Livro+41", link:"#", descricao:"Descrição detalhada do Livro 41."},
  {id: 42, titulo:"Livro 42", categoria:"romance", preco:25.90, img:"https://via.placeholder.com/120x180?text=Livro+42", link:"#", descricao:"Descrição detalhada do Livro 42."},
  {id: 43, titulo:"Livro 43", categoria:"ficcao", preco:44.90, img:"https://via.placeholder.com/120x180?text=Livro+43", link:"#", descricao:"Descrição detalhada do Livro 43."},
  {id: 44, titulo:"Livro 44", categoria:"negocios", preco:28.90, img:"https://via.placeholder.com/120x180?text=Livro+44", link:"#", descricao:"Descrição detalhada do Livro 44."},
  {id: 45, titulo:"Livro 45", categoria:"autoajuda", preco:33.90, img:"https://via.placeholder.com/120x180?text=Livro+45", link:"#", descricao:"Descrição detalhada do Livro 45."},
  {id: 46, titulo:"Livro 46", categoria:"desenvolvimento", preco:27.50, img:"https://via.placeholder.com/120x180?text=Livro+46", link:"#", descricao:"Descrição detalhada do Livro 46."},
  {id: 47, titulo:"Livro 47", categoria:"romance", preco:23.00, img:"https://via.placeholder.com/120x180?text=Livro+47", link:"#", descricao:"Descrição detalhada do Livro 47."},
  {id: 48, titulo:"Livro 48", categoria:"ficcao", preco:39.50, img:"https://via.placeholder.com/120x180?text=Livro+48", link:"#", descricao:"Descrição detalhada do Livro 48."},
  {id: 49, titulo:"Livro 49", categoria:"negocios", preco:26.90, img:"https://via.placeholder.com/120x180?text=Livro+49", link:"#", descricao:"Descrição detalhada do Livro 49."},
  {id: 50, titulo:"Livro 50", categoria:"autoajuda", preco:31.50, img:"https://via.placeholder.com/120x180?text=Livro+50", link:"#", descricao:"Descrição detalhada do Livro 50."},
  {id: 51, titulo:"Livro 51", categoria:"desenvolvimento", preco:29.90, img:"https://via.placeholder.com/120x180?text=Livro+51", link:"#", descricao:"Descrição detalhada do Livro 51."},
  {id: 52, titulo:"Livro 52", categoria:"romance", preco:25.50, img:"https://via.placeholder.com/120x180?text=Livro+52", link:"#", descricao:"Descrição detalhada do Livro 52."},
  {id: 53, titulo:"Livro 53", categoria:"ficcao", preco:43.00, img:"https://via.placeholder.com/120x180?text=Livro+53", link:"#", descricao:"Descrição detalhada do Livro 53."},
  {id: 54, titulo:"Livro 54", categoria:"negocios", preco:28.00, img:"https://via.placeholder.com/120x180?text=Livro+54", link:"#", descricao:"Descrição detalhada do Livro 54."},
  {id: 55, titulo:"Livro 55", categoria:"autoajuda", preco:30.90, img:"https://via.placeholder.com/120x180?text=Livro+55", link:"#", descricao:"Descrição detalhada do Livro 55."},
  {id: 56, titulo:"Livro 56", categoria:"desenvolvimento", preco:27.90, img:"https://via.placeholder.com/120x180?text=Livro+56", link:"#", descricao:"Descrição detalhada do Livro 56."},
  {id: 57, titulo:"Livro 57", categoria:"romance", preco:22.90, img:"https://via.placeholder.com/120x180?text=Livro+57", link:"#", descricao:"Descrição detalhada do Livro 57."},
  {id: 58, titulo:"Livro 58", categoria:"ficcao", preco:40.00, img:"https://via.placeholder.com/120x180?text=Livro+58", link:"#", descricao:"Descrição detalhada do Livro 58."},
  {id: 59, titulo:"Livro 59", categoria:"negocios", preco:25.00, img:"https://via.placeholder.com/120x180?text=Livro+59", link:"#", descricao:"Descrição detalhada do Livro 59."},
  {id: 60, titulo:"Livro 60", categoria:"autoajuda", preco:32.00, img:"https://via.placeholder.com/120x180?text=Livro+60", link:"#", descricao:"Descrição detalhada do Livro 60."}
 ];
let currentPage = 1;
const itemsPerPage = 10;
let currentFilter = 'todos';
let currentSearch = '';

// Função para normalizar texto (remover acentos e transformar em minúsculo)
function normalizeText(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function mostrarPagina(page, rolarParaTopo = false) {
  currentPage = page;
  const produtosContainer = document.getElementById('produtos');
  produtosContainer.innerHTML = '';

  const normalizedSearch = normalizeText(currentSearch);

  const filteredLivros = livros.filter(livro => {
    const normalizedTitle = normalizeText(livro.titulo);
    const categoriaMatch = currentFilter === 'todos' || livro.categoria === currentFilter;
    const titleMatch = normalizedTitle.includes(normalizedSearch);
    return categoriaMatch && titleMatch;
  });

  const start = (page - 1) * itemsPerPage;
  const livrosPagina = filteredLivros.slice(start, start + itemsPerPage);

  if (livrosPagina.length === 0) {
    produtosContainer.innerHTML = '<p style="text-align:center; margin-top:20px;">Nenhum livro encontrado.</p>';
  } else {
    livrosPagina.forEach(livro => {
      const livroDiv = document.createElement('div');
      livroDiv.className = 'livro';
      livroDiv.dataset.categoria = livro.categoria;
      livroDiv.addEventListener('click', () => mostrarDetalhes(livro.id));
      livroDiv.innerHTML = `
        <img src="${livro.img}" alt="${livro.titulo}" />
        <h3>${livro.titulo}</h3>
        <p>R$ ${livro.preco.toFixed(2)}</p>
        <span class="ver-mais">Clique para ver mais</span>
      `;
      produtosContainer.appendChild(livroDiv);
    });
  }

  atualizarPaginacao(filteredLivros.length);

  if (rolarParaTopo) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function atualizarPaginacao(totalItems) {
  const paginacaoContainer = document.getElementById('paginacao');
  paginacaoContainer.innerHTML = '';

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.classList.toggle('active', i === currentPage);
    btn.addEventListener('click', () => mostrarPagina(i, true));
    paginacaoContainer.appendChild(btn);
  }
}

function filtrar(categoria) {
  currentFilter = categoria;

  document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.classList.toggle('ativa', btn.dataset.categoria === categoria);
    btn.setAttribute('aria-pressed', btn.dataset.categoria === categoria ? 'true' : 'false');
  });

  mostrarPagina(1);

  const produtosSection = document.getElementById('catalogoView');
  if (produtosSection) {
    produtosSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function buscar() {
  const input = document.getElementById('searchInput');
  currentSearch = input.value.trim();
  mostrarPagina(1);
}

function mostrarDetalhes(id) {
  const livro = livros.find(l => l.id === id);
  if (!livro) return;

  document.getElementById('header').style.display = 'none';
  document.getElementById('toggleCategorias').style.display = 'none';
  document.getElementById('categoriasMenu').style.display = 'none';
  document.getElementById('heroSection').style.display = 'none';

  document.getElementById('catalogoView').style.display = 'none';
  document.getElementById('detalhesView').style.display = 'block';

  document.getElementById('detalhesProduto').innerHTML = `
    <h1>${livro.titulo}</h1>
    <img src="${livro.img}" alt="${livro.titulo}" />
    <p>${livro.descricao}</p>
    <p><strong>Preço:</strong> R$ ${livro.preco.toFixed(2)}</p>
    <a href="${livro.link}" class="btn-comprar" target="_blank" rel="noopener noreferrer">Comprar agora</a>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarCatalogo() {
  document.getElementById('detalhesView').style.display = 'none';
  document.getElementById('catalogoView').style.display = 'block';

  document.getElementById('header').style.display = '';
  document.getElementById('toggleCategorias').style.display = '';
  document.getElementById('categoriasMenu').style.display = '';
  document.getElementById('heroSection').style.display = '';

  mostrarPagina(currentPage);
}

// ✅ NOVO: Toggle do menu de categorias com classe `.mostrar`
function toggleMenuCategorias() {
  const btn = document.getElementById('toggleCategorias');
  const menu = document.getElementById('categoriasMenu');

  if (!menu || !btn) return;

  const isOpen = menu.classList.contains('mostrar');

  if (isOpen) {
    menu.classList.remove('mostrar');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('mostrar');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// Inicialização
window.onload = () => {
  mostrarPagina(1);

  document.getElementById('searchInput')?.addEventListener('input', buscar);

  document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', () => filtrar(btn.dataset.categoria));
  });

  const btnVoltar = document.querySelector('.btn-voltar');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', voltarCatalogo);
  }

  const btnCategorias = document.getElementById('toggleCategorias');
  if (btnCategorias) {
    btnCategorias.addEventListener('click', toggleMenuCategorias);
  }
};
