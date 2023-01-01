<template>
  <div class="app">
    <el-card>
      <el-form :inline="true" size="small" :model="formInline">
        <el-form-item label="订单编号">
          <el-input
            v-model="formInline.user"
            placeholder="输入要查询订单编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="formInline.user"
            placeholder="输入要查询手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button>删除选中</el-button>
        </el-form-item>
      </el-form>

      <el-table ref="multipleTable" border :data="tableData">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="订单编号" width="120">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="患者姓名" width="120">
        </el-table-column>
        <el-table-column prop="department" label="挂号科室"> </el-table-column>
        <el-table-column prop="further" label="是否为复诊"> </el-table-column>
        <el-table-column prop="48report" label="是否自我申报48小时核酸">
        </el-table-column>
        <el-table-column prop="nucleicAcid" label="订单操作"> </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getRegisterList } from "@/api/register";
export default {
  data() {
    return {
      // 挂号信息表格
      tableData: [],
      // 挂号信息查询表单
      formInline: {
        user: "",
        region: "",
      },
      multipleSelection: [],
      page: 1,
      size: 5,
    };
  },

  created() {
    this.getList();
  },

  methods: {
    async getList() {
      let res = await getRegisterList({ page: 1, size: 30 });
      console.log(res.data.data);
      this.tableData = res.data.data;
    },
    // 分页器
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-card {
  padding: 20px;
  ::v-deep .el-card__body,
  .el-main {
    padding: 0;
    .has-gutter {
      background-color: #f2f6fc;
    }
    .el-table tr th {
      background-color: #f2f6fc;
    }
  }

  ::v-deep .el-form-item__label {
    font-weight: 700;
  }

  ::v-deep .el-table .el-table__cell {
    padding: 4px;
  }
}
.app {
  padding-top: 20px;

  .el-pagination {
    margin-top: 20px;
  }
}
</style>
