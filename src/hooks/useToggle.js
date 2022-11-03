import { useState } from 'react';

export default function useToggle(initial) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(!value);

  return [value, toggle];
}
