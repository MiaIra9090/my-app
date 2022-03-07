import { padTo2Digits } from "utils/Date";

describe("Utils should work correct", () => {
  const cases = [
    {
      parameter: 1,
      expected: "01",
    },
    {
      parameter: 12,
      expected: "12",
    },
    {
      parameter: 122,
      expected: "122",
    },
    {
      parameter: 0,
      expected: "00",
    },
  ];

  it.each(cases)(
    "padTo2Digits should work correct with %p",
    ({ parameter, expected }) => {
      expect(padTo2Digits(parameter)).toBe(expected);
    }
  );
});
