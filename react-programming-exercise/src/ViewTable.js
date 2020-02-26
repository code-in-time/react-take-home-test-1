import React from 'react'
import { useTable } from 'react-table'

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function ViewTable(props) {
  const columns = React.useMemo(
    () => [
          {
            Header: 'id',
            accessor: 'id',
          },
          {
            Header: 'box_id',
            accessor: 'box_id',
          },
          {
            Header: 'sensor_type',
            accessor: 'sensor_type',
          },
          {
            Header: 'range_l',
            accessor: 'range_l',
          },
          {
            Header: 'range_u',
            accessor: 'range_u',
          },
          {
            Header: 'longitude',
            accessor: 'longitude',
          },
          {
            Header: 'latitude',
            accessor: 'latitude',
          },
          {
            Header: 'reading',
            accessor: 'reading',
          },
          {
            Header: 'unit',
            accessor: 'unit',
          },
          {
            Header: 'reading_ts',
            accessor: 'reading_ts',
          },
    ],
    []
  )

  const data = React.useMemo(() => props.data )

  return (
      <Table columns={columns} data={data} />
  )
}

export default ViewTable
