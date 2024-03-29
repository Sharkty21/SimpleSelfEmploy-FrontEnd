import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

const LineGraph = (props: { data: any; xAxisDataKey: string; dataKey: string; }) => {
    const { data, xAxisDataKey, dataKey } = props;
    return (
        <ResponsiveContainer width="80%" height={350}>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxisDataKey}/>
                <YAxis/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={dataKey} legendType="none" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraph