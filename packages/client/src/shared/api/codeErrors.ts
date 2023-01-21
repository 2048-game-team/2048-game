export const codeErrors = (code: number) => {
  switch (code) {
    case 401:
      return 'Вы не авторизованы 😥';
    case 400:
      return 'Некорректный запрос 👀';
    case 403:
      return 'У вас недостаточно прав для совершения операции 🙈';
    case 404:
      return 'Информация не найдена 😥';
    case 500:
    default:
      return 'Произошла неизвестная ошибка на сервере 👻';
  }
};
