export default function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li>{student.name}</li>
            })}
        </ul>
    )
            }

const students = [
    {
        name: "홍길동"
    },
    {
        name: "홍길동1"
    },
    {
        name: "홍길동2"
    },
    {
        name: "홍길동3"
    },
    {
        name: "홍길동4"
    },
    {
        name: "홍길동5"
    }
]