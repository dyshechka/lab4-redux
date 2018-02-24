import todos from './todos'

describe('todos reducer', () => {
    it('should handle initial state', () => {
        const newState = todos(undefined, {});
        expect(newState.length).toEqual(2);
        expect(newState[0].text).toEqual('сходить на работу');
        expect(newState[1].text).toEqual('заплатить за квартиру');
    });

    it('should handle ADD_TODO', () => {
        const newState = todos([], {
                type: 'ADD_TODO',
                text: 'сходить в магазин'
            });
        expect(newState.length).toEqual(1);
        expect(newState[0].text).toEqual('сходить в магазин');
        expect(newState[0].done).toEqual(0);
    });

    it('should handle COMPLETE_TODO', () => {
        const newState = todos([
            {
                text: 'сходить в магазин',
                time: new Date(1513062089863),
                done: 0
            }
        ], {
            type: 'COMPLETE_TODO',
            todo: {text: 'сходить в магазин'}
        });
        expect(newState.length).toEqual(1);
        expect(newState[0].text).toEqual('сходить в магазин');
        expect(newState[0].done).toEqual(1);
        expect(newState[0].estimated).not.toBeNull();
    });
});
