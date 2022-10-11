import { addTask, removeTask } from './addRemove';

describe('Ading and Removing a function', () => {
  test('adding to do task', () => {
    expect(addTask).not.toBeNull();
  }),

  test('remove a task task', () => {
    expect(removeTask).not.toBeDefined;
  });

  test('remove a task task', () => {
    expect(removeTask.parentElement).not.toBe('');
  });
});
