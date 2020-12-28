// import React, { useEffect, useState } from 'react';
import styles from './chart.module.css'
import Chart from "react-google-charts";

const ChartLib = ({title, workout, date}) => {


  // useEffect(()=>{
  //   console.log(workout)
  //   console.log(date)
  // },[])

  // const asdf = workout.filter(value => {
  //   return value.date === date[0]
  // })

  // const [test, settest] = useState([])

  // useEffect(()=>{
  //   for(let i=0; i<date.length; i++){
  //     let asdf = workout.filter(value => {
  //       return value.date === date[i]        
  //     })
  //     settest([...test, [asdf]])
  //   }
  // },[])

  // for(let i=0; i<date.length; i++){
  //   workout.filter(value => {
  //     settest(value.date === date[i])
  //   })
  // }


  return(
    <div className={styles.main}>
      <Chart
        className={styles.chart}
        height={'800px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['x', 'Wieght', 'Volume / 10'],
          [0, 100, 100],
          [1, 110, 110],
          [2, 110, 150],
          [3, 120, 200],
          [4, 130, 200],
          [5, 130, 220],
          [6, 135, 220],
          [7, 140, 250],
          [8, 140, 180],
          [9, 140, 190],
          [10, 140, 220]
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