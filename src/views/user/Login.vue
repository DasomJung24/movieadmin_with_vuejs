<style scoped>
#app {
  width: 100%;
}
.center {
  width: 400px;
  margin: 20% auto 0;
}
</style>
<template>
  <el-form class="center">
    <el-row>
      <el-col :span="12" :offset="6">
        <h1 style="text-align: center;">ADMIN LOGIN</h1>
        <p style="color: grey; text-align: center;">YOU NEED ATHORIZATION</p>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form-item required>
          <el-input placeholder="EMAIL" v-model="input" clearable> </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form-item required>
          <el-input placeholder="PASSWORD" v-model="input" clearable>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-button type="info" style="width: 100%;">LOGIN</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {},
};
</script>
