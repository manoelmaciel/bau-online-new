## Cria o SCHEMA devmedia_bau e a TABLE tb_musica

CREATE SCHEMA `devmedia_bau`;

  USE `devmedia_bau`;

  CREATE TABLE `tb_musicas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(200) NOT NULL,
    `album` varchar(45) DEFAULT NULL,
    `cantor` varchar(45) DEFAULT NULL,
    `ano` int(4) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
