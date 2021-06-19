import { renderHook, act } from '@testing-library/react-hooks';
import { useStatusColor } from './use-status-color';

it('should increment counter', () => {
  const { result } = renderHook(() => useStatusColor())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
