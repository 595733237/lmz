<template>
	<div class="card">
		<div class="card">
			<input type="text" class="input_t" placeholder="问卷标题"/>
			<hr />
			<div class="card-body">

				<div class="body_f">
					<transition name="fade">
						<div class="body_btn" v-if="show">
							<button>单选题</button>
							<button>多选题</button>
							<button>文本题</button>
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
					<el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
					</el-date-picker>
				</div>
				<div class="inline-block r">
					<div class="btn">
						<div class="b1">
							保存问卷
						</div>
					</div>
					<div class="btn">
						<div class="b1">
							发布问卷
						</div>
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

};
</script>

<style>
.card {
  padding: 25px;
}
.input_t {
  width: 100%;
  padding: 20px 0;
  font-size: 25px;
  text-align: center;
}
.input_t input::-webkit-input-placeholder {
  color: #aab2bd;
  font-size: 25px;
  text-align: center;
  letter-spacing: 5px;
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
  background: lightpink;
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
