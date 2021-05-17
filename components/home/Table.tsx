import Table from 'components/common/Table'
import { tableWithCategory } from 'utils/tableColumns'

const HomeTable = ({ data }) => {
  return <Table width="100%" columns={tableWithCategory} rows={data} />
}

export default HomeTable
