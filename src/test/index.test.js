it('foos', () =>
  expect((`f${'o'.repeat(10)}`.match(/o/g) || []).length).toBe(10));
