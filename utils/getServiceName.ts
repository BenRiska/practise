
const getServiceName = (name: any) => {
  switch (name) {
    case "COMPANIES_HOUSE":
      return "Companies House"
    case "LEMLIST":
      return "Lemlist"
    case "PHANTOMBUSTER":
      return "Phantom Buster"
    case "DUX_SOUP":
      return "Dux Soup"
    case "STANNP":
      return "Stannp"
    default:
      return name
  }
}

export default getServiceName