import { renderHook, act } from "@testing-library/react-hooks";
import { useStatusColor } from "./use-status-color";

it("should return the correct color when the status is Accepted", () => {
  const { result } = renderHook(() => useStatusColor("Accepted"));

  expect(result.current).toBe("cornflowerblue");
});

it("should return the correct color when the status is Pending", () => {
  const { result } = renderHook(() => useStatusColor("Pending"));

  expect(result.current).toBe("darkorange");
});

it("should return the correct color when the status is Rejected", () => {
  const { result } = renderHook(() => useStatusColor("Rejected"));

  expect(result.current).toBe("tomato");
});
