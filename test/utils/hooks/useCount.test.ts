import { renderHook, act } from "@testing-library/react-hooks";
import useCount from "utils/hooks/useCount";

describe("useCount", () => {
  it("should initialize a count value", () => {
    const { result } = renderHook(() => useCount(30));
    const { count } = result.current;
    expect(count).toBe(30);
  });

  it("should increase by the provided amount", () => {
    const { result } = renderHook(() => useCount(1));
    const { increase } = result.current;
    act(() => increase(3));
    const { count } = result.current;
    expect(count).toBe(4);
  });

  it("should increase by the provided amount", () => {
    const { result } = renderHook(() => useCount(10));
    const { decrease } = result.current;
    act(() => decrease(3));
    const { count } = result.current;
    expect(count).toBe(7);
  });
});
