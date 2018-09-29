<template>
	<div class="card">
		<div class="card">
			<div class="card—header">
				<input type="text" class="input_t" placeholder="问卷标题" required="required"/>
			</div>
			<hr />
			<div class="card-body">
				<div class="body_content">
					<div class="block" v-for="(parent,list) in date">
						<div class="ques">
							<div class="ques_title">
								<label>Q{{list+1}} (单选题)</label>&nbsp;&nbsp;
								<input type="text" v-model="parent.title"/>
							</div>
							<div class="ques_body">
								<div v-for="child in parent.ques">
									<input type="radio" value="新的选项" name="1"/>&nbsp;&nbsp;<input type="text" v-model="child.answer"/>
									<el-button v-on:click="removeques(parent.ques,child)" type="text" size="middle"><i class="el-icon-delete"> 删除选项</i></el-button>
							 	</div>
							 	<div class="quesbtn">
							 		<el-button v-on:click="addNewques(parent.ques)" type="text" size="middle"><i class="el-icon-plus"> 添加新选项</i></el-button>
							 		<el-button v-on:click="removeBlock(parent)" type="text" size="large" style="float: right;"><i class="el-icon-delete"> 删除题目</i></el-button>
							 		<!--<el-button type="text" size="middle" style="float: right;"><i class="el-icon-arrow-up"> 上移</i></el-button>
							 		<el-button type="text" size="middle" style="float: right;"><i class="el-icon-arrow-down"> 下移</i></el-button>-->
							 	</div>
							</div>
						</div>
					</div>
					<div class="block" v-for="parent,num in checkBox">
						<div class="ques">
							<div class="ques_title">
								<label>Q{{num+1}} (多选题)</label>&nbsp;&nbsp;	
								<input type="text" v-model="parent.title"/>
							</div>
							<div class="ques_body">
								<div v-for="child in parent.ques_c">
									<input type="checkbox" value="新的选项" name="2"/>&nbsp;&nbsp;<input type="text" v-model="child.answer"/>
									<el-button v-on:click="removecheckbox(parent.ques_c,child)" type="text" size="middle"><i class="el-icon-delete"> 删除选项</i></el-button>
							 	</div>
							 	<div class="quesbtn">
							 		<el-button v-on:click="addNewcheckbox(parent.ques_c)" type="text" size="middle"><i class="el-icon-plus"> 添加新选项</i></el-button>
							 		<el-button v-on:click="removeBlock_C(parent)" type="text" size="large" style="float: right;"><i class="el-icon-delete"> 删除题目</i></el-button>
							 		<!--<el-button type="text" size="middle" style="float: right;"><i class="el-icon-arrow-up"> 上移</i></el-button>
							 		<el-button type="text" size="middle" style="float: right;"><i class="el-icon-arrow-down"> 下移</i></el-button>-->
							 	</div>
							</div>
						</div>
					</div>
					<div class="block" v-for="(list,p) in textarea">
						<div class="ques">
							<div class="ques_title">
								
								<label>Q{{p+1}}(文本题)</label>&nbsp;&nbsp;	
								<input type="text" v-model="list.title"/>
							</div>
							<div class="ques_body">
								<div class="texta">
									<textarea placeholder="请简要概述"></textarea>
							 	</div>
							 	<div class="textabtn">
							 		<!--<el-button type="text" size="middle" ><i class="el-icon-arrow-down"> 下移</i></el-button>
							 		<el-button type="text" size="middle" ><i class="el-icon-arrow-up"> 上移</i></el-button>-->
							 		<el-button v-on:click="removeBlock_t(list)" type="text" size="large" ><i class="el-icon-delete"> 删除题目</i></el-button>
							 	</div>
							</div>
						</div>
					</div>
				</div>
				<div class="body_f">
					<transition name="fade">
						<div class="body_btn" v-if="show">
							<button v-on:click="addNewBlock">单选题</button>
							<button v-on:click="addNewBlock_C">多选题</button>
							<button v-on:click="addNewBlock_t">文本题</button>
						</div>
					</transition>

					<div class="body_bottom" v-on:click="show = !show">
						<div class=" btn btn-default">
							<i class="el-icon-plus"></i> 新建问题
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div class="card-footer">
				<div class="inline-block">
					<span class="demonstration">问卷有效期&nbsp;&nbsp;&nbsp;</span>
					<el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" required="required">
					</el-date-picker>
				</div>
				<div class="inline-block r">
					<div class="btn">
						<div class="b1">
							保存问卷
						</div>
					</div>
					<div class="btn">
						<button class="b1" type="submit">发布问卷</button>
					</div>
					<div class="btn">
						<div class="b1">
							<router-link to="/">返回列表</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			date:[{
					title: '新的题目',
					ques:[{
				        id: 1,
				        answer: '新的选项'
				      },
				      {
				        id: 2,
				        answer: '新的选项'
				      },
				      {
				        id: 3,
				        answer: '新的选项'
				      }
					],
					nextId: 4
				}],
			checkBox:[{
				title: '新的题目',
				ques_c:[{
					idc: 1,
					answer: '新的选项'
				},
				{
			        idc: 2,
			        answer: '新的选项'
			    },
			    {
			        idc: 3,
			        answer: '新的选项'
			    },
			    {
			        idc: 4,
			        answer: '新的选项'
			    },
				],nextcId: 5,	
			}],
			textarea:[{
				title: '新的题目',
				
				
			}],
			show: false,
			pickerOptions2: {
				shortcuts: [{
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近三个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
			value6: ' ',
			value7: ' '
		};
	},
	methods:{
			addNewques: function (ques) {
			  	ques.push({
			  		id: ques.nextId++,
			        answer: '新的选项'
			 	})
			},
			removeques: function (ques,child) {
				let index = ques.indexOf(child);
				ques.splice(index, 1);
				ques.nextId--;
			},
			addNewBlock: function () {
			  	this.date.push({ ques:[{id:1,answer: '新的选项'},{id:2,answer: '新的选项'},{id:3,answer: '新的选项'}],nextcId: 4,title: '新的题目',
			 	})
			},
			removeBlock: function (list) {
				let index = this.date.indexOf(list);
				this.date.splice(index, 1);
			},
			
			
			addNewcheckbox: function (ques_c) {
			  	ques_c.push({
			  		idc: ques_c.nextcId++,
			        answer: '新的选项'
			 	})
			},
			removecheckbox: function (ques_c,child) {
				let index = ques_c.indexOf(child);
				ques_c.splice(index, 1);
				idc: ques_c.nextcId--;
			},
			addNewBlock_C: function () {
			  	this.checkBox.push({ ques_c:[{idc:1,answer: '新的选项'},{idc:2,answer: '新的选项'},{idc:3,answer: '新的选项'},{idc:4,answer: '新的选项'}],nextcId: 5,title: '新的题目',
			 	})
			},
			removeBlock_C: function (num) {
				let index = this.checkBox.indexOf(num);
				console.log(index)
				this.checkBox.splice(index, 1);
			},
			addNewBlock_t: function () {
			  	this.textarea.push({ 
			  		title: '新的题目',
			 	})

			},
			removeBlock_t: function (t) {
				let num = this.textarea.indexOf(t)
				console.log(num)
				this.textarea.splice(num, 1);
				
			},
			
		},
		
	/*computed: {
		test() {
			return this.$store.state.test
		}
	},
	mounted() {
		this.$store.commit('setTest', this.test + 1)
	}*/

};
</script>

<style>
.card {
  padding: 25px;
}
.card—header :hover{
	background: #FCF0E5;
}
.input_t {
  width: 100%;
  padding: 20px 0;
  font-size: 25px;
  text-align: center;
  background: transparent;
}
.input_t input::-webkit-input-placeholder {
  color: #aab2bd;
  font-size: 25px;
  text-align: center;
}
.block{
	margin:15px 0;
}
.block :hover{
	background: #FCF0E5;
}
.ques input{
	border: none;
	outline: none;
	background-color: transparent;
}
.ques_title input{
	width: 600px;
}
.quesbtn{
	padding: 0 10px;
}
.texta
{
	width: 100%;
}
.texta textarea{
	width: 600px;
	height: 150px;
}
.textabtn{
	text-align: right;
	padding: 0 15px;
}
.body_btn {
  text-align: center;
  font-size: 15px;
  padding: 20px 0;
  border: #efefef dashed 4px;
  border-bottom-style: none;
}
.body_btn button {
  margin: 0 15px;
  padding: 2px 20px;
}
.body_bottom .btn {
  font-size: 20px;
  padding: 20px 0;
  width: 100%;
}
.body_bottom :hover {
  background: #FCF0E5;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.card-footer {
  background: #ffffff;
}
.inline-block {
  display: inline-block;
}
.r {
  float: right;
}
.b1 {
  border: black solid 1px;
  padding: 7px 10px;
  font-size: 15px;
  background: #FFFFFF;
}
.card-footer .btn a {
  text-decoration: none;
  color: black;
}
.card-footer .btn :hover {
  background: #ee7419;
  color: #ffffff;
  border: #ee7419 solid 1px;
}
</style>
