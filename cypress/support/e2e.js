import './commands'

Cypress.on('uncaught:exception', (err, _runnable) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'map')")) {
        return false;
    }      
        return true;
});