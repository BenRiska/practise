const getPageName = (route: string) => {
  switch (route){
    case "/":
      return "Home"
    case "/campaigns":
      return "Campaigns"
    case "/campaigns/leads":
      return "Leads"
    case "/statistics":
      return "Statistics"
    default: 
      return "SSGM"
  }
}

export default getPageName