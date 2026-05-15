use futebol;

show databases;

CREATE TABLE jogador (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cidade VARCHAR(60),
    salario DECIMAL
);

SELECT * FROM jogador;

INSERT INTO jogador(nome, cidade, salario) VALUES
('Ronaldo', 'Rio de Janeiro', 10000),
('Zinedine Zidane', 'Marselha', 5000),
('Lucas Moura', 'Brasil', 3500),
('Cristiano Ronaldo', 'Portugal', 2500);



DELETE FROM jogador WHERE id = 4;

-- para fazer update - troca ou correção do campo
UPDATE jogador
	SET 
		nome = 'Cristiano Ronaldo',
        cidade = 'Portugal',
        salario = 7000
	WHERE id = 3;

SELECT * FROM jogador;

-- troca coluna da tabela

ALTER TABLE jogador RENAME COLUMN salario To pagode;

SELECT * FROM jogador;


-- adiciona coluna na tabela

ALTER TABLE jogador
ADD timeFutebol VARCHAR(60),
ADD titulo VARCHAR(10),
ADD nacionalidade VARCHAR(100),
ADD carro VARCHAR(100);

-- correção dos elementos faltantes

UPDATE jogador
	SET 
		timeFutebol = 'Cruzeiro',
		titulo = 20,
		nacionalidade = 'Brazil',
		carro = 'Fusca'
	WHERE id = 1;

UPDATE jogador
	SET 
		timeFutebol = 'Psg',
		titulo = 13,
		nacionalidade = 'Francês',
		carro = 'Peugeot'
	WHERE id = 2;

SELECT * FROM jogador;

UPDATE jogador
	SET 
		timeFutebol = 'Porto',
		titulo = 50,
		nacionalidade = 'Português-PT',
		carro = 'Ford'
	WHERE id = 3;

SELECT * FROM jogador;

INSERT INTO jogador(nome, cidade, pagode, timeFutebol, titulo, nacionalidade, carro) VALUES
('Roberto Carlos', 'Minas Gerais', 10000, 'Cruzeiro', 33, 'Brazil', 'Brasilia'),
('Roberto Dinamite', 'Rio de Janeiro', 1000, 'Vasco da Gama', 30,'Brazil', 'Ferrari');

SELECT * FROM jogador;


