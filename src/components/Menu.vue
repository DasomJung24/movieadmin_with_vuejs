<template>
  <el-col :span="12">
    <el-menu
      default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height: 870px;"
      router
    >
      <el-submenu index="1">
        <template v-slot:title>사용자 관리</template>
        <el-menu-item index="1-1">일반 회원</el-menu-item>
        <el-menu-item index="1-2">탈퇴 회원</el-menu-item>
        <el-menu-item index="1-1">관리자</el-menu-item>
      </el-submenu>
      <el-submenu index="11">
        <template v-slot:title>영화 관리</template>
        <el-menu-item index="/movies/create">영화 등록</el-menu-item>
        <el-menu-item index="/movies">영화 목록</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    activeMenu: function() {
      const path = this.$route.path.split("/").filter(function(el) {
        return el;
      });
      const reg = /[1-9]/;
      if (reg.exec(path[path.length - 1])) {
        path.pop();
      }
      return "/" + path.join("/");
    },
  },
};
</script>
