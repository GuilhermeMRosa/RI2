# RI2 — Orientação a Objetos com JavaScript

**Disciplina:** Análise e Desenvolvimento de Sistemas  
**Professor:** Gerson  
**Instituição:** FATEC São José dos Campos  

---

## 📋 Sobre a atividade

As RIs são atividades propostas pelo professor com o objetivo de colocar em prática os conceitos ensinados em aula. Esta atividade faz parte do módulo de **JavaScript com Orientação a Objetos**.

## 🧩 Desafio proposto

Criar **3 classes** interligadas que representem o cadastro de um cliente, cada uma com seus próprios atributos, **getters**, **setters** e métodos auxiliares. Além disso, implementar um método de descrição que exiba todas as informações do cliente de forma organizada no console, e uma função de **ordenação alfabética** da lista de clientes.

As classes desenvolvidas foram:

- **TelefoneCelular** — armazena DDD e número
- **Endereco** — armazena rua, número, cidade e estado
- **Cliente** — compõe as duas classes anteriores, além de nome e e-mail

## 🧠 Conceitos praticados

- Criação de **funções construtoras** como classes em JavaScript
- **Composição de objetos** (Cliente contém Endereco e TelefoneCelular)
- **Getters e setters** para encapsulamento dos atributos
- Métodos auxiliares como `.toUpperCase()` e `.toLowerCase()`
- Método `descricao()` para exibir os dados formatados no console
- **Ordenação de arrays de objetos** com `sort()` e `localeCompare()`

## 🚀 Como executar
```bash
# Clone o repositório
git clone https://github.com/GuilhermeMRosa/RI2.git

# Acesse a pasta
cd RI2

# Execute no terminal (Node.js necessário)
node index.js
```

---

> Desenvolvido como parte das atividades avaliativas do curso de ADS — FATEC São José dos Campos.
