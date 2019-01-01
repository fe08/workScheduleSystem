<template>
  <div>
    <!--admin page-->
    <!--<hr>-->
    <!--<svg class="icon" aria-hidden="true">-->
      <!--<use xlink:href="#icon-jiaoseguanli"></use>-->
    <!--</svg>-->

    <div class="wss-page-header">
      <h2>科室排班</h2>
      <div>{{ip}}</div>
      <div>
        <el-button type="primary" @click="fetchSomething">testAxios</el-button>
        <el-button type="primary" @click="fetchTestMock">fetchTestMock</el-button>
        <el-button type="primary" @click="fetchTestPost">fetchTestPost</el-button>
      </div>
    </div>

    <div class="wss-date-selector">
      <div class="block">
        <span class="demonstration">请选择日期</span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      {{value2}}
    </div>

    <div class="wss-form-box">
      <el-table
        :data="tableData3"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column label="配送信息">
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column label="地址">
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>

<script>
  export default {
    layout: 'tablePage',
    data() {
      return {
        ip: '',
        msg: "",
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: '',

        // 表格数据
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },

    methods: {
      async fetchSomething() {
        const ip = await this.$axios.$get('http://icanhazip.com')
        this.ip = ip
      },

      async fetchTestMock() {
        const params = {
          id: 233
        }
        const data = await this.$axios.$get('http://rap2api.taobao.org/app/mock/117899/testAxios')
        console.log('rap2-->', data)
      },

      async fetchTestPost() {
        const params = {
          id: 4766
        }
        const data = await this.$axios.$post('http://rap2api.taobao.org/app/mock/117899/testPost', params)
        console.log('rap2, post-->', data.data, typeof data.data)
      }
    },

    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://icanhazip.com')
      // const ip = await $axios.$get('/api/test_mock')
      console.log('ip-->', ip)
      return { ip }
    }
  }


</script>

<style scoped>

</style>
