const logRedirectTest = 'log_redirect_test';
const someSecretText = 'some_secret';
const XSSScript = `<script>console.log(${someSecretText})</script>`;
const injureUserResponse = {
  id: 554974,
  first_name: 'mk2',
  second_name: 'mk2',
  display_name: XSSScript,
  login: 'mk2',
  avatar: null,
  email: 'mk2@mail.ru',
  phone: '+791111111111',
};

export { logRedirectTest, someSecretText, XSSScript, injureUserResponse };
