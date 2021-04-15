<style scoped>
#app {
  width: 100%;
}
.center {
  width: 400px;
  margin: 15% auto 0;
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
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input placeholder="USER NAME" v-model="inputUserName" clearable>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input
            type="password"
            placeholder="PASSWORD"
            v-model="inputPassword"
            clearable
          >
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-button type="info" style="width: 100%;" @click.prevent="login"
          >LOGIN</el-button
        >
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-button
          type="primary"
          style="width: 100%; margin-top: 10px"
          @click.prevent="register"
          >REGISTER</el-button
        >
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      inputUserName: "",
      inputPassword: "",
    };
  },
  components: {},
  methods: {
    login() {
      console.log(111);
    },
    register() {
      console.log(222);
      console.log(this.$router);
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
