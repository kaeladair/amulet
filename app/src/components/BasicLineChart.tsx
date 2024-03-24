import { LineChart } from '@mui/x-charts/LineChart';

interface BasicLineChartProps {
    xAxisData: number[];
    seriesData: number[];
    width?: number; // optional, provide a default value if not passed
    height?: number; // optional, provide a default value if not passed
}

export default function BasicLineChart({
    xAxisData,
    seriesData,
    width = 600, // default width if not specified
    height = 300, // default height if not specified
}: BasicLineChartProps) {
    return (
        <LineChart
            xAxis={[{ data: xAxisData }]}
            yAxis={[{ min: 0, max: 10 }]} // Ensure Y-axis is always from 0 to 10
            series={[{ data: seriesData }]}
            width={width}
            height={height}
            grid={{ vertical: true, horizontal: true }}
        />
    );
}
