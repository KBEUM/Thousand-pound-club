import React, { useEffect, useState } from 'react';
import styles from './chartLib.module.css'
import Chart from "react-google-charts";

const ChartLib = ({title, workout, date}) => {

  // console.log(workout)
  // console.log(date)

  // const asdf = workout.filter(value => {
  //   return value.date === date[0]
  // })

  const [test, settest] = useState([])

  useEffect(()=>{
    for(let i=0; i<date.length; i++){
      let asdf = workout.filter(value => {
        return value.date === date[i]        
      })
      // const temp = [...test, asdf]
      settest([...test, [asdf]])
    }
  },[])

  // for(let i=0; i<date.length; i++){
  //   workout.filter(value => {
  //     settest(value.date === date[i])
  //   })
  // }

  console.log(test)

  // workout.map(data => {
  //   for(let i =0; i)
  // })

  const [info, setInfo] = useState()

  useEffect(()=>{
  },[workout])


  return(
    <div className={styles.main}>
      <Chart
        className={styles.chart}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['x', 'Wieght', 'Volume / 10'],
          [0, 0, 0],
          [1, 10, 5],
          [2, 23, 15],
          [3, 17, 9],
          [4, 18, 10],
          [5, 9, 5],
          [6, 11, 3],
          [7, 27, 19],
          [8, 27, 19],
          [9, 27, 19],
          [10, 27, 19],
          [11, 27, 19],
          [12, 27, 19],
          [13, 27, 19],
          [14, 27, 19],
          [15, 27, 19],
          [16, 27, 19],
          [17, 27, 19],
          [18, 27, 19],
          [19, 27, 19],
          [20, 27, 19],
          [21, 27, 19],
          [22, 27, 19],
          [23, 27, 19],
          [25, 27, 195],
          [28, 27, 119],
          [30, 27, 139],
          [31, 27, 219],
          [32, 27, 193],
          [33, 27, 109],
          [34, 27, 129],
          [40, 27, 119],
        ]}
        options={{
          backgroundColor: '#f1f8e9',
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