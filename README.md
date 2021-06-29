<h1 align="center">MailSender</h1>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/BrunoFerreira44/MailSender/main/LICENSE)

## 🛠 Sobre o projeto

Emissor simples de mensagens via E-Mail

## 🚀 Tecnologias

• JavaScript

• NodeJS com utilização da biblioteca Nodemailer

## ⚙ Configurações

```
#Clone e instalação do projeto
   git clone https://github.com/BrunoFerreira44/MailSender.git
   cd MailSender/
   yarn

#Alteração das configurações pessoais
   No diretório "src/config/", será necessário ajustar as seguintes configs no arquivo "smtp.js:

   • user = Usuário de E-Mail que o MailSender irá se conectar para disparar as mensagens
   • pass = Senha da conta do usuário
   • text = Texto do corpo do E-Mail
   • subject = Assunto do E-Mail

   • from = Email emissor {
      Preencher da seguinte maneira: "Seu Nome" <"email">
      ex: Antônio Carlos <antoniocarlos@gmail.com>
   }

   • to = Vetor de E-Mails destino {
      ex: ["joao@gmail.com", "maria@hotmail.com", "antonio@live.com", "isabela@yahoo.com.br"]
   }

#Execução do projeto
   yarn start
```

## ⚖ Premissas

A configuração de "Acesso de Apps menos seguros" da conta de Gmail do usuário
emissor deverá estar ATIVADA. Para isso, entre no link:
https://myaccount.google.com/u/1/lesssecureapps e ative a opção. É importante
garantir que a configuração esta sendo feita para a conta que será usada como
emissora dos E-Mails. Isto é necessário para que o Gmail aceite a conexão
externa do código e não barre o acesso. É também muito aconselhável que, após as
execuções, esta opção seja desativada novamente por questão de segurança.

## 🙇‍ Autor

Bruno Ferreira

LinkedIn: https://www.linkedin.com/in/brunoferreira3003/
