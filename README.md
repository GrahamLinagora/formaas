# HTML Forms as a Service

[![Join the chat at https://gitter.im/GrahamLinagora/formaas](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/GrahamLinagora/formaas?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Form as a Service let you create and instanciate forms in the Open-PaaS platform.

## Howto

Clone:

    git clone https://github.com/linagora-open-paas/form-client-angular.git

Install dependencies (this assumes that you have node, npm and bower installed):

    npm install

Then:

0. Launch the Form Server API (https://github.com/linagora-open-paas/form-server-api) on http://localhost:3000.
1. Launch the current application 'node server' or 'npm start'
2. Open http://localhost:3001

You can configure the application on ./config/config.js.

TODO :

- Constants on the client side coming from the server (especially the API URI).
