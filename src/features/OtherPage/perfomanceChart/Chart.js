import React, { useEffect } from 'react';
// import ReactChartist from 'react-chartist';
// import Chartist from 'chartist';
import MaterialTable from 'material-table';
import ReactApexChart from 'react-apexcharts';
import Header from '../../../components/header/headerContainer';
import styles from './stylesheets/perfomanceChart.module.sass';

export default function Chart(props) {
  console.log('propos', props);

  const { orders, avale } = props;

  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id', editable: 'never' },
      { title: 'Title', field: 'title', editable: 'never' },
      { title: 'Color', field: 'color', editable: 'never' },
      {
        title: 'Size',
        field: 'size',
        editable: 'never',
      },
      {
        title: 'Quantity',
        field: 'quantity',
        type: 'numeric',
        editable: 'onUpdate',
      },
    ],
    data: [{ id: '', title: '', color: '', size: '', quantity: 0 }],
  });
  console.log('state', state);

  const dataStock = {
    series: [
      {
        name: 'Dollars $',
        data: orders
          ? [
              orders.find(x => x.mnth === 1)
                ? orders.find(x => x.mnth === 1).tSum
                : 0,
              orders.find(x => x.mnth === 2)
                ? orders.find(x => x.mnth === 2).tSum
                : 0,
              orders.find(x => x.mnth === 3)
                ? orders.find(x => x.mnth === 3).tSum
                : 0,
              orders.find(x => x.mnth === 4)
                ? orders.find(x => x.mnth === 4).tSum
                : 0,
              orders.find(x => x.mnth === 5)
                ? orders.find(x => x.mnth === 5).tSum
                : 0,
              orders.find(x => x.mnth === 6)
                ? orders.find(x => x.mnth === 6).tSum
                : 0,
              orders.find(x => x.mnth === 7)
                ? orders.find(x => x.mnth === 7).tSum
                : 0,
              orders.find(x => x.mnth === 8)
                ? orders.find(x => x.mnth === 8).tSum
                : 0,
              orders.find(x => x.mnth === 9)
                ? orders.find(x => x.mnth === 9).tSum
                : 0,
              orders.find(x => x.mnth === 10)
                ? orders.find(x => x.mnth === 10).tSum
                : 0,
              orders.find(x => x.mnth === 11)
                ? orders.find(x => x.mnth === 11).tSum
                : 0,
              orders.find(x => x.mnth === 12)
                ? orders.find(x => x.mnth === 12).tSum
                : 0,
            ]
          : [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: '2020 Product sales revenue ($)',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
  };

  useEffect(() => {
    if (avale) {
      setState(prevState => {
        const data = avale;
        return { ...prevState, data };
      });
    }
  }, [avale]);

  return (
    <div className={styles.outbox}>
      <Header />
      <div className={styles.content}>
        <div
          className={styles.box}
          style={{
            display: 'block',
            // maxWidth: 'fit-content',
            position: 'sticky',
            zIndex: 1,
          }}
        >
          <div id="chart">
            <ReactApexChart
              options={dataStock.options}
              series={dataStock.series}
              type="line"
              height={350}
              // width={orders ? null : 700}
            />
          </div>

          <div className={styles.tableCustom}>
            <MaterialTable
              style={{
                display: 'block',
                // maxWidth: 'fit-content',
                position: 'sticky',
                zIndex: 1,
              }}
              title="Current Products"
              columns={state.columns}
              data={state.data}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        console.log(newData);
                        const body = {
                          ...newData,
                          quantity: Number(newData.quantity),
                        };
                        props.sendAvale(body);
                        // setState(prevState => {
                        //   const data = [...prevState.data];
                        //   data[data.indexOf(oldData)] = newData;
                        //   return { ...prevState, data };
                        // });
                      }
                    }, 600);
                  }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
