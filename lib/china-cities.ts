/**
 * 中国地级市地理坐标数据库
 */

export interface CityData {
  lat: number
  lng: number
  timezone: string
}

export interface ProvinceData {
  [city: string]: CityData
}

export interface CitiesDatabase {
  [province: string]: ProvinceData
}

export const CHINA_CITIES: CitiesDatabase = {
  "直辖市": {
    "北京市": { "lat": 39.9042, "lng": 116.4074, "timezone": "Asia/Shanghai" },
    "上海市": { "lat": 31.2304, "lng": 121.4737, "timezone": "Asia/Shanghai" },
    "天津市": { "lat": 39.0842, "lng": 117.2009, "timezone": "Asia/Shanghai" },
    "重庆市": { "lat": 29.5630, "lng": 106.5516, "timezone": "Asia/Shanghai" }
  },
  "广东省": {
    "广州市": { "lat": 23.1291, "lng": 113.2644, "timezone": "Asia/Shanghai" },
    "深圳市": { "lat": 22.5431, "lng": 114.0579, "timezone": "Asia/Shanghai" },
    "珠海市": { "lat": 22.2710, "lng": 113.5767, "timezone": "Asia/Shanghai" },
    "汕头市": { "lat": 23.3535, "lng": 116.6820, "timezone": "Asia/Shanghai" },
    "佛山市": { "lat": 23.0219, "lng": 113.1219, "timezone": "Asia/Shanghai" },
    "韶关市": { "lat": 24.8100, "lng": 113.5972, "timezone": "Asia/Shanghai" },
    "湛江市": { "lat": 21.2707, "lng": 110.3594, "timezone": "Asia/Shanghai" },
    "肇庆市": { "lat": 23.0471, "lng": 112.4653, "timezone": "Asia/Shanghai" },
    "江门市": { "lat": 22.5790, "lng": 113.0815, "timezone": "Asia/Shanghai" },
    "茂名市": { "lat": 21.6632, "lng": 110.9253, "timezone": "Asia/Shanghai" },
    "惠州市": { "lat": 23.1115, "lng": 114.4160, "timezone": "Asia/Shanghai" },
    "梅州市": { "lat": 24.2886, "lng": 116.1225, "timezone": "Asia/Shanghai" },
    "汕尾市": { "lat": 22.7787, "lng": 115.3750, "timezone": "Asia/Shanghai" },
    "河源市": { "lat": 23.7463, "lng": 114.7003, "timezone": "Asia/Shanghai" },
    "阳江市": { "lat": 21.8577, "lng": 111.9832, "timezone": "Asia/Shanghai" },
    "清远市": { "lat": 23.6818, "lng": 113.0561, "timezone": "Asia/Shanghai" },
    "东莞市": { "lat": 23.0207, "lng": 113.7518, "timezone": "Asia/Shanghai" },
    "中山市": { "lat": 22.5170, "lng": 113.3926, "timezone": "Asia/Shanghai" },
    "潮州市": { "lat": 23.6567, "lng": 116.6223, "timezone": "Asia/Shanghai" },
    "揭阳市": { "lat": 23.5498, "lng": 116.3729, "timezone": "Asia/Shanghai" },
    "云浮市": { "lat": 22.9152, "lng": 112.0445, "timezone": "Asia/Shanghai" }
  },
  "江苏省": {
    "南京市": { "lat": 32.0603, "lng": 118.7969, "timezone": "Asia/Shanghai" },
    "无锡市": { "lat": 31.4912, "lng": 120.3119, "timezone": "Asia/Shanghai" },
    "徐州市": { "lat": 34.2053, "lng": 117.2837, "timezone": "Asia/Shanghai" },
    "常州市": { "lat": 31.8108, "lng": 119.9741, "timezone": "Asia/Shanghai" },
    "苏州市": { "lat": 31.2989, "lng": 120.5853, "timezone": "Asia/Shanghai" },
    "南通市": { "lat": 31.9802, "lng": 120.8943, "timezone": "Asia/Shanghai" },
    "连云港市": { "lat": 34.5969, "lng": 119.2216, "timezone": "Asia/Shanghai" },
    "淮安市": { "lat": 33.6103, "lng": 119.0152, "timezone": "Asia/Shanghai" },
    "盐城市": { "lat": 33.3476, "lng": 120.1615, "timezone": "Asia/Shanghai" },
    "扬州市": { "lat": 32.3947, "lng": 119.4143, "timezone": "Asia/Shanghai" },
    "镇江市": { "lat": 32.1880, "lng": 119.4249, "timezone": "Asia/Shanghai" },
    "泰州市": { "lat": 32.4557, "lng": 119.9230, "timezone": "Asia/Shanghai" },
    "宿迁市": { "lat": 33.9631, "lng": 118.2751, "timezone": "Asia/Shanghai" }
  },
  "浙江省": {
    "杭州市": { "lat": 30.2741, "lng": 120.1551, "timezone": "Asia/Shanghai" },
    "宁波市": { "lat": 29.8683, "lng": 121.5440, "timezone": "Asia/Shanghai" },
    "温州市": { "lat": 27.9939, "lng": 120.6994, "timezone": "Asia/Shanghai" },
    "嘉兴市": { "lat": 30.7465, "lng": 120.7556, "timezone": "Asia/Shanghai" },
    "湖州市": { "lat": 30.8927, "lng": 120.0864, "timezone": "Asia/Shanghai" },
    "绍兴市": { "lat": 30.0307, "lng": 120.5800, "timezone": "Asia/Shanghai" },
    "金华市": { "lat": 29.0782, "lng": 119.6473, "timezone": "Asia/Shanghai" },
    "衢州市": { "lat": 28.9700, "lng": 118.8595, "timezone": "Asia/Shanghai" },
    "舟山市": { "lat": 29.9853, "lng": 122.2072, "timezone": "Asia/Shanghai" },
    "台州市": { "lat": 28.6561, "lng": 121.4205, "timezone": "Asia/Shanghai" },
    "丽水市": { "lat": 28.4676, "lng": 119.9229, "timezone": "Asia/Shanghai" }
  },
  "山东省": {
    "济南市": { "lat": 36.6512, "lng": 117.1205, "timezone": "Asia/Shanghai" },
    "青岛市": { "lat": 36.0671, "lng": 120.3826, "timezone": "Asia/Shanghai" },
    "淄博市": { "lat": 36.8131, "lng": 118.0548, "timezone": "Asia/Shanghai" },
    "枣庄市": { "lat": 34.8102, "lng": 117.3236, "timezone": "Asia/Shanghai" },
    "东营市": { "lat": 37.4343, "lng": 118.6747, "timezone": "Asia/Shanghai" },
    "烟台市": { "lat": 37.4638, "lng": 121.4479, "timezone": "Asia/Shanghai" },
    "潍坊市": { "lat": 36.7067, "lng": 119.1619, "timezone": "Asia/Shanghai" },
    "济宁市": { "lat": 35.4150, "lng": 116.5874, "timezone": "Asia/Shanghai" },
    "泰安市": { "lat": 36.2001, "lng": 117.0879, "timezone": "Asia/Shanghai" },
    "威海市": { "lat": 37.5128, "lng": 122.1201, "timezone": "Asia/Shanghai" },
    "日照市": { "lat": 35.4164, "lng": 119.5269, "timezone": "Asia/Shanghai" },
    "临沂市": { "lat": 35.1041, "lng": 118.3563, "timezone": "Asia/Shanghai" },
    "德州市": { "lat": 37.4354, "lng": 116.3575, "timezone": "Asia/Shanghai" },
    "聊城市": { "lat": 36.4570, "lng": 115.9856, "timezone": "Asia/Shanghai" },
    "滨州市": { "lat": 37.3831, "lng": 117.9708, "timezone": "Asia/Shanghai" },
    "菏泽市": { "lat": 35.2333, "lng": 115.4800, "timezone": "Asia/Shanghai" }
  },
  "河北省": {
    "石家庄市": { "lat": 38.0428, "lng": 114.5149, "timezone": "Asia/Shanghai" },
    "唐山市": { "lat": 39.6307, "lng": 118.1802, "timezone": "Asia/Shanghai" },
    "秦皇岛市": { "lat": 39.9354, "lng": 119.6005, "timezone": "Asia/Shanghai" },
    "邯郸市": { "lat": 36.6251, "lng": 114.5390, "timezone": "Asia/Shanghai" },
    "邢台市": { "lat": 37.0695, "lng": 114.5047, "timezone": "Asia/Shanghai" },
    "保定市": { "lat": 38.8740, "lng": 115.4646, "timezone": "Asia/Shanghai" },
    "张家口市": { "lat": 40.8248, "lng": 114.8870, "timezone": "Asia/Shanghai" },
    "承德市": { "lat": 40.9543, "lng": 117.9634, "timezone": "Asia/Shanghai" },
    "沧州市": { "lat": 38.3037, "lng": 116.8388, "timezone": "Asia/Shanghai" },
    "廊坊市": { "lat": 39.5376, "lng": 116.6836, "timezone": "Asia/Shanghai" },
    "衡水市": { "lat": 37.7389, "lng": 115.6704, "timezone": "Asia/Shanghai" }
  },
  "河南省": {
    "郑州市": { "lat": 34.7472, "lng": 113.6249, "timezone": "Asia/Shanghai" },
    "开封市": { "lat": 34.7971, "lng": 114.3072, "timezone": "Asia/Shanghai" },
    "洛阳市": { "lat": 34.6197, "lng": 112.4540, "timezone": "Asia/Shanghai" },
    "平顶山市": { "lat": 33.7663, "lng": 113.1926, "timezone": "Asia/Shanghai" },
    "安阳市": { "lat": 36.0997, "lng": 114.3931, "timezone": "Asia/Shanghai" },
    "鹤壁市": { "lat": 35.7477, "lng": 114.2973, "timezone": "Asia/Shanghai" },
    "新乡市": { "lat": 35.3030, "lng": 113.9268, "timezone": "Asia/Shanghai" },
    "焦作市": { "lat": 35.2159, "lng": 113.2418, "timezone": "Asia/Shanghai" },
    "濮阳市": { "lat": 35.7612, "lng": 115.0290, "timezone": "Asia/Shanghai" },
    "许昌市": { "lat": 34.0357, "lng": 113.8520, "timezone": "Asia/Shanghai" },
    "漯河市": { "lat": 33.5810, "lng": 114.0165, "timezone": "Asia/Shanghai" },
    "三门峡市": { "lat": 34.7725, "lng": 111.2003, "timezone": "Asia/Shanghai" },
    "南阳市": { "lat": 32.9909, "lng": 112.5283, "timezone": "Asia/Shanghai" },
    "商丘市": { "lat": 34.4147, "lng": 115.6563, "timezone": "Asia/Shanghai" },
    "信阳市": { "lat": 32.1470, "lng": 114.0919, "timezone": "Asia/Shanghai" },
    "周口市": { "lat": 33.6237, "lng": 114.6965, "timezone": "Asia/Shanghai" },
    "驻马店市": { "lat": 33.0114, "lng": 114.0223, "timezone": "Asia/Shanghai" }
  },
  "湖北省": {
    "武汉市": { "lat": 30.5928, "lng": 114.3055, "timezone": "Asia/Shanghai" },
    "黄石市": { "lat": 30.2000, "lng": 115.0389, "timezone": "Asia/Shanghai" },
    "十堰市": { "lat": 32.6292, "lng": 110.7981, "timezone": "Asia/Shanghai" },
    "宜昌市": { "lat": 30.6918, "lng": 111.2868, "timezone": "Asia/Shanghai" },
    "襄阳市": { "lat": 32.0089, "lng": 112.1226, "timezone": "Asia/Shanghai" },
    "鄂州市": { "lat": 30.3910, "lng": 114.8949, "timezone": "Asia/Shanghai" },
    "荆门市": { "lat": 31.0354, "lng": 112.1993, "timezone": "Asia/Shanghai" },
    "孝感市": { "lat": 30.9246, "lng": 113.9165, "timezone": "Asia/Shanghai" },
    "荆州市": { "lat": 30.3352, "lng": 112.2414, "timezone": "Asia/Shanghai" },
    "黄冈市": { "lat": 30.4535, "lng": 114.8724, "timezone": "Asia/Shanghai" },
    "咸宁市": { "lat": 29.8413, "lng": 114.3224, "timezone": "Asia/Shanghai" },
    "随州市": { "lat": 31.6903, "lng": 113.3831, "timezone": "Asia/Shanghai" }
  },
  "湖南省": {
    "长沙市": { "lat": 28.2282, "lng": 112.9388, "timezone": "Asia/Shanghai" },
    "株洲市": { "lat": 27.8274, "lng": 113.1341, "timezone": "Asia/Shanghai" },
    "湘潭市": { "lat": 27.8295, "lng": 112.9449, "timezone": "Asia/Shanghai" },
    "衡阳市": { "lat": 26.8935, "lng": 112.5719, "timezone": "Asia/Shanghai" },
    "邵阳市": { "lat": 27.2387, "lng": 111.4675, "timezone": "Asia/Shanghai" },
    "岳阳市": { "lat": 29.3574, "lng": 113.1289, "timezone": "Asia/Shanghai" },
    "常德市": { "lat": 29.0312, "lng": 111.6986, "timezone": "Asia/Shanghai" },
    "张家界市": { "lat": 29.1167, "lng": 110.4792, "timezone": "Asia/Shanghai" },
    "益阳市": { "lat": 28.5538, "lng": 112.3551, "timezone": "Asia/Shanghai" },
    "郴州市": { "lat": 25.7705, "lng": 113.0150, "timezone": "Asia/Shanghai" },
    "永州市": { "lat": 26.4203, "lng": 111.6133, "timezone": "Asia/Shanghai" },
    "怀化市": { "lat": 27.5701, "lng": 110.0018, "timezone": "Asia/Shanghai" },
    "娄底市": { "lat": 27.6970, "lng": 111.9960, "timezone": "Asia/Shanghai" }
  },
  "四川省": {
    "成都市": { "lat": 30.5728, "lng": 104.0668, "timezone": "Asia/Shanghai" },
    "自贡市": { "lat": 29.3391, "lng": 104.7789, "timezone": "Asia/Shanghai" },
    "攀枝花市": { "lat": 26.5826, "lng": 101.7185, "timezone": "Asia/Shanghai" },
    "泸州市": { "lat": 28.8717, "lng": 105.4424, "timezone": "Asia/Shanghai" },
    "德阳市": { "lat": 31.1274, "lng": 104.3979, "timezone": "Asia/Shanghai" },
    "绵阳市": { "lat": 31.4679, "lng": 104.6796, "timezone": "Asia/Shanghai" },
    "广元市": { "lat": 32.4355, "lng": 105.8433, "timezone": "Asia/Shanghai" },
    "遂宁市": { "lat": 30.5333, "lng": 105.5931, "timezone": "Asia/Shanghai" },
    "内江市": { "lat": 29.5801, "lng": 105.0584, "timezone": "Asia/Shanghai" },
    "乐山市": { "lat": 29.5521, "lng": 103.7663, "timezone": "Asia/Shanghai" },
    "南充市": { "lat": 30.8373, "lng": 106.1105, "timezone": "Asia/Shanghai" },
    "眉山市": { "lat": 30.0757, "lng": 103.8488, "timezone": "Asia/Shanghai" },
    "宜宾市": { "lat": 28.7513, "lng": 104.6419, "timezone": "Asia/Shanghai" },
    "广安市": { "lat": 30.4558, "lng": 106.6333, "timezone": "Asia/Shanghai" },
    "达州市": { "lat": 31.2096, "lng": 107.4682, "timezone": "Asia/Shanghai" },
    "雅安市": { "lat": 30.0105, "lng": 103.0424, "timezone": "Asia/Shanghai" },
    "巴中市": { "lat": 31.8670, "lng": 106.7477, "timezone": "Asia/Shanghai" },
    "资阳市": { "lat": 30.1222, "lng": 104.6278, "timezone": "Asia/Shanghai" }
  },
  "福建省": {
    "福州市": { "lat": 26.0745, "lng": 119.2965, "timezone": "Asia/Shanghai" },
    "厦门市": { "lat": 24.4798, "lng": 118.0894, "timezone": "Asia/Shanghai" },
    "莆田市": { "lat": 25.4544, "lng": 119.0078, "timezone": "Asia/Shanghai" },
    "三明市": { "lat": 26.2654, "lng": 117.6389, "timezone": "Asia/Shanghai" },
    "泉州市": { "lat": 24.8741, "lng": 118.6753, "timezone": "Asia/Shanghai" },
    "漳州市": { "lat": 24.5133, "lng": 117.6471, "timezone": "Asia/Shanghai" },
    "南平市": { "lat": 26.6414, "lng": 118.1780, "timezone": "Asia/Shanghai" },
    "龙岩市": { "lat": 25.0754, "lng": 117.0173, "timezone": "Asia/Shanghai" },
    "宁德市": { "lat": 26.6656, "lng": 119.5478, "timezone": "Asia/Shanghai" }
  },
  "安徽省": {
    "合肥市": { "lat": 31.8206, "lng": 117.2272, "timezone": "Asia/Shanghai" },
    "芜湖市": { "lat": 31.3528, "lng": 118.4330, "timezone": "Asia/Shanghai" },
    "蚌埠市": { "lat": 32.9162, "lng": 117.3889, "timezone": "Asia/Shanghai" },
    "淮南市": { "lat": 32.6262, "lng": 117.0185, "timezone": "Asia/Shanghai" },
    "马鞍山市": { "lat": 31.6704, "lng": 118.5068, "timezone": "Asia/Shanghai" },
    "淮北市": { "lat": 33.9555, "lng": 116.7985, "timezone": "Asia/Shanghai" },
    "铜陵市": { "lat": 30.9453, "lng": 117.8121, "timezone": "Asia/Shanghai" },
    "安庆市": { "lat": 30.5431, "lng": 117.0633, "timezone": "Asia/Shanghai" },
    "黄山市": { "lat": 29.7148, "lng": 118.3376, "timezone": "Asia/Shanghai" },
    "滁州市": { "lat": 32.3017, "lng": 118.3178, "timezone": "Asia/Shanghai" },
    "阜阳市": { "lat": 32.8901, "lng": 115.8145, "timezone": "Asia/Shanghai" },
    "宿州市": { "lat": 33.6461, "lng": 116.9641, "timezone": "Asia/Shanghai" },
    "六安市": { "lat": 31.7335, "lng": 116.5216, "timezone": "Asia/Shanghai" },
    "亳州市": { "lat": 33.8450, "lng": 115.7787, "timezone": "Asia/Shanghai" },
    "池州市": { "lat": 30.6641, "lng": 117.4918, "timezone": "Asia/Shanghai" },
    "宣城市": { "lat": 30.9402, "lng": 118.7587, "timezone": "Asia/Shanghai" }
  },
  "江西省": {
    "南昌市": { "lat": 28.6829, "lng": 115.8579, "timezone": "Asia/Shanghai" },
    "景德镇市": { "lat": 29.2689, "lng": 117.1786, "timezone": "Asia/Shanghai" },
    "萍乡市": { "lat": 27.6225, "lng": 113.8544, "timezone": "Asia/Shanghai" },
    "九江市": { "lat": 29.7051, "lng": 116.0012, "timezone": "Asia/Shanghai" },
    "新余市": { "lat": 27.8174, "lng": 114.9167, "timezone": "Asia/Shanghai" },
    "鹰潭市": { "lat": 28.2602, "lng": 117.0688, "timezone": "Asia/Shanghai" },
    "赣州市": { "lat": 25.8452, "lng": 114.9349, "timezone": "Asia/Shanghai" },
    "吉安市": { "lat": 27.1138, "lng": 114.9927, "timezone": "Asia/Shanghai" },
    "宜春市": { "lat": 27.8157, "lng": 114.4163, "timezone": "Asia/Shanghai" },
    "抚州市": { "lat": 27.9488, "lng": 116.3583, "timezone": "Asia/Shanghai" },
    "上饶市": { "lat": 28.4545, "lng": 117.9433, "timezone": "Asia/Shanghai" }
  },
  "辽宁省": {
    "沈阳市": { "lat": 41.8057, "lng": 123.4315, "timezone": "Asia/Shanghai" },
    "大连市": { "lat": 38.9140, "lng": 121.6147, "timezone": "Asia/Shanghai" },
    "鞍山市": { "lat": 41.1089, "lng": 122.9946, "timezone": "Asia/Shanghai" },
    "抚顺市": { "lat": 41.8807, "lng": 123.9570, "timezone": "Asia/Shanghai" },
    "本溪市": { "lat": 41.2979, "lng": 123.7659, "timezone": "Asia/Shanghai" },
    "丹东市": { "lat": 40.0009, "lng": 124.3547, "timezone": "Asia/Shanghai" },
    "锦州市": { "lat": 41.0952, "lng": 121.1270, "timezone": "Asia/Shanghai" },
    "营口市": { "lat": 40.6667, "lng": 122.2351, "timezone": "Asia/Shanghai" },
    "阜新市": { "lat": 42.0218, "lng": 121.6700, "timezone": "Asia/Shanghai" },
    "辽阳市": { "lat": 41.2679, "lng": 123.2370, "timezone": "Asia/Shanghai" },
    "盘锦市": { "lat": 41.1198, "lng": 122.0707, "timezone": "Asia/Shanghai" },
    "铁岭市": { "lat": 42.2236, "lng": 123.7262, "timezone": "Asia/Shanghai" },
    "朝阳市": { "lat": 41.5763, "lng": 120.4561, "timezone": "Asia/Shanghai" },
    "葫芦岛市": { "lat": 40.7111, "lng": 120.8367, "timezone": "Asia/Shanghai" }
  },
  "吉林省": {
    "长春市": { "lat": 43.8171, "lng": 125.3235, "timezone": "Asia/Shanghai" },
    "吉林市": { "lat": 43.8378, "lng": 126.5495, "timezone": "Asia/Shanghai" },
    "四平市": { "lat": 43.1661, "lng": 124.3508, "timezone": "Asia/Shanghai" },
    "辽源市": { "lat": 42.8878, "lng": 125.1435, "timezone": "Asia/Shanghai" },
    "通化市": { "lat": 41.7288, "lng": 125.9396, "timezone": "Asia/Shanghai" },
    "白山市": { "lat": 41.9433, "lng": 126.4227, "timezone": "Asia/Shanghai" },
    "松原市": { "lat": 45.1415, "lng": 124.8251, "timezone": "Asia/Shanghai" },
    "白城市": { "lat": 45.6190, "lng": 122.8393, "timezone": "Asia/Shanghai" }
  },
  "黑龙江省": {
    "哈尔滨市": { "lat": 45.8038, "lng": 126.5350, "timezone": "Asia/Shanghai" },
    "齐齐哈尔市": { "lat": 47.3543, "lng": 123.9182, "timezone": "Asia/Shanghai" },
    "鸡西市": { "lat": 45.2950, "lng": 130.9696, "timezone": "Asia/Shanghai" },
    "鹤岗市": { "lat": 47.3501, "lng": 130.2978, "timezone": "Asia/Shanghai" },
    "双鸭山市": { "lat": 46.6463, "lng": 131.1591, "timezone": "Asia/Shanghai" },
    "大庆市": { "lat": 46.5882, "lng": 125.1038, "timezone": "Asia/Shanghai" },
    "伊春市": { "lat": 47.7281, "lng": 128.8411, "timezone": "Asia/Shanghai" },
    "佳木斯市": { "lat": 46.7997, "lng": 130.3181, "timezone": "Asia/Shanghai" },
    "七台河市": { "lat": 45.7713, "lng": 131.0031, "timezone": "Asia/Shanghai" },
    "牡丹江市": { "lat": 44.5520, "lng": 129.6330, "timezone": "Asia/Shanghai" },
    "黑河市": { "lat": 50.2451, "lng": 127.5283, "timezone": "Asia/Shanghai" },
    "绥化市": { "lat": 46.6537, "lng": 126.9686, "timezone": "Asia/Shanghai" }
  },
  "山西省": {
    "太原市": { "lat": 37.8706, "lng": 112.5489, "timezone": "Asia/Shanghai" },
    "大同市": { "lat": 40.0763, "lng": 113.3001, "timezone": "Asia/Shanghai" },
    "阳泉市": { "lat": 37.8575, "lng": 113.5832, "timezone": "Asia/Shanghai" },
    "长治市": { "lat": 36.1954, "lng": 113.1163, "timezone": "Asia/Shanghai" },
    "晋城市": { "lat": 35.4900, "lng": 112.8515, "timezone": "Asia/Shanghai" },
    "朔州市": { "lat": 39.3312, "lng": 112.4329, "timezone": "Asia/Shanghai" },
    "晋中市": { "lat": 37.6871, "lng": 112.7528, "timezone": "Asia/Shanghai" },
    "运城市": { "lat": 35.0263, "lng": 111.0075, "timezone": "Asia/Shanghai" },
    "忻州市": { "lat": 38.4168, "lng": 112.7339, "timezone": "Asia/Shanghai" },
    "临汾市": { "lat": 36.0880, "lng": 111.5190, "timezone": "Asia/Shanghai" },
    "吕梁市": { "lat": 37.5178, "lng": 111.1342, "timezone": "Asia/Shanghai" }
  },
  "陕西省": {
    "西安市": { "lat": 34.3416, "lng": 108.9398, "timezone": "Asia/Shanghai" },
    "铜川市": { "lat": 34.9083, "lng": 108.9453, "timezone": "Asia/Shanghai" },
    "宝鸡市": { "lat": 34.3640, "lng": 107.2361, "timezone": "Asia/Shanghai" },
    "咸阳市": { "lat": 34.3457, "lng": 108.7098, "timezone": "Asia/Shanghai" },
    "渭南市": { "lat": 34.4994, "lng": 109.5096, "timezone": "Asia/Shanghai" },
    "延安市": { "lat": 36.5853, "lng": 109.4897, "timezone": "Asia/Shanghai" },
    "汉中市": { "lat": 33.0777, "lng": 107.0283, "timezone": "Asia/Shanghai" },
    "榆林市": { "lat": 38.2858, "lng": 109.7345, "timezone": "Asia/Shanghai" },
    "安康市": { "lat": 32.6803, "lng": 109.0290, "timezone": "Asia/Shanghai" },
    "商洛市": { "lat": 33.8683, "lng": 109.9403, "timezone": "Asia/Shanghai" }
  }
}

/**
 * 获取城市地理坐标
 */
export function getCityCoordinates(province: string, city: string): CityData | null {
  const provinceData = CHINA_CITIES[province]
  if (!provinceData) return null
  
  return provinceData[city] || null
}

/**
 * 获取所有省份列表
 */
export function getProvinces(): string[] {
  return Object.keys(CHINA_CITIES)
}

/**
 * 获取指定省份的城市列表
 */
export function getCitiesByProvince(province: string): string[] {
  const provinceData = CHINA_CITIES[province]
  if (!provinceData) return []
  
  return Object.keys(provinceData)
}