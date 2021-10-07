import { times } from "ramda";
import moment from "moment";

export function makeUsers(count: number) {
  return times((i) => {
    return {
      username: `user_${i}`,
      // between 13 and 25
      birthdate: makeRandomDate().format(),
    };
  }, count);
}

function makeRandomDate() {
  const years = getRandomArbitrary(13, 25);
  const milisecondsInYear = 1000 * 60 * 60 * 24 * 365;
  const now = moment().unix() * 1000;
  const resultData = now - years * milisecondsInYear;

  return moment.unix(resultData / 1000);
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
