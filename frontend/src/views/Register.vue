<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow animate__animated animate__fadeIn">
          <div class="card-header bg-primary text-white">
            <h3 class="card-title mb-0">注册</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="username" class="form-label">
                  <i class="bi bi-person-fill me-2"></i>用户名
                </label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="请输入用户名"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  <i class="bi bi-lock-fill me-2"></i>密码
                </label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="请输入密码"
                  required
                />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">
                  <i class="bi bi-person-plus-fill me-2"></i>注册
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            <small class="text-muted">
              已有账号？
              <router-link to="/login" class="text-decoration-none">立即登录</router-link>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// 在顶部添加 axios 导入
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('/auth/register', {
          username: this.username,
          password: this.password
        });

        if (response.data.success) {
          this.$router.push('/login');
          // 如果使用 toast 插件，请确保已安装并配置
          this.$toast?.success('注册成功，请登录');
        } else {
          this.$toast?.error(response.data.message || '注册失败');
        }
      } catch (error) {
        // 添加更详细的错误处理
        const errorMsg = error.response?.data?.message || '注册过程中出现错误';
        this.$toast?.error(errorMsg);
        console.error('注册错误:', error);
      }
    }
  }
};
</script>
