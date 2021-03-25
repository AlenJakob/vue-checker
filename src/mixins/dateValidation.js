export const validation = {
  data() {
    return {
      serialNumStatus: "",
      year: "",
      month: "",
      monthDecimal: "",
      yearQ: 2016,
      yearR: 2017,
      yearS: 2018,
      yearT: 2019,
      yearU: 2020,
      yearV: 2021,
      yearW: 2022,
      yearX: 2023,
    };
  },
  methods: {
    dateValidation(date) {
      console.log(date);
      switch (date[0]) {
        case "Q":
          this.year = yearQ;
          break;
        case "R":
          this.year = yearR;
          break;
        case "S":
          this.year = yearS;
          break;
        case "T":
          this.year = yearT;
          break;
        case "U":
          this.year = yearU;
          break;
        case "V":
          this.year = yearV;
          break;
        case "W":
          this.year = yearW;
          break;
        case "X":
          this.year = yearX;
          break;
        default:
          this.year = "Data is not Recognized";
          console.log(`Sorry, have no information about that  ${date[0]}.`);
      }

      let currentMonth = date ? date[1].toUpperCase() : "";
      let entries = Object.entries(months);
      entries.forEach(([key, val], index) => {
        if (currentMonth == key.toUpperCase()) {
          this.month = val;
          this.monthDecimal = index + 1;
        } else {
          //  if month are not correct view a message
          // console.log("Year is not recognized");
          return;
        }
      });

      let currFromProd = this.checkFromProduction(
        new Date(this.year, this.monthDecimal),
        new Date()
      );

      if (currFromProd > 30) {
        this.serialNumStatus = "has-text-danger";
      } else if (currFromProd < 30) {
        this.serialNumStatus = "has-text-success";
      }

      return this.serialNumStatus;
    },
    checkFromProduction(dateFrom, dateTo) {
      const countedMonth =
        dateTo.getMonth() -
        dateFrom.getMonth() +
        12 * (dateTo.getFullYear() - dateFrom.getFullYear());
      if (dateFrom.getFullYear() > dateTo.getFullYear()) {
        return `is false year `;
      } else if (countedMonth < 0) {
        return 0;
      } else {
        return countedMonth;
      }
    },
  },
};
