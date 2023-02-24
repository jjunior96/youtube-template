import { act, renderHook } from '@testing-library/react';

import { useTimer } from './useTimer';

describe('useTimer', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useTimer());

    expect(result.current.time).toEqual(60);
  });

  it('should to begin with time passed from props', () => {
    const initialTime = 20;

    const { result } = renderHook(() => useTimer(initialTime));

    expect(result.current.time).toEqual(initialTime);
  });

  it('should to reset time when handleReset was called', async () => {
    const { result } = renderHook(() => useTimer());

    act(() => result.current.handleReset());

    expect(result.current.time).toEqual(0);
  });

  // Os testes até aqui ja cobrem 100%, porém, esse caso de uso não esta
  // coberto, e o coverage não nos diz isso.
  it('should to begin with default time when number negative was passed from props', () => {
    const { result } = renderHook(() => useTimer(-1));

    expect(result.current.time).toEqual(60);
  });
});
