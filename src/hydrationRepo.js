class HydrationRepo {
  constructor(allHydrationData) {
    this.allHydrationData = allHydrationData;
  }

  getOuncesByDate(userId, date) {
    return this.allHydrationData.find(hydration => hydration.userID === userId && hydration.date === date).numOunces;
  }
}

export default HydrationRepo;