import Table from './Table'

export default function SortableTable({props}) {

    const {config} = props
    const updatedConfig = config.map((column)=> {

        const handleClick = (label) => {
            console.log(label)
        }

        if(!column.sortValue) {
            return column
        }

        return {
            ...column,
            header: () => <th onClick={()=> handleClick(column.label)}>{column.label} IS SORTABLE</th>
        }
    })

    return(
        <Table {...props} config={updatedConfig}/>
    )
}