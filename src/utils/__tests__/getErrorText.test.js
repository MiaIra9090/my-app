import { getErrorText } from "utils/Errors";

describe("Utils should work correct", () => {
  const commonError = "Произошла ошибка";
  const errors = "Запрос был отклонен. Обратитесь в службу поддержки";
  const error = "Запрос был отклонен.";
  const message = "Обратитесь в службу поддержки";

  const errorCases = [
    {
      parameter: {
        error: {
          response: {
            data: {
              data: null,
              errors: [errors],
              errors_hash: {},
              message: errors,
              message_type: "error",
            },
            status: 422,
            statusText: "",
            headers: "",
            config: {},
          },
        },
        fallbackErrorMessage: commonError,
      },
      expected: errors,
    },
    {
      parameter: {
        error: {
          response: {
            data: {
              data: null,
              error,
              errors_hash: {},
              message: errors,
              message_type: "error",
            },
            status: 422,
            statusText: "",
            headers: "",
            config: {},
          },
        },
        fallbackErrorMessage: commonError,
      },
      expected: error,
    },
    {
      parameter: {
        error: {
          response: {
            data: {
              data: null,
              errors_hash: {},
              message,
              message_type: "error",
            },
            status: 422,
            statusText: "",
            headers: "",
            config: {},
          },
        },
        fallbackErrorMessage: commonError,
      },
      expected: message,
    },
    {
      parameter: {
        error: {
          response: {
            data: {
              data: null,
              errors_hash: {},
              message_type: "error",
            },
            status: 422,
            statusText: "",
            headers: "",
            config: {},
          },
        },
        fallbackErrorMessage: commonError,
      },
      expected: commonError,
    },
  ];

  it.each(errorCases)(
    "getErrorText should work correct with %p",
    ({ parameter, expected }) => {
      expect(
        getErrorText(parameter.error, parameter.fallbackErrorMessage)
      ).toBe(expected);
    }
  );
});
