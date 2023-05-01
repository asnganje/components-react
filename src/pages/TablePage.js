import SortableTable from "../components/SortableTable";

export default function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Yellow', color: 'bg-yellow-300', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
    ];

    const config = [
        {label: 'Fruits',
        render: (fruit)=> fruit.name,
        SortValue: (fruit) => fruit.name
        },

        {label: 'Colour',
        render: (fruit) => <div className = {`p-3 m-2 ${fruit.color}`}></div>
        },
        {label: 'Score',
        render: (fruit) => fruit.score,
        SortValue: (fruit) => fruit.score
    }
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return (
        <div>
            <SortableTable data = {data}  config = {config} keyFn = {keyFn}/>
        </div>
    )
}