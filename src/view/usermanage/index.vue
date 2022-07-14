<template>
  <el-table
    class="orderTable"
    :data="records.value"
    :height="store.state.tableHeight"
    stripe
    style="width: 100%"
  >
    <el-table-column align="center" prop="name" label="姓名" />
    <el-table-column align="center" prop="sex" label="性别">
      <template #default="scope">
        <div>
          {{ getSex(scope.row.sex) }}
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="phone" label="手机号" />
    <el-table-column align="center" prop="roleName" label="用户类型" />
    <el-table-column align="center" prop="trainer" label="学员类型" />
    <el-table-column align="center" prop="workplace" label="工作单位" />
    <el-table-column align="center" prop="createTime" label="创建日期" />
    <el-table-column label="操作" width="220">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="edit(scope.row)"
          >查看</el-button
        >
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-button @click="download">下载</el-button>
    <el-pagination
      v-model:currentPage="userPage.pageNo"
      v-model:page-size="userPage.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :background="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <el-dialog v-model="dialogVisible" title="用户信息" width="740px">
    <div>
      <el-form
        label-width="100px"
        :inline="true"
        :model="userInfo"
        class="demo-form-inline"
      >
        <el-form-item label="手机号">
          <el-input v-model="userInfo.phone" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="学员类型">
          <el-input v-model="userInfo.trainer" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="userInfo.name" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="工作单位">
          <el-input v-model="userInfo.workplace" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="userInfo.sex" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="部门科室">
          <el-input v-model="userInfo.department" placeholder="Approved by" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { userList } from "@/api/user";
import { useStore } from "vuex";
import { onMounted, reactive, ref } from "vue";
// import * as XLSX from "xlsx";
import { exportExcel } from "@/utils/exportExcel";
let userPage = reactive({
  pageNo: 1,
  pageSize: 10,
});
let records = reactive([]);
let userInfo = ref({
  name: "",
  phone: "",
  roleName: "",
  workplace: "",
  trainer: "",
  department: "",
});
let total = ref(0);
let dialogVisible = ref(false);
const store = useStore();
onMounted(() => {
  getUserList();
});
async function getUserList() {
  let params = {
    pageNo: userPage.pageNo,
    pageSize: userPage.pageSize,
  };
  const { results } = await userList(params);
  records.value = results.records;
  total.value = results.total;
}
function handleSizeChange() {
  getUserList();
}
function handleCurrentChange() {
  getUserList();
}
function edit(item) {
  console.log(item, "edit");
  dialogVisible.value = true;
  userInfo.value = item;
  console.log(userInfo, "userInfo");
}
function getSex(type) {
  if (type) {
    return "男";
  } else {
    return "女";
  }
}
//
function download() {
  let titleArr = [
    "id",
    "姓名",
    "性别",
    "用户类型",
    "手机号",
    "工作单位",
    "创建日期",
    "分数",
    "学员类型",
  ];
  exportExcel(records.value, "excel名称", titleArr, "sheetName");
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
