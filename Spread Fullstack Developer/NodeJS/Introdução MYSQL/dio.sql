
-- Criar a tabela dentro do banco de dados

CREATE TABLE pessoa(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE,
)

-- Inserir dados na tabela
INSERT INTO pessoa(nome, nascimento) VALUES ('João', '1997-12-02')
INSERT INTO pessoa(nome, nascimento) VALUES ('Maria', '1997-12-02')

-- Consultar dados na tabela
SELECT * FROM pessoa; -- Retorna todos os dados
SELECT nome FROM pessoa; -- Selecionar apenas o nome

-- "Atualiza/Alterar" dados na tabela
UPDATE pessoa SET nome = 'Nayuta' -- Atualiza todas as informações de nome para Nayuta
UPDATE pessoa SET nome = 'Nayuta Dantas' WHERE id = 1; -- Atualizar o nome de uma pessoa

-- Deletar dados na tabela
SELECT * FROM pessoa WHERE id = 1; --  --Boa Pratica ao deletar dados: Verificar se é o usuario que deseja deletar
DELETE FROM pessoa WHERE id = 1; -- Deleta o usuario

-- Ordernar dados

SELECT * FROM pessoa ORDER BY nome; -- Ordena por nome
SELECT * FROM pessoa ORDER BY nascimento; -- Ordena por nascimento

-- Ordernar dados de forma decrescente

SELECT * FROM pessoa ORDER BY nome DESC; -- Ordena por nome
SELECT * FROM pessoa ORDER BY nascimento DESC; -- Ordena por nascimento

-- Agrupar dados

SELECT COUNT(nome) FROM pessoa GROUP BY nome; -- Agrupa por nome e conta quantos registros tem

