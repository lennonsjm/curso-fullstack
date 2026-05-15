use kgt_bank;

create table usuario (
	id int primary key auto_increment,
    nome  varchar(50),
    email varchar(50),
    telefone varchar(12)
);

SELECT * FROM usuario;

