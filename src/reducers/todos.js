let initialData = [
    {
        text: 'сходить на работу',
        time: new Date(),
        done: 0
    }, {
        text: 'заплатить за квартиру',
        time: new Date(),
        done: 0
    }
];

const todos = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    time: new Date(),
                    done: 0
                }
            ];
        case 'COMPLETE_TODO':
            return state.map(todo => {
                if (todo.text === action.todo.text) {
                    const beginTime= todo.time.getTime();
                    const endTime = new Date().getTime();
                    const result = (endTime - beginTime) / 1000;
                    return Object.assign({}, todo, {
                        done: 1,
                        estimated: `${result} sec`
                    });
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default todos;
