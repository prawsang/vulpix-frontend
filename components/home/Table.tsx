import Table from 'components/common/Table'
import { tableWithCategory } from 'utils/tableColumns'

const HomeTable = ({ data }) => {
  return <Table columns={tableWithCategory} rows={data} />
}

export default HomeTable
