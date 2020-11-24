import React, { useContext } from 'react'
import { Button} from "@gnosis.pm/safe-react-components"
import { GlobalState } from 'GlobalState'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Row {
    pool: string;
    totalReturn: string;
    fees: string;
}

const createRow: (pool: string, totalReturn: string, fees: string) => Row = (pool, totalReturn, fees) => {
    return { pool, totalReturn, fees }
}

const SelectFund: React.FC = () => { 
    const [state, setState] = useContext(GlobalState)

    

    const headerCells = [{

    }]

    const rows = [
        createRow('Convex Strategies', '34.5', '20')
    ]

    return (
        <div>
            <TableContainer> 
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pool</TableCell>
                            <TableCell align="right">Return</TableCell>
                            <TableCell align="right">Fees</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.pool}>
                                <TableCell component="th" scope="row">
                                    {row.pool}
                                </TableCell>
                                <TableCell align="right">{`${row.totalReturn} %`}</TableCell>
                                <TableCell align="right">{row.fees}</TableCell>
                                <TableCell align="right">
                                    <Button 
                                        size = "md" 
                                        color = "secondary"
                                        onClick = {() => setState({ ...state, activeStep: 1 })}
                                    >
                                        Select
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SelectFund;
