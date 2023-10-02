const formatNumber = number => {
  if (typeof number === 'number') {
    return number.toLocaleString('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }
  return ''
}

export {formatNumber}
