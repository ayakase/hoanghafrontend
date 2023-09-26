<template>
    <div class="login-container">
        <h3> Đăng nhập</h3>
        <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
        </div>

        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
            <div class="col">
                <!-- Simple link -->
                <a href="">Forgot password?</a>
            </div>
        </div>

        <!-- Submit button -->
        <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

        <!-- Register buttons -->

    </div>
</template>

<script>
</script>

<style scoped>
.login-container {
    width: 30%;
    margin: auto;
    padding: auto;
    margin-top: 2rem;
}
</style>