export const ValidationEmail = (str) => {
  const regex =
    /([\w-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
      str,
    )
  return regex
}

export const ValidationPassword = (str) => {
  const regex = /^[a-z0-9_-]{8,15}$/.test(str)
  return regex
}

export const ValidationMobile = (str) => {
  const regex = /01[016789][^0][0-9]{2,3}[0-9]{3,4}$/.test(str)
  return regex
}
