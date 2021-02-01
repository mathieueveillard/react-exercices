import { renderHook, act } from "@testing-library/react-hooks";
import useValidSize, { ValidSizeSettings } from ".";

describe("Test suite", function () {
  const settings: ValidSizeSettings = {
    min: 0,
    max: 9,
    defaultValue: 5,
    step: 2,
  };

  it("on init, the default value should be the one provided in the settings", function () {
    const { result } = renderHook(() => useValidSize(settings));
    expect(result.current.size).toEqual(5);
  });

  it("should increment the value by the given step", function () {
    const { result } = renderHook(() => useValidSize(settings));
    act(() => {
      result.current.bigger();
    });
    expect(result.current.size).toEqual(7);
  });

  it("should decrement the value by the given step", function () {
    const { result } = renderHook(() => useValidSize(settings));
    act(() => {
      result.current.smaller();
    });
    expect(result.current.size).toEqual(3);
  });

  it("should reset to the default value", function () {
    const { result } = renderHook(() => useValidSize(settings));
    act(() => {
      result.current.smaller();
      result.current.reset();
    });
    expect(result.current.size).toEqual(5);
  });
});
