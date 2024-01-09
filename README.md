<body>
  <h1>Instalação e Build do Aplicativo React Native com Sensores e Banco de Dados SQLite</h1>

  <h2>Pré-requisitos</h2>
  <p>Certifique-se de ter o Node.js e o npm instalados em seu sistema. Você também precisará do Expo CLI para criar o projeto React Native. Se ainda não tiver o Expo CLI, instale-o globalmente com o seguinte comando:</p>

  <pre><code>npm install -g expo-cli</code></pre>

  <h2>Passos para Instalação</h2>

  <h3>1. Clone o Repositório</h3>

  <pre><code>git clone https://github.com/herverson/sensorapp.git
cd nome-do-repositorio</code></pre>

  <h3>2. Instale as Dependências</h3>

  <pre><code>npm install</code></pre>

  <h3>3. Configuração do Banco de Dados</h3>

  <p>Certifique-se de que o banco de dados SQLite seja inicializado. Isso será feito automaticamente quando o aplicativo for executado pela primeira vez. A configuração do banco de dados está no arquivo <code>src/services/database.js</code>.</p>

  <h3>4. Executar o Aplicativo</h3>

  <pre><code>npm start</code></pre>

  <p>Isso iniciará o Metro Bundler e abrirá a interface do Expo no navegador. Use o Expo Go no seu dispositivo para escanear o código QR exibido no terminal ou no navegador para iniciar o aplicativo no seu dispositivo.</p>

  <h2>Build do Aplicativo</h2>

  <h3>1. Configuração do EAS:</h3>
  <p>O Expo agora utiliza o EAS para compilar aplicativos. Certifique-se de ter o EAS CLI instalado globalmente:</p>

  <pre><code>npm install -g eas-cli</code></pre>
  <p>Autentique-se com o EAS:</p>
  <pre><code>eas login</code></pre>
  <p>Configure o EAS no seu projeto:</p>
  <pre><code>eas init</code></pre>
  

  <p>Siga as instruções no terminal para construir o APK. O arquivo APK gerado estará na pasta <code>android/app/build/outputs/apk/release/</code>.</p>

  <h3>2. Execução do Build:</h3>
  <p> Para compilar seu aplicativo para Android, utilize o seguinte comando:</p>
  <pre><code>eas build -p android</code></pre>

  <p>Isso iniciará o processo de build utilizando o EAS.
Certifique-se de revisar a documentação oficial do Expo Application Services (EAS) para obter informações mais detalhadas e opções adicionais.</p>

  <h2>Observações</h2>

  <ul>
    <li>Certifique-se de ter as configurações corretas para compilar o aplicativo para Android ou iOS no arquivo <code>app.json</code>.</li>
    <li>Assegure-se de que as permissões necessárias para acessar os sensores estejam configuradas no <code>app.json</code> e solicitadas durante a execução do aplicativo.</li>
    <li>Consulte a <a href="https://docs.expo.dev/" target="_blank">documentação do Expo</a> para obter informações adicionais sobre como configurar e compilar aplicativos React Native.</li>
  </ul>
</body>

</html>
