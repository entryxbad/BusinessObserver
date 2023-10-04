import {encode as base64Encode} from 'base-64'

const url = 'https://f295-92-50-180-214.ngrok-free.app/'

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
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/balance',
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
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/receipts',
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
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/consumption',
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
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/sales',
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

const fetchBalanceOrgs = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/balance?code=all',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalanceOrgs')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchReceiptsOrgs = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/receipts?code=all',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalanceOrgs')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchConsumptionOrgs = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/consumption?code=all',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalanceOrgs')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchSalesOrgs = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'https://f295-92-50-180-214.ngrok-free.app/apimobile/hs/mobile/sales?code=all',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalanceOrgs')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchLicense1 = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'https://f295-92-50-180-214.ngrok-free.app/servLic/hs/licensing/info/1',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchLicense1')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}
const fetchLicense2 = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'https://f295-92-50-180-214.ngrok-free.app/servLic/hs/licensing/info/2',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchLicense2')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

// const fetchOrgs = async () => {
//   const username = 'userApiMobile'
//   const password = '12345An'

//   const credentials = `${username}:${password}`
//   const base64Credentials = base64Encode(credentials)

//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       Authorization: `Basic ${base64Credentials}`,
//     },
//   }

//   try {
//     const response = await fetch(
//       'https://1cfresh.com/a/eac/2575653/hs/mobile/org ',
//       requestOptions,
//     )
//     if (!response.ok) {
//       throw new Error('Error from fetchBalance')
//     }
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw error
//   }
// }

export {
  fetchBalance,
  fetchReceipts,
  fetchConsumption,
  fetchSales,
  fetchBalanceOrgs,
  fetchReceiptsOrgs,
  fetchConsumptionOrgs,
  fetchSalesOrgs,
  fetchLicense1,
  fetchLicense2,
}
