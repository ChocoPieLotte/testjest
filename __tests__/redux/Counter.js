import ActionTypes from '../../src/redux/constants';
import { increment, decrement} from '../../src/redux/actions/counter';
import CounterReducer, { initialState } from '../../src/redux/reducers/counter';
describe('redux counter', () => {
  describe('actions', () => {
    it('increment', () => {
      const expectedAction = {
        type: ActionTypes.INCREMENT
      };
      expect(increment()).toEqual(expectedAction);
    });

    it('decrement', () => {
      const expectedAction = {
        type: ActionTypes.DECREMENT
      };
      expect(decrement()).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(CounterReducer(undefined, undefined)).toEqual(initialState);
    });


    it('should handle INCREMENT', () => {
      expect(
        CounterReducer(
          initialState,
          {
            type: ActionTypes.INCREMENT,
          }
        )
      ).toEqual({ ...initialState,  count: initialState.count + 1 });
    });

    it('should handle DECREMENT', () => {
      expect(
        CounterReducer(
          initialState,
          {
            type: ActionTypes.DECREMENT,
          }
        )
      ).toEqual({ ...initialState,  count: initialState.count - 1 });
    })
  });
});