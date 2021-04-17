<template>
  <el-form style="margin: 10% auto 0">
    <el-row>
      <el-col :span="12" :offset="6">
        <h1 style="text-align: center;">REGISTER</h1>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input placeholder="USER NAME" v-model="user.userName" clearable>
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
            v-model="user.password1"
            clearable
          >
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input
            type="password"
            placeholder="PASSWORD AGAIN"
            v-model="user.password2"
            clearable
          >
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input placeholder="EMAIL" v-model="user.email" clearable>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input placeholder="FIRST NAME" v-model="user.firstName" clearable>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input placeholder="LAST NAME" v-model="user.lastName" clearable>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-date-picker v-model="user.birth" type="date" placeholder="BIRTH">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7">
        <el-form-item required>
          <el-input
            placeholder="PHONE NUMBER"
            v-model="user.phoneNumber"
            clearable
          >
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset="7" style="text-align: center;">
        <el-button type="info" @click="register">가입</el-button>
        <el-button @click="cancel">취소</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        password1: "",
        password2: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birth: "",
      },
    };
  },
  components: {},
  methods: {
    async register() {
      console.log(222);
      const params = { user: this.user };
      const { status } = await this.axios.post("users/signup", params);
      if (status === 201) {
        console.log(3333);
      }
    },
    cancel() {
      console.log(111);
    },
  },
};
</script>
