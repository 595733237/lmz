<template id="111">
	<div class="el-card__body">
		<el-row :gutter="24">
			<el-col :span="20" :offset="2">
				<div class="table">
					<el-table
			    :data="tableData"
			    style="width: 100%;"
			     max-height="500">
			    	<el-table-column
			      	type="selection"
			      	width="55"
			      	label="全选">
				    </el-table-column>
				    <el-table-column
				      prop="Questionnaire"
				      label="问卷名称">
				    </el-table-column>
				    <el-table-column
				      prop="f_date"
				      label="发布日期"
				      width="250">
				    </el-table-column>
				    <el-table-column
				      prop="l_date"
				      label="结束日期"
				      width="250">
				    </el-table-column>
				    <el-table-column 
				    	label="问卷状态"
				    	width="200">
		                <template scope="tableData">
		                    <span v-if="tableData.state=== 1">未发布</span>
		                    <span v-else style="color: red">已结束</span>
		                </template>
        		</el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="200">
				      <template slot-scope="scope">
				        <el-button type="text" size="middle"><i class="el-icon-edit"></i>编辑</el-button>
				        <el-button @click="handleClick(scope.row)" type="text" size="middle"><i class="el-icon-view">查看</i></el-button>
				        <el-button @click="handleClick(scope.row)" type="text" size="middle"><i class="el-icon-delete">删除</i></el-button>
				      </template>
					</el-table-column>
					<el-table-column
						align="right"
						fixed="right"
  						:render-header="renderHeader"
  						width="200">
					</el-table-column>
				</el-table>
				</div>
			</el-col>
	</el-row>
	</div>  
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      renderHeader(h) {
         return (
            <div>
                <router-link to="/about" class="btn_w btn btn-warning"><i class="el-icon-plus"></i> 新建表格</router-link>
	            <div>
	        		<router-view></router-view>
	    		</div>
             </div>
         )
    }
    },
    data() {
      return {
        tableData: [{
        	Questionnaire: '创新创业现状调查',
          	f_date: '2018-9-24',
          	l_date: '2018-10-24',
          	state: '1'	
        },
        {
        	Questionnaire: '创新创业现状调查',
          	f_date: '2018-9-24',
          	l_date: '2018-10-24',
        },
        {
        	Questionnaire: '创新创业现状调查',
          	f_date: '2018-9-24',
          	l_date: '2018-10-24',
        },
        {
        	Questionnaire: '创新创业现状调查',
          	f_date: '2018-9-24',
          	l_date: '2018-10-24',
        },
        {
        	Questionnaire: '创新创业现状调查',
          	f_date: '2018-9-24',
          	l_date: '2018-10-24',
        },
        {
        	Questionnaire: '创新创业现状调查',
          	f_date: '2018-9-24',
          	l_date: '2018-10-24',
        },
        
        ]
      }
    }
  }
</script>
<style type="text/css">
	.el-card__body{
		background: #EFEFEF;
	}
	.table{
		box-shadow: 5px 5px 5px #888888;	
	}
	.table th{
		background:#EFEFEF;
		font-size:16px;
		font-weight: 600;
		color: black;
	}
	.btn_w{
		background: #EE7419!important;
		color: #FFFFFF!important;
	}
	
	
</style>