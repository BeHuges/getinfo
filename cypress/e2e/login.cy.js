import * as data from "../helpers/default_data.json"

describe('Тестирование авторизации и профиля', () => { 

  beforeEach(() => {
    cy.visit('/login');     
  });   

  
  it('Верный логин и пароль', () => {
    cy.login(data.validLogin, data.validPassword);               
  });


  it('Неверный логин, верный пароль', () => {
    cy.get('#sdo-login').type(data.invalidLogin);
    cy.get('#sdo-password').type(data.validPassword);
    cy.contains('button', 'Войти').click();    
    cy.contains('Bad credentials.', { timeout: 10000 }).should('be.visible');
  });

  
  it('Верный логин, неверный пароль', () => {
    cy.get('#sdo-login').type(data.validLogin);
    cy.get('#sdo-password').type(data.invalidPassword);
    cy.contains('button', 'Войти').click();    
    cy.contains('Введенный пароль недействителен.', { timeout: 10000 }).should('be.visible');
  });  

  
  it('Наличие ссылки "Забыли пароль?" и переход по ней', () => {    
    cy.contains('button', 'Забыли пароль?').should('be.visible').click();    
    cy.contains('button', 'Восстановить').should('be.visible');
  });

  it('Переход в раздел "Учебный центр" и далее в подраздел "Компания"', () => {  
    cy.login(data.validLogin, data.validPassword); 
    cy.get('[data-cy="submenu-title-ms-education-center"]').should('be.visible').click();
    cy.get('[data-cy="router-link-Company"]').first().click()
  });  

  it('Сравнение имени руководителя и имени авторизованного пользователя', () => {
    cy.login(data.validLogin, data.validPassword); 

    cy.get('[data-cy="submenu-title-ms-education-center"]').should('be.visible').click();
    cy.get('[data-cy="router-link-Company"]').first().click()
    
    cy.get('div.description-value a[target="_blank"]').invoke('text').then((leaderName) => {
      cy.get('span.el-avatar.el-avatar--circle.cursor-pointer.avatar-icon-bg.el-tooltip__trigger').should('be.visible').click();
      cy.get('.font-bold.text-center').invoke('text').then((profileName) => {
        expect(profileName.trim()).to.equal(leaderName.trim());
      });
    });                
  });
});

  