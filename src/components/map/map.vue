<template>
 <div class="wrapper-height">
     <div id="allmap" class="wrapper-height"></div>
 </div>
</template>

<script>
import BMap from 'BMap'// 导入BMap组件

export default {
    components: {

    },
    data() {
        return {
            plng:'',
            plat:'',
        }
    },
    mounted(){
       var map = new BMap.Map('allmap');// 创建地图实例
        var point = new BMap.Point(108.840053, 34.129522);// 创建点坐标

        map.centerAndZoom(point, 14);// 初始化地图，设置中心点坐标和地图级别

        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.enableDoubleClickZoom(true);// 启用地图惯性拖拽，默认禁用

        var marker = new BMap.Marker(point);// 创建标注
        map.addOverlay(marker);// 将标注添加到地图中 

        map.addControl(new BMap.GeolocationControl());//向地图添加控件--定位

        // 创建地址解析器实例     
        var myGeo = new BMap.Geocoder();      
        // 将地址解析结果显示在地图上，并调整地图视野    
        myGeo.getPoint("广州市天河区棠东东路3号广州乐确网络科技有限公司", function(point){      
            if (point) {      
                map.centerAndZoom(point, 16);      
                map.addOverlay(new BMap.Marker(point));  
                var opts = {    
                    width : 250,     // 信息窗口宽度    
                    height: 100,     // 信息窗口高度     
                } 
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        console.log('您的位置：'+r.point.lng+','+r.point.lat);
                        var content='<div>'+
                                '<div>工作地点</div>'+
                                '<div class="mapDetail" style="padding-top:0.2rem;"><a href="http://api.map.baidu.com/direction?origin=latlng:'+r.point.lat+','+r.point.lng+'|name:我的位置&destination=广州市天河区棠东东路3号广州乐确网络科技有限公司&region=广州市&mode=driving&output=html&src=webapp.baidu.openAPIdemo" target="_blank" style="color:grey;">广州市天河区棠东东路3号广州乐确网络科技有限公司</a></div>'+
                            '</div>';
                        var infoWindow = new BMap.InfoWindow(content, opts);     
                        map.openInfoWindow(infoWindow, map.getCenter()); 
                    }     
                });  
                console.log("经度==="+point.lng+"   纬度==="+point.lat);         
            }      
        },"广州市");
           
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
