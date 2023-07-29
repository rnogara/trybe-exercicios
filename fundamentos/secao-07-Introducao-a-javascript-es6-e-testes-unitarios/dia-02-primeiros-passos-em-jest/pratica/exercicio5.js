const hydrate = (string) => {
  let soma = 0;
  if (string === undefined) {
    return 'Por favor passe uma bebida';
  }
  const splited = string.split('');
  for (let i = 0; i < splited.length; i += 1) {
    const parsedString = parseInt(splited[i])
    if (parsedString) {
      soma += parsedString;
    }
  }
  let message = '';
  if (soma === 1) {
    message = '1 copo de água';
    return message;
  }
  return message = `${soma} copos de água`
}

module.exports = hydrate;