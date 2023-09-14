import {encode as base64Encode} from 'base-64'

const fetchBalance = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'http://192.168.64.140/apimobile/hs/mobile/balance',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalance')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchReceipts = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'http://192.168.64.140/apimobile/hs/mobile/receipts',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalance')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchConsumption = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'http://192.168.64.140/apimobile/hs/mobile/consumption',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchConsumption')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchSales = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'http://192.168.64.140/apimobile/hs/mobile/sales',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchSales')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export {fetchBalance, fetchReceipts, fetchConsumption, fetchSales}
