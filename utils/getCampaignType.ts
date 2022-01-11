const getCampaignType = (type: string) => {
  switch (type){
    case "DIRECT_MAIL":
      return "Mail"
    case "LEMLIST":
      return "Lemlist"
    default: 
      return "SSGM"
  }
}

export default getCampaignType