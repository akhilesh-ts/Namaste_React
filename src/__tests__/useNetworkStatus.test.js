import { renderHook } from "@testing-library/react";
import useNetworkStatus from "../utils/useNetworkStatus";
it("should check the network status", () => {
  const { result } = renderHook(useNetworkStatus);
 

  expect(result.current).toBe(true);
});
