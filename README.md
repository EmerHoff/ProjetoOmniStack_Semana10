## Projeto
Esse projeto foi intitulado como DevRadar, e visa conectar desenvolvedores próximos a você que trabalham com as mesmas tecnologias. Ele foi desenvolvido durante o curso da Rocketseat (Semana 10 OmniStack).

Durante o desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

### Layout

É possível baixar o layout do projeto no formato `.sketch` através [desse link](.github/DevRadar.sketch).

Para abrir o arquivo é necessáario utilizar a ferramenta [Figma](https://figma.com).

## Instalação

Configure o MongoDB e atualize a string de conexão com seu `User:Senha` no arquivo `index.js`.  
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:
```bash
cd backend
yarn install
yarn dev
```
Para iniciar o **Frontend** do React utilize os comandos:
```bash
cd frontend
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido até agora (Dia 3 de 5).  

Para testar o **Mobile** do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois execute os comandos:
```bash
cd mobile
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por `LAN`: baixe o aplicativo *Expo* da Play Store ou App Store e em seguida escaneie o código QR.

Lembrando que deve-se alterar os IPs da conexão nos arquivos:
`./mobile/src/services/socket.js` e 
`./mobile/src/services/api.js`. 
Utilizar o **IP local**.
