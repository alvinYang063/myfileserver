<template>
  <div id="app">
    <div class="container" style="width:600px">
      <div style="margin: 20px">
<h2>使用 Vue 搭建文件上传 Demo</h2>
        <h5><a href="http://kalacloud.com">卡拉云</a> - 低代码开发工具，1 秒搭建上传后台</h5>
				<a>使用卡拉云无需懂任何前端技术，仅需拖拽即可搭建属于你的后台管理系统</a>
        
      </div>
      <upload-files></upload-files>
    </div>
  </div>
</template>
<script>
import UploadFiles from "./components/UploadFiles";
export default {
  name: "App",
  components: {
    UploadFiles
  }
};
</script>
