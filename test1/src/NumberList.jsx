export default function NumberList(props) {
    //const { numbers } = props
    const numbers = [1, 2, 3, 4, 5]

    const todoLists = [
        {
            id: 1,
            todo: "할일1"
        },
        {
            id: 2,
            todo: "할일2"
        },
        {
            id: 3,
            todo: "할일3"
        },
        {
            id: 4,
            todo: "할일4"
        },
        {
            id: 5,
            todo: "할일5"
        }
    ]
    const listItems = numbers.map((number, index) =>
    <li key={index}>{number}</li>
    )

    const itemLists = todoList.map(todoList =>
    <li key={todoList.id}>{TodoList.todo}</li>
    )
    
    const foos = todoList.map((foo,index) =>
        <li key={index}>{foo.todo}</li>
    )
    return (
        <>
        <ul>{listItems}</ul>
        <ul>{itemLists}</ul>
        <ul>{foos}</ul>
        </>
    )
}