import { formatDate } from "utils/Date";

describe("Utils should work correct", () => {
  const cases = [
    {
      parameter: new Date("2022-03-05T16:36:57Z"),
      expected: "05.03.2022",
    },
    {
      parameter: new Date("2021-03-05T16:36:57Z"),
      expected: "05.03.2021",
    },
    {
      parameter: new Date(null),
      expected: "01.01.1970",
    },
  ];

  it.each(cases)(
    "formatDate should work correct with %p",
    ({ parameter, expected }) => {
      expect(formatDate(parameter)).toBe(expected);
    }
  );
});
