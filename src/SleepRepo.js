class SleepRepo {
  constructor(allUsersSleepData) {
    this.allUsersSleepData = allUsersSleepData;
  }

  getSleepQualityByDate(userId, date) {
    return this.allUsersSleepData.find(sleep => sleep.UserID === userId && sleep.date === date )
  }

}

export default SleepRepo;