import styles from './chart.module.css'
import Chart from "react-google-charts";

const ChartLib = ({title, workout, date}) => {


  // console.log(date)
  // console.log(workout)

  // const asdf = Object.keys(workout).map(key => workout[key].date)
  // console.log(asdf)

  return(
    <div className={styles.main}>
      <Chart
        className={styles.chart}
        height={'800px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['date', 'Weight', 'Volume / 10'],
          [`12-10`, 100, 100],
          [`12-15`, 110, 110],
          [`12-20`, 110, 130],
          [`12-22`, 120, 140],
          [`12-25`, 120, 145],
          [`12-26`, 120, 150],
          [`12-27`, 125, 150],
          [`12-28`, 130, 145]
        ]}
        options={{
          backgroundColor: 'white',
          hAxis: {
            title: title,
          },
          vAxis: {
            title: 'WEIGHT (KG)',
          },
          series: {
            1: { curveType: 'function' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  )};
export default ChartLib;