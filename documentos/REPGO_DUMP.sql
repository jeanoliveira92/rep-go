--
-- Estrutura da tabela `locais`
--

CREATE TABLE `locais` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `elev` int(11) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `locais`
--

INSERT INTO `locais` (`id`, `nome`, `tipo`, `elev`, `lat`, `lng`) VALUES
(2, 'Centro', 'centro', 0, -22.4243, -45.454),
(469, 'Caixa Econômica Federal', 'banco', 0, -22.4268, -45.4613),
(470, 'Banco do Brasil', 'banco', 0, -22.4232, -45.4537),
(471, 'Caixa Econômica Federal', 'banco', 0, -22.4225, -45.4548),
(472, 'Santander', 'banco', 0, -22.424, -45.4537),
(473, 'Policlínica da Varginha', 'hospital', 0, -22.4266, -45.4407),
(474, 'Vila Nova Shopping', 'mercado', 0, -22.4256, -45.4607),
(475, 'CEASA', 'mercado', 0, -22.4316, -45.4666),
(476, 'Minasul', 'autoescola', 0, -22.4239, -45.4501),
(477, 'Minas Gerais', 'autoescola', 0, -22.4255, -45.4512),
(478, 'CEAM', 'hospital', 0, -22.4241, -45.4461),
(479, 'HOSPITAL ESCOLA', 'hospital', 0, -22.4194, -45.4603),
(480, 'UBS Cruzeiro', 'hospital', 0, -22.4172, -45.4445),
(481, 'NEFROCLIN', 'hospital', 0, -22.4218, -45.4499),
(482, 'Biblioteca Municipal', 'biblioteca', 0, -22.4236, -45.4613),
(483, 'Museu de Itajubá', 'cultura', 0, -22.4243, -45.4605),
(484, 'Restaurante Pizza e Cia', 'comida', 0, -22.4249, -45.4587),
(485, 'Restaurante Don Cesario', 'comida', 0, -22.4228, -45.455),
(486, 'Supermercado Alvorada', 'mercado', 0, -22.4259, -45.4613),
(487, 'Supermercado Bretas', 'mercado', 0, -22.4264, -45.463),
(488, 'Rodoviária de Itajubá', 'rodoviaria', 0, -22.4237, -45.4606),
(489, 'União', 'autoescola', 0, -22.4244, -45.4503),
(490, 'Bibliotena Municipal de Itajubá', 'biblioteca', 0, -22.424, -45.4519),
(491, 'Banco Mercantil do Brasil', 'banco', 0, -22.4241, -45.4547),
(492, 'Banco Bradesco', 'banco', 0, -22.4236, -45.4531),
(493, 'Banco Itau', 'banco', 0, -22.425, -45.4541),
(494, 'Bar Don Costello', 'bar', 0, -22.4256, -45.4465),
(495, 'Taberna Bistro Pirata', 'bar', 0, -22.4252, -45.4528),
(496, 'Bar Cultural', 'bar', 0, -22.4303, -45.4557),
(497, 'Cine Club Itajubá', 'cultura', 0, -22.4247, -45.4521),
(498, 'Bar e Lanchonete da Tia', 'comida', 0, -22.4305, -45.4498),
(499, 'Posto Avalon', 'posto', 0, -22.4268, -45.4476),
(500, 'Santa Casa de Misericordia de Itajubá', 'hospital', 0, -22.4215, -45.4502),
(501, 'UBS Santa Rita de Cássia', 'hospital', 0, -22.4366, -45.4399),
(502, 'Hospital Escola', 'hospital', 0, -22.4193, -45.4607),
(503, 'Drogasil', 'farmacia', 0, -22.4253, -45.4541),
(504, 'Drogaria São Paulo', 'farmacia', 0, -22.4241, -45.4541),
(505, 'Polícia Civil', 'policia', 0, -22.4242, -45.4496),
(506, 'Toca do Caboclo', 'comida', 0, -22.4293, -45.4468),
(507, 'Pizzaria Varanda', 'comida', 0, -22.4215, -45.4456),
(508, 'comida e Xodó', 'comida', 0, -22.4221, -45.4524),
(509, 'Teatro Cristiane Riera', 'cultura', 0, -22.4118, -45.4367),
(510, 'Universidade Federal de Itajubá', 'universidade', 0, -22.4138, -45.4503);

-- --------------------------------------------------------

--
-- Estrutura da tabela `republica`
--

CREATE TABLE `republica` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `elev` float NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `num_membros` int(11) NOT NULL,
  `contato` varchar(50) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `facebook` varchar(50) NOT NULL,
  `logo` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `republica`
--

INSERT INTO `republica` (`id`, `nome`, `lat`, `lng`, `elev`, `tipo`, `num_membros`, `contato`, `endereco`, `facebook`, `logo`) VALUES
(0, 'K-zona', -22.4144, -45.4547, 862, 'Mista', 0, '3536217713', 'Rua Deputado Luiz Fernando Faria de Azevedo 592 BPS', 'republicakzonaitajuba', 'kzona.jpg'),
(1, 'Casa Amarela', -22.4142, -45.4514, 850, 'Mista', 0, '', 'Rua Francisco Masseli 769', 'casaamarelaitajuba', 'casaamarela.jpg'),
(2, 'Santo grau', -22.4153, -45.452, 851, 'Mista', 0, '3536223549', 'Rua Doutor Silvestre Ferraz 1166 BPS', 'republicasantograuitajuba', 'santograu.jpg'),
(3, 'Treme Treme', -22.4148, -45.4449, 852, 'Masculina', 0, '35984082000', 'Rua Coronel Joaquim Francisco 382 Varginha', 'republicatremetreme', 'tremetreme.jpg'),
(4, 'SóCanela', -22.4171, -45.4552, 856, 'Masculina', 0, '35999044343', 'Rua Francisco Masseli 1030', 'socanelaitajuba', 'socanelas.jpg'),
(5, 'MatuAltu', -22.4185, -45.4557, 861, 'Masculina', 0, '', 'Rua Francisco Masseli 865', '', ''),
(6, 'Gruta', -22.4186, -45.4545, 850, 'Masculina', 0, '31994772621 11999882446', 'Rua Prefeito Tigre Maia 718', 'repgruta', 'gruta.jpg'),
(7, 'Caiçara', -22.4187, -45.4535, 851, 'Masculina', 0, '35984061982', 'Rua Prefeito Tigre Maia 443', 'caicara.republica', ''),
(8, 'Moecana', -22.4207, -45.4544, 851, 'Masculina', 0, '3536218555', 'Rua Prefeito Tigre Maia 551', 'RepMoecana', 'moecana.jpg'),
(9, 'OCA', -22.4208, -45.4535, 850, 'Mista', 0, '3536223956', 'Rua Prefeito Tigre Maia 216', 'RepublicaOCA', 'oca.jpg'),
(10, 'TatuRodando', -22.4231, -45.4567, 851, 'Masculina', 0, '3536221006', ' Rua, São judas Tadeu 26 Apt. 103', 'taturodando.itajuba', 'taturodando.jpg'),
(11, 'Havana', -22.423, -45.4515, 853, 'Masculina', 0, '3536235644', 'Rua Comendador Schumann 267 Centro', 'rephavana', 'havana.jpg'),
(12, 'InstaGrau', -22.4233, -45.4502, 849, 'Masculina', 0, '35997409151 35988691888', 'Rua Comendador Schumann 392', 'Republicainstagrau', 'instagrau.jpg'),
(13, 'Catapulta', -22.4269, -45.4572, 848, 'Masculina', 11, '35997143691 35997273381', 'Avenida José Santana Rodrigues 104 Centro', 'repctp', 'catapulta.jpg'),
(15, 'Lahma', -22.4263, -45.4499, 850, 'Masculina', 0, '3536211994', 'R. Dr. Luís Viana 51', 'RepLahma1990', 'lahma.jpg'),
(16, 'Seu Gato', -22.4299, -45.4578, 849, 'Masculina', 0, '', 'Av. Paulo Chiaradia 462 São Vicente', '', ''),
(17, 'Uteiro', -22.4295, -45.4542, 851, 'Masculina', 0, '', 'R. Severiano Ribeiro Cardoso 104 São Vicente', '', 'uteiro.jpg'),
(18, 'Casa Verde', -22.4336, -45.4588, 847, 'Masculina', 0, '', 'R. Projetada 16 São Vicente', 'republica.casaverde.7', 'casaverde.jpg'),
(19, 'Capim Canela', -22.4178, -45.4538, 849, 'Masculina', 0, '3536227026', 'Rua Antonio Simao Mauad 636', 'repcapim.canela', 'capimcanela.jpg'),
(20, 'Castor Cabaço', -22.4168, -45.453, 850, 'Masculina', 0, '35992673619', 'R. Pref. Tigre Maia 664 Pinheirinho', '100010567726351', 'castorcabaco.jpg'),
(21, 'Dr. Cevada', -22.4174, -45.4531, 850, 'Masculina', 0, '31992740448', 'R. Pref. Tigre Maia 594 Pinheirinho', 'repcevada', 'drcevada.jpg'),
(22, 'Selva', -22.4189, -45.4532, 852, 'Mista', 0, '35992017197 12991922126', 'Deputado Aureliano Chaves 300', 'repselva', 'selva.jpg'),
(23, 'Pimenta doida', -22.4197, -45.4542, 851, 'Masculina', 0, '3536225715', 'R. Antônio Simão Mauad 419', 'republicapimenta.doida', 'pimentadoida.jpg'),
(24, 'Tudo PelaDona', -22.4183, -45.4521, 790, 'Feminina', 0, '35992107373', 'R. Coronel Francisco Brás 1123', 'tpditajuba', 'tudopeladona.jpg'),
(25, 'Vira-latas', -22.4225, -45.4473, 878, 'Masculina', 0, '35991597389', 'R. Antônio Gomes Garcia 33', '', ''),
(26, 'AteCubanos', -22.4153, -45.4446, 854, 'Masculina', 0, '35992145893', 'R. José Maria Afflalo 37 N. S. da Agonia', 'repatecubanosublica', 'atecubanos.jpg'),
(27, 'Paracetamal', -22.417, -45.4499, 891, 'Mista', 0, '35992222758 19995705042', 'R. Pref. Jose Maria S. Campos', 'repparacetamalunifei', 'paracetamal.jpg'),
(28, 'Tequilar', -22.4194, -45.4534, 851, 'Feminina', 0, '3599147615', 'R. Pref. Tigre Maia', 'reptequilar', 'tequilar.jpg'),
(29, 'Namoradeiras', -22.4354, -45.464, 869, 'Feminina', 7, '35981856337', 'R. André Martins Andrade Filho 127 Cruzeiro', '', 'namoradeiras.jpg'),
(30, 'Oásis', -22.4174, -45.4533, 849, 'Feminina', 6, '12996813890 35991485521 19984394536', 'R. Pref. Tigre Maia 599', 'repoasisunifei', 'oasis.jpg'),
(31, 'Amazona', -22.4266, -45.4456, 848, 'Mista', 0, '3536223993', 'R. Francisca Rocha Faria 55', 'RepAmaZona', 'amazona.jpg'),
(32, 'CasGata', -22.4237, -45.4532, 857, 'Masculina', 8, '35999106648 35988118469', 'R. Antônio Simão Mauad 936', 'casgata.unifei.3', 'casgata.jpg'),
(33, 'Amnésia', -22.4161, -45.4523, 852, 'Masculina', 0, '3536224998', 'R. Dr. Silvestre Ferraz 1066 Pinheirinho ', 'República-Amnésia-572748863107168', ''),
(34, 'Mama África', -22.4166, -45.456, 851, 'Masculina', 10, '12997307102 19996870977', 'Rua São Judas Tadeu 799 Pinheirinho', 'MamaAfricaItajuba', 'mamaafrica.jpg'),
(35, 'Dark Side', -22.4158, -45.4461, 852, 'Mista', 0, '', 'Oscar Rennó', '', 'darkside.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locais`
--
ALTER TABLE `locais`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `republica`
--
ALTER TABLE `republica`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locais`
--
ALTER TABLE `locais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=511;
--
-- AUTO_INCREMENT for table `republica`
--
ALTER TABLE `republica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;COMMIT;
