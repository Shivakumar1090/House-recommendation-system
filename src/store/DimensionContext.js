import { createContext, useState } from 'react';

export const DimensionContext = createContext();

export const DimensionContextProvider = (props) => {
    const [rows, setRows] = useState();
    const [cols, setCols] = useState();
    const [layout, setLayout] = useState([]);
    const [rowIdx, setRowIdx] = useState();
    const [colIdx, setColIdx] = useState();
    const [status, setStatus] = useState(false);
    const [result, setResult] = useState({});
    const [inst, setInst] = useState(false);

    const updateInst = () => {
        setInst(!inst);
    }

    const updateResult = (val) => {
        setResult(val);
    }
    const updateStatus = () => {
        setStatus(!status);
    }
    const updateRow = (val) => {
        setRows(val);
    }
    const updateCol = (val) => {
        setCols(val);
    }
    const updateRowIdx = (val) => {
        setRowIdx(val);
    }
    const updateColIdx = (val) => {
        setColIdx(val);
    }
    const createLayout = () => {
        let newLayout = new Array(rows);
        for (let i = 0; i < rows; i++) {
            newLayout[i] = new Array(cols);
            for (let j = 0; j < cols; j++) {
                newLayout[i][j] = -1;
            }
        }
        setLayout(newLayout);
    }
    const updateVal = (val) => {
        let newLayout = [...layout];
        newLayout[rowIdx][colIdx] = val;
        setLayout(newLayout);
        setStatus(!status);
    }
    return <DimensionContext.Provider value={{ layout, rows, cols, status, result, inst, updateInst, updateResult, updateStatus, updateRow, updateCol, createLayout, updateVal, updateRowIdx, updateColIdx }}>
        {props.children}
    </DimensionContext.Provider>
}