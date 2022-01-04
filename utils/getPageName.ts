const getPageName = (route: string) => {
  switch (route){
    case "/":
      return "Home"
    case "/campaigns":
      return "Campaigns"
    case "/campaigns/leads":
      return "Leads"
    default: 
      return ""
  }
}

export default getPageName