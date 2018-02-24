import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('cходить в магазин')).toEqual({
      type: 'ADD_TODO',
      text: 'сходить в магазин'
    })
  });

    it('completeTodo should create COMPLETE_TODO action', () => {
        expect(actions.completeTodo({text: 'сходить в магазин'})).toEqual({
            type: 'COMPLETE_TODO',
            todo: {text: 'сходить в магазин'}
        })
    });

  it('editTodo should create CHANGE_TODO action', () => {
    expect(actions.editTodo('новый текст')).toEqual({
      type: 'CHANGE_TODO',
      text: 'новый текст'
    })
  });

  it('resetTodo should create RESET_TODO action', () => {
    expect(actions.resetTodo('')).toEqual({
        type: 'RESET_TODO',
        text: ''
    })
  });

  it('resetTodo should create VALIDATED action', () => {
    expect(actions.validateTodo({emptyValue: true})).toEqual({
      type: 'VALIDATED',
      result: {emptyValue: true}
    })
  });
});
