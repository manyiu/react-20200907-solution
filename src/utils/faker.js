import faker from "faker";

const videosDetails = (count) => {
  const items = [];

  const formatSecond = (seconds) => {
    const hour = Math.floor(seconds / (60 * 60));
    const minute = Math.floor((seconds % (60 * 60)) / 60);
    const second = Math.floor((seconds % (60 * 60)) % 60);

    const hourStr = hour > 0 ? hour + ":" : "";
    const minuteStr =
      minute > 0
        ? minute < 10 && hour > 0
          ? "0" + minute + ":"
          : minute + ":"
        : "00:";
    const secondStr = second > 0 ? (second < 10 ? "0" + second : second) : "00";
    return hourStr + minuteStr + secondStr;
  };

  for (let i = 0; i < count; i++) {
    items.push({
      id: faker.random.uuid(),
      title: faker.lorem.sentence(),
      thumbnail: `${faker.image.image()}?random=${faker.random.number()}`,
      length: formatSecond(
        faker.random.number({
          min: 1,
          max: 60 * 60 * 3,
        })
      ),
      avatar: faker.image.avatar(),
      channel: faker.commerce.productName(),
      views: faker.random.number(),
      created: +faker.date.past(),
      yellow: faker.random.boolean(),
    });
  }

  return items;
};

export default videosDetails;
