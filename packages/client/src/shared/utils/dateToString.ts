export function dateToString(date: Date) {
  return (
    date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU')
  );
}

export function dateToStringForRender(dateString: string) {
  const date = new Date(dateString);
  const startDate = date.valueOf();
  const currentDate = Date.now();
  const interval = currentDate - startDate;
  const diffMinutes = interval / 1000 / 60;

  if (diffMinutes < 1) return '1 минуту назад';
  if (diffMinutes < 5) return '5 минут назад';
  if (diffMinutes < 10) return '10 минут назад';
  if (diffMinutes < 30) return '30 минут назад';

  const diffDays = interval / 1000 / 60 / 60 / 24;

  const minutes = ('0' + date.getMinutes()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const days = ('0' + date.getDate()).slice(-2);
  const months = ('0' + (date.getMonth() + 1)).slice(-2);
  const years = date.getFullYear();

  if (diffDays < 1) return `${hours}:${minutes}`;
  return `${days}.${months}.${years}`;
}
