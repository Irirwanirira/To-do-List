/* eslint-disable new-cap */
import mockItems from '../../__mocks__/saveLocalStorage.js';
import mockItemsTest from '../mockedFunctions.js';

const clearTaskStaus = new mockItemsTest('task1', 1, false);
const EditTask1 = new mockItemsTest('task111', 0, false);
const EditTask2 = new mockItemsTest('task222', 1, false);
const UpdateCompleteStatus1 = new mockItemsTest('task3', 0, false);
const UpdateCompleteStatus2 = new mockItemsTest('task4', 2, false);

describe('Test for Task Edit, Update, and Clear Complete Status', () => {
  test('Test for Clear All Completed Tasks', () => {
    expect(clearTaskStaus.clearCompTask(mockItems).length).toBe(1);
  });

  test('Test for Edit Task', () => {
    expect(EditTask1.EditTest()).toEqual(mockItems[0]);
    expect(EditTask2.EditTest()).toEqual(mockItems[1]);
  });

  test('Test for Update Complete Task status', () => {
    expect(UpdateCompleteStatus1.IsStatusUpdate()).toEqual(mockItems[0].completed);
    expect(UpdateCompleteStatus2.IsStatusUpdate()).toEqual(mockItems[2].completed);
  });
});