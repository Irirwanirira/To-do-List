/* eslint-disable new-cap */
import mockItems from '../../__mocks__/saveLocalStorage.js';
import mockItemsTest from '../mockedFunctions.js';

describe('Test for Task Addition', () => {
  const testItems = new mockItemsTest('task123', 1, false);
  const testItems2 = new mockItemsTest('task23', 2, false);
  test('add items to list', () => {
    expect(mockItemsTest.addTask(testItems.getItem()).length).toBe(mockItems.length);
    expect(mockItemsTest.addTask(testItems2.getItem()).length).toBe(mockItems.length);
  });
});

describe('Test for Task Deletion', () => {
  test('delete items to list', () => {
    expect(mockItemsTest.deleteTask(0).length).toBe(mockItems.length);
    expect(mockItemsTest.deleteTask(1).length).toBe(mockItems.length);
  });
});