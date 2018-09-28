<template>
	<div class="el-card__body">
		<el-row :gutter="24">
			<el-col :span="20" :offset="2">
				<div class="card">
					<div class="card-head">
						<h2>创新创业现状调查</h2>
					</div>
					<div class="card-body">
						<div id="myChart_l" class="mychart"></div>
						<div id="myChart_c" class="mychart"></div>
						<div id="myChart_c1" class="mychart"></div>
						<div id="myChart_l1" class="mychart"></div>
					</div>
					<div class="card_foot">
						<div  class="btn">
							<router-link to="/" >返回列表</router-link>
						</div>
						
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<style>
	.card{
		box-shadow: 5px 5px 5px #888888;
		padding: 35px 0;
	}
	.card-head h2{
		text-align: center;
	}
	.card-body{
		text-align: center;
	}
	.mychart{
		width: 400px;
		height: 400px;
	}
	.card_foot{
		text-align: center;
	}
	.card_foot .btn{
		background: #ee7419;
		color: #FFFFFF;
	}
	.card_foot a {
		color: #FFFFFF;
	}
</style>
<script>
	export default {
  data () {
    return {
     
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        
        let myChart_l = this.$echarts.init(document.getElementById('myChart_l'))
        let myChart_c = this.$echarts.init(document.getElementById('myChart_c'))
        let myChart_c1 = this.$echarts.init(document.getElementById('myChart_c1'))
        let myChart_l1 = this.$echarts.init(document.getElementById('myChart_l1'))
		
        myChart_l.setOption({
            title: { text: '1.纺织品的销量' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart_c.setOption({
        	title: { text: '2.您的访问来源？' },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius: '55%',
		            data:[
		                {value:235, name:'视频广告'},
		                {value:274, name:'联盟广告'},
		                {value:310, name:'邮件营销'},
		                {value:335, name:'直接访问'},
		                {value:400, name:'搜索引擎'}
		            ]
		        }
		    ]
		});
		myChart_c1.setOption({
        	title: { text: '3.您的性别？' },
		    series : [
		        {
		            name: '性别',
		            type: 'pie',
		            radius: '55%',
		            data:[
		                {value:50, name:'男'},
		                {value:36, name:'女'},
		            ]
		        }
		    ]
		});
		myChart_l1.setOption({
            title: { text: '4.你对本问卷有什么评价和建议？' },
            tooltip: {},
            xAxis: {
                data: ["有效答案","无效回答或者未作答"]
            },
            yAxis: {},
            series: [{
                name: '回答数',
                type: 'bar',
                data: [5, 16]
            }]
        });
    }
  }
}
 
</script>