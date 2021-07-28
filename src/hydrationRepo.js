class HydrationRepo {
  constructor(allHydrationData) {
    this.allHydrationData = allHydrationData;
  }

// hydrationUserOuncesToday.innerText = hydrationData.find(hydration => {
//   return hydration.userID === user.id && hydration.date === todayDate;
// }).numOunces;

  getOuncesByDate(userId, date) {
    return this.allHydrationData.find(hydration => (hydration.userID === userId && hydration.date === date).numOunces);
  }
}