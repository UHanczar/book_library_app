import store from '../../src/store';

describe('application store tests', () => {
  it('should be defined', () => {
    expect(store).toBeDefined();
  });

  it('should have proper amount of reducers', () => {
    expect(Object.keys(store.getState()).length).toBe(7);
  });
});
