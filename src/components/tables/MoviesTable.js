import { Table } from 'antd';
import React from 'react';

import { formatDate, formatNumberWithCommas } from '../../utils/utils';
import { useWindowSize } from '../../hooks/useWindowResize';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: 'Fecha de estreno',
    dataIndex: 'date',
    render: date => formatDate(new Date(date)),
    width: 100,
  },
  {
    title: 'Duración (minutos)',
    dataIndex: 'duration',
    width: 100,
  },
  {
    title: 'Presupuesto ($)',
    dataIndex: 'budget',
    render: budget => formatNumberWithCommas(budget),
    width: 100,
  },
];

const paginationConfig = {
  pageSize: 20,
  position: ['bottomCenter'],
};

const customLocale = {
  emptyText: 'No se encontraron datos',
};

export const MoviesTable = ({ movies }) => {
  const windowSize = useWindowSize();

  const scrollConfig = {
    x: 'max-content',
    y: windowSize.height - 375,
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table
        columns={columns}
        dataSource={movies}
        rowKey='id'
        size='middle'
        bordered={true}
        pagination={paginationConfig}
        scroll={scrollConfig}
        locale={customLocale}
      />
    </div>
  );
};
