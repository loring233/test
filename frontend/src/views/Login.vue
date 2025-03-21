<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow animate__animated animate__fadeInDown" style="width: 100%; max-width: 400px;">
      <h2 class="text-center mb-4">登录</h2>
      <form @submit.prevent="handleLogin">
        <!-- 邮箱输入框 -->
        <div class="mb-3">
          <label for="email" class="form-label">邮箱</label>
          <div class="input-group">
            <span class="input-group-text"><i class="bi bi-envelope"></i></span>
            <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="请输入邮箱"
                required
            />
          </div>
        </div>

        <!-- 密码输入框 -->
        <div class="mb-3">
          <label for="password" class="form-label">密码</label>
          <div class="input-group">
            <span class="input-group-text"><i class="bi bi-lock"></i></span>
            <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="请输入密码"
                required
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary w-100">登录</button>
      </form>
      <div class="mt-3 text-center">
        <p>还没有账号？<router-link to="/register">注册</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/api/auth/login', {
          email: this.email,
          password: this.password,
        });
        const token = response.data.token;
        localStorage.setItem('token', token); // 存储 token
        this.$router.push('/'); // 跳转到首页
      } catch (error) {
        alert('登录失败，请检查邮箱和密码');
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
}

.card {
  border: none;
  border-radius: 10px;
}

.btn-primary {
  background-color: #6a11cb;
  border: none;
}

.btn-primary:hover {
  background-color: #2575fc;
}

a {
  color: #6a11cb;
  text-decoration: none;
}

a:hover {
  color: #2575fc;
}
</style>