<template>
  <el-container>
    <el-header style="text-align: right;">
      <el-template style="float: left;">
        <h1>MovieAdmin</h1>
      </el-template>
      <el-row :gutter="10">
        <el-col :span="6" :offset="18">
          <span style="margin-right: 15px;">MyPage</span>
          <span>LogOut</span>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
  <el-container>
    <el-aside width="500px">
      <Menu style="width: 500px"></Menu>
    </el-aside>
  </el-container>
</template>
<script>
import Menu from "@/components/Menu";

export default {
  data() {
    return {};
  },
  components: {
    Menu,
  },
};
</script>
<style scoped>
.el-header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
</style>
