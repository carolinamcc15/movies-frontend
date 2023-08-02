import { Table } from 'antd';
import React from 'react';

import { formatDate, formatNumberWithCommas } from '../../utils/utils';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'Fecha de estreno',
    dataIndex: 'date',
    render: date => formatDate(new Date(date)),
  },
  {
    title: 'Duración (minutos)',
    dataIndex: 'duration',
  },
  {
    title: 'Presupuesto ($)',
    dataIndex: 'budget',
    render: budget => formatNumberWithCommas(budget),
  },
];

export const MoviesTable = ({ movies }) => (
  <>
    <Table columns={columns} dataSource={movies} rowKey='id' size='middle' />
  </>
);
