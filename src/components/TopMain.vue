 <template>
     <div class="head">
         <el-container>
  <el-aside width="100px">
    <el-image
      style="width: 50px; height: 50px; margin-top: 30px;"
      :src="url"
      :fit="fit"></el-image>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  
  <el-menu-item index="1">
    <i class="el-icon-s-home"> <router-link ></router-link></i>
   
  </el-menu-item>

  <el-submenu index="2">
    <template slot="title">
     <i class="el-icon-s-platform"></i>
      <span slot="title">导航二</span>
    </template>
    <el-menu-item-group class="erji">
      <span slot="title">分组一</span>
    
    </el-menu-item-group>
  </el-submenu>


 <el-submenu index="3">
    <template slot="title">
       <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
  
    </el-menu-item-group>
  </el-submenu>




 <el-submenu index="4">
    <template slot="title">
       <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
    </template>
    <el-menu-item-group >
      <span slot="title">分组一</span>
  
    </el-menu-item-group>
  </el-submenu>


</el-menu>
  </el-aside>


  
  <el-container>
    <el-header style="height:100px;">



    </el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
     </div>
 </template>


 <style>
 .el-menu-item-group__title{

 }
 *{
     margin: 0;
     padding: 0;
 }
  .el-header, .el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    height: 60px;
  }
  .head el-header{
      padding: 0 20px 100px 20px;
  }
  .el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    height: 700px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-menu{
      border: none;
      margin: 0px auto;
  }
  .el-menu-vertical-demo{
      margin-top: 20px;
  }
  .el-submenu-title{
      margin: 0;
    padding-left: -20px;
  }
  .erji{
      font-size: 13px;
  }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
           isCollapse: true,
         fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'http://www.axshare.cn/gsc/HULYQ4/cd/6a/d8/cd6ad8a7d8204f7c91fd12e554d65fb9/images/%E7%B3%BB%E7%BB%9F%E6%A1%86%E6%9E%B6/u604.jpg?token=2372084d86036e54c270f8f40fee7d5cb8a961302d970d18c02d3c1e12a4a5b5'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>