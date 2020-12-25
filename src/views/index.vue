<template>
  <div id="index">
    <Header></Header>
    <div style="height: 65px"></div>
    <el-container class="sec">
      <el-main class="secL">
        <div>
          <p>
            <i class="el-icon-s-platform"></i> 今日工作
            <span style="float: right">
              <i class="el-icon-arrow-left"></i>
              2019-02-11 至 2019-02-17
              <i class="el-icon-arrow-right"></i>
            </span>
          </p>
          <div class="box" id="box">
            <div>
              <div>日 .</div>
              <img src="../assets/img/1.png" width="90px" />
              <p>写日程</p>
            </div>
            <div>
              <div>一 .</div>
              <img src="../assets/img/2.png" width="90px" />
              <p>写日程</p>
            </div>
            <div>
              <div>二 .</div>
              <img src="../assets/img/3.png" width="90px" />
              <p>写日程</p>
            </div>
            <div>
              <div>三 .</div>
              <img src="../assets/img/4.png" width="90px" />
              <p>写日程</p>
            </div>
            <div>
              <div>四 .</div>
              <img src="../assets/img/5.png" width="90px" />
              <p>写日程</p>
            </div>
            <div>
              <div>五 .</div>
              <img src="../assets/img/6.png" width="90px" />
              <p>写日程</p>
            </div>
            <div>
              <div>
                六 .
                <el-radio-group v-model="radio1" size="mini" class="mini">
                  <el-radio-button label="周"></el-radio-button>
                  <el-radio-button label="月"></el-radio-button>
                </el-radio-group>
              </div>
              <img src="../assets/img/7.png" width="90px" />
              <p>写日程</p>
            </div>
          </div>
          <div>
            <p class="secL-1">
              <i class="el-icon-date"></i> &nbsp;日程：1

              <el-radio-group v-model="radio2" size="mini" style="float: right;margin-right: 27px;">
                <el-radio-button label="我"></el-radio-button>
                <el-radio-button label="外来"></el-radio-button>
              </el-radio-group>
            </p>
            <p>
              <el-collapse accordion>
                <el-collapse-item>
                  <template slot="title">
                    <span
                      ><i class="el-icon-message-solid"></i>
                      &nbsp;待办事项：3</span
                    >
                  </template>
                  <div class="secL-2">
                    <p>
                      <img
                        src="../assets/img/8-1.png"
                        width="20px"
                      />跟进广西南宁汉麻客户的需求 <span>昨日9:30</span>
                    </p>
                    <p>
                      <img
                        src="../assets/img/8-1.png"
                        width="20px"
                      />外出拜访高新区星光大道125号海鲜批发商
                      <span>昨日9:30</span>
                    </p>
                    <p>
                      <img src="../assets/img/8-1.png" width="20px" />
                      完成coldcall 30通 <span>昨日9:30</span>
                    </p>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </p>
          </div>
          <div class="card">
            <span class="card1"><i class="el-icon-suitcase"></i> 工作圈</span>
            <el-tabs type="border-card">
              <el-tab-pane>
                <span slot="label">圈子</span>
                <div class="lableAll">
                  <div class="lableAll1">
                    <div>
                      <div class="lable-1">
                        <div><img src="../assets/img/u340.png" /></div>
                        <div>
                          <p>销售1部-厂长</p>
                          <p>
                            冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                            开单喽~
                          </p>
                          <p style="margin-top: 10px">
                            <img src="../assets/img/u453.png" />
                            <img src="../assets/img/u454.png" />
                            <img src="../assets/img/u455.png" />
                            <img src="../assets/img/u456.png" />
                            <img src="../assets/img/u457.png" />
                            <img src="../assets/img/u458.png" />
                          </p>
                        </div>
                        <div>
                          <p><img src="../assets/img/9.png" width="20px" style="float:right;"/></p>
                          <p class="lable-2" style="float:right;">3分钟前 来自pc端</p>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u347.png" /></div>
                          <div class="lable-3-2">
                            <p>销售2部-小娟</p>
                            <p>3分钟前</p>
                            <p>厂长棒棒的！给你点赞</p>
                          </div>
                          <div>回复</div>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u390.png" /></div>
                          <div class="lable-3-2">
                            <p>行政部-梓潼</p>
                            <p>5分钟前</p>
                            <p>
                              哇！小哥哥好厉害，晚上一起庆祝一下，我们一起去看电影吧~
                            </p>
                          </div>

                          <div>回复</div>
                        </div>
                      </div>
                    </div>
                    <div class="lable-4">
                      <div class="lable-1">
                        <div><img src="../assets/img/u347.png" /></div>
                        <div>
                          <p>销售1部-厂长</p>
                          <p>
                            冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                            开单喽~
                          </p>
                          <p style="margin-top: 10px">
                            <img src="../assets/img/u453.png" />
                            <img src="../assets/img/u454.png" />
                            <img src="../assets/img/u455.png" />
                            <img src="../assets/img/u456.png" />
                            <img src="../assets/img/u457.png" />
                            <img src="../assets/img/u458.png" />
                          </p>
                        </div>
                        <div>
                          <p class="lable-2">3分钟前 来自pc端</p>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u340.png" /></div>
                          <div class="lable-3-2">
                            <p>销售2部-小娟</p>
                            <p>3分钟前</p>
                            <p>厂长棒棒的！给你点赞</p>
                          </div>
                          <div>回复</div>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u390.png" /></div>
                          <div class="lable-3-2">
                            <p>行政部-梓潼</p>
                            <p>5分钟前</p>
                            <p>
                              哇！小哥哥好厉害，晚上一起庆祝一下，我们一起去看电影吧~
                            </p>
                          </div>

                          <div>回复</div>
                        </div>
                      </div>
                    </div>
                    <div class="lable-4">
                      <div class="lable-1">
                        <div><img src="../assets/img/u340.png" /></div>
                        <div>
                          <p>销售1部-厂长</p>
                          <p>
                            冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                            开单喽~
                          </p>
                          <p style="margin-top: 10px">
                            <img src="../assets/img/u453.png" />
                            <img src="../assets/img/u454.png" />
                            <img src="../assets/img/u455.png" />
                            <img src="../assets/img/u456.png" />
                            <img src="../assets/img/u457.png" />
                            <img src="../assets/img/u458.png" />
                          </p>
                        </div>
                        <div>
                          <p class="lable-2">3分钟前 来自pc端</p>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u347.png" /></div>
                          <div class="lable-3-2">
                            <p>销售2部-小娟</p>
                            <p>3分钟前</p>
                            <p>厂长棒棒的！给你点赞</p>
                          </div>
                          <div>回复</div>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u390.png" /></div>
                          <div class="lable-3-2">
                            <p>行政部-梓潼</p>
                            <p>5分钟前</p>
                            <p>
                              哇！小哥哥好厉害，晚上一起庆祝一下，我们一起去看电影吧~
                            </p>
                          </div>

                          <div>回复</div>
                        </div>
                      </div>
                    </div>
                    <div class="lable-4">
                      <div class="lable-1">
                        <div><img src="../assets/img/u340.png" /></div>
                        <div>
                          <p>销售1部-厂长</p>
                          <p>
                            冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                            开单喽~
                          </p>
                        </div>
                        <div>
                          <p class="lable-2">3分钟前 来自pc端</p>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u347.png" /></div>
                          <div class="lable-3-2">
                            <p>销售2部-小娟</p>
                            <p>3分钟前</p>
                            <p>厂长棒棒的！给你点赞</p>
                          </div>
                          <div>回复</div>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u390.png" /></div>
                          <div class="lable-3-2">
                            <p>行政部-梓潼</p>
                            <p>5分钟前</p>
                            <p>
                              哇！小哥哥好厉害，晚上一起庆祝一下，我们一起去看电影吧~
                            </p>
                          </div>

                          <div>回复</div>
                        </div>
                      </div>
                    </div>
                    <div class="lable-4">
                      <div class="lable-1">
                        <div><img src="../assets/img/u347.png" /></div>
                        <div>
                          <p>销售1部-厂长</p>
                          <p>
                            冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                            开单喽~
                          </p>
                        </div>
                        <div>
                          <p class="lable-2">3分钟前 来自pc端</p>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u340.png" /></div>
                          <div class="lable-3-2">
                            <p>销售2部-小娟</p>
                            <p>3分钟前</p>
                            <p>厂长棒棒的！给你点赞</p>
                          </div>
                          <div>回复</div>
                        </div>
                      </div>
                      <div class="lable-3">
                        <p>评论</p>
                        <div class="lable-3-1">
                          <div><img src="../assets/img/u390.png" /></div>
                          <div class="lable-3-2">
                            <p>行政部-梓潼</p>
                            <p>5分钟前</p>
                            <p>
                              哇！小哥哥好厉害，晚上一起庆祝一下，我们一起去看电影吧~
                            </p>
                          </div>

                          <div>回复</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="话题">
                <div>
                  <div class="lable5">
                    <div class="lable5-1">
                      <p>
                        <img
                          src="../assets/img/10.png"
                          style="vertical-align: middle"
                        />
                        “如何提高陌拜的成功率”
                        <img
                          src="../assets/img/11.png"
                          style="vertical-align: middle"
                        />
                      </p>
                      <p>
                        <img
                          src="../assets/img/u467.png"
                          style="vertical-align: middle"
                        />
                        市场部梓潼
                        <span style="float: right">2019/2/20</span>
                      </p>
                      <p><img src="../assets/img/u465.png" /></p>
                    </div>
                    <div class="lable5-1">
                      <p>
                        <img
                          src="../assets/img/10.png"
                          style="vertical-align: middle"
                        />
                        “谈谈对公司产品的优化建议”
                      </p>
                      <p>
                        <img
                          src="../assets/img/u467.png"
                          style="vertical-align: middle"
                        />
                        市场部伊伊
                        <span style="float: right">2019/2/20</span>
                      </p>
                      <p><img src="../assets/img/u484.png" /></p>
                    </div>
                    <div class="lable5-1">
                      <p>
                        <img
                          src="../assets/img/10.png"
                          style="vertical-align: middle"
                        />
                        “成为一名优秀渠道的必备条件”
                      </p>
                      <p>
                        <img
                          src="../assets/img/u467.png"
                          style="vertical-align: middle"
                        />
                        市场部梓潼
                        <span style="float: right">2019/2/20</span>
                      </p>
                      <p><img src="../assets/img/u485.png" /></p>
                    </div>
                    <div class="lable5-1">
                      <p>
                        <img
                          src="../assets/img/10.png"
                          style="vertical-align: middle"
                        />
                        “成为一名优秀渠道的必备条件”
                        <img
                          src="../assets/img/11.png"
                          style="vertical-align: middle"
                        />
                      </p>
                      <p>
                        <img
                          src="../assets/img/u467.png"
                          style="vertical-align: middle"
                        />
                        市场部梓潼
                        <span style="float: right">2019/2/20</span>
                      </p>
                      <p><img src="../assets/img/u486.png" /></p>
                    </div>
                    <div class="lable5-1">
                      <p>
                        <img
                          src="../assets/img/10.png"
                          style="vertical-align: middle"
                        />
                        “成为一名优秀渠道的必备条件”
                        <img
                          src="../assets/img/11.png"
                          style="vertical-align: middle"
                        />
                      </p>
                      <p>
                        <img
                          src="../assets/img/u467.png"
                          style="vertical-align: middle"
                        />
                        市场部梓潼
                        <span style="float: right">2019/2/20</span>
                      </p>
                      <p><img src="../assets/img/u487.png" /></p>
                    </div>
                    <div class="lable5-1">
                      <p>
                        <img
                          src="../assets/img/10.png"
                          style="vertical-align: middle"
                        />
                        “成为一名优秀渠道的必备条件”
                        <img
                          src="../assets/img/11.png"
                          style="vertical-align: middle"
                        />
                      </p>
                      <p>
                        <img
                          src="../assets/img/u467.png"
                          style="vertical-align: middle"
                        />
                        市场部梓潼
                        <span style="float: right">2019/2/20</span>
                      </p>
                      <p><img src="../assets/img/u484.png" /></p>
                    </div>
                  </div>
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000" style="float: right;margin-top: 16px;"
                  >
                  </el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                  <el-badge is-dot type="success" class="item">
                    我的动态
                  </el-badge>
                </span>
                我的动态
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-main>
      <el-aside class="aside">
        <div class="lable6">
          <el-carousel height="20px" direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in items" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="lable7">
          <el-col :span="8">
            <el-card shadow="hover">
              <img src="../assets/img/14.png" width="168px" />
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <img src="../assets/img/15.png" width="168px" />
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <img src="../assets/img/16.png" width="168px" />
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <img src="../assets/img/17.png" width="168px" />
            </el-card>
          </el-col>
        </div>
        <div class="lable8">
          <div>
            <i class="el-icon-odometer"></i> 仪表盘
            <i class="el-icon-setting" style="float: right"></i>
          </div>
          <el-card class="box-card">
            <p>XX报表<img src="../assets/img/u314.png" /></p>
          </el-card>
          <el-card class="box-card">
            <p>XX报表<img src="../assets/img/u319.png" /></p>
          </el-card>
          <el-card class="box-card">
            <p>XX报表<img src="../assets/img/u315.png" /></p>
          </el-card>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>
<style scoped>
.sec {
  padding: 6px 10px 10px 70px;
  background: rgb(251 251 251);
  font-size: 12px;
}
.secL {
  border: 1px solid rgb(245, 242, 242);
  background: white;
}
.secL i {
  color: #079cff;
}
.secL-1 {
  border-top: 3px solid rgb(245, 242, 242);
  border-bottom: 1px solid rgb(235, 232, 232);
  padding: 5px 0;
}
.secL-2 span {
  float: right;
}
.box {
  height: 160px;
}
.box div:nth-of-type(1) {
  margin-left: 0;
}
.box div {
  width: 90px;
  float: left;
  margin: 12px 10px;
}
.box p {
  width: 90px;
  text-align: center;
  background: #f1f3f6;
  border-left: 2px solid white;
  cursor: pointer;
  line-height: 22px;
  /* display: none; */
}
.box img {
  cursor: pointer;
  border: 2px solid white;
}
.box img:hover {
  border: 2px solid #079cff;
}
.mini {
  position: absolute;
  top: 116px;
  right: 352px;
}
.card {
  margin-top: 20px;
}
.card1 {
  height: 20px;
  line-height: 32px;
}
.lable-1 > div {
  line-height: 25px;
  float: left;
  margin-right: 25px;
}
.lable-1 > div:nth-of-type(3) {
  float: right;
}
.lable-2 {
  transform: scale(0.9);
  color: rgb(190, 190, 190);
}
.lable-3 {
  background: rgb(238 255 255);
  clear: both;
  margin-left: 65px;
  padding: 10px;
  height: 80px;
  line-height: 20px;
  border: 2px white solid;
}
.lable-3 > p:nth-of-type(1) {
  color: gray;
  padding-bottom: 5px;
}
.lable-3-1 > div {
  float: left;
  margin-right: 20px;
}
.lable-3-1 > div:nth-of-type(3) {
  float: right;
}
.lable-3-2 p:nth-of-type(2) {
  color: rgb(190, 190, 190);
}
.lable-4 {
  margin-top: 20px;
}
.lableAll {
  height: 500px;
  overflow-y: scroll;
}
.lableAll1 {
  height: 1200px;
}
.lable5 {
  border-top: 2px dotted #079cff;
}
.lable5 > div {
  width: 204px;
  display: inline-block;
  padding:6px 79px;
  /* border-right: 2px solid rgb(241, 238, 238); */
  margin-top: 15px;
}
.lable5 > div:nth-of-type(3) {
  border-right: none;
}
.lable5 > div:nth-of-type(6) {
  border-right: none;
}
.lable5-1 {
  line-height: 20px;
  text-align: center;
}
.lable5-1 > p:nth-of-type(1) img {
  width: 20px;
  margin-top: -10px;
}
.lable5-1 > p:nth-of-type(2) {
  transform: scale(0.85);
  color: gray;
}
.lable5-1 > p:nth-of-type(3) img {
  width: 207px;
}
.el-carousel__item h3 {
  font-size: 12px;
  opacity: 0.75;
  line-height: 20px;
  margin: 0;
}
.lable6 {
  background: white;
  border: 1px solid rgb(245, 242, 242);
  padding: 2px 10px;
}
.lable6 > span {
  float: left;
}
.aside {
  width: 365px !important;
  margin-right: -10px;
  padding: 0 5px;
}
.lable7 {
  height: 180px;
}
.lable7 > div {
  padding: 10px 10px 0 0;
  width: 177px;
  height: 85px;
}
.lable7 > div:nth-of-type(even) {
  padding-right: 0;
}
.lable8 {
  height: 710px;
  background: white;
  border: 1px solid rgb(245, 242, 242);
  padding: 5px;
}
.lable8 i {
  color: #079cff;
}
.lable8 .box-card {
  margin-top: 10px;
}
.lable8 p {
  padding: 5px;
}
.lable8 img {
  width: 320px;
  padding: 15px 5px;
}
</style>
<style lang="scss">
#index {
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0;
  }
  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0;
  }
  .el-radio-button--mini .el-radio-button__inner {
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 0;
  }
  .el-collapse-item__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    height: 26px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    border-bottom: 1.5px solid rgb(235, 232, 232);
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color 0.3s;
    outline: 0;
  }
  .el-collapse-item__content {
    padding-bottom: 5px;
    font-size: 12px;
    color: #303133;
    line-height: 1.769230769230769;
  }
  .el-tabs__nav-scroll {
    overflow: hidden;
    float: right;
  }
  .el-tabs__item {
    padding: 0 20px;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
  }
  .el-badge__content.is-dot {
    height: 6px;
    width: 6px;
    padding: 0;
    right: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
  .el-card__body {
    padding: 0;
  }
  .el-card {
    border: 1px solid rgb(245, 242, 242);
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
  }
  .el-tabs--border-card {
    background: #fff;
    height: 598px;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  }
}
</style>
<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      radio1: "周",
      radio2: "我",
      items: ["通知：开工大吉，新年批示。", "通知：关于2019年春节的放假安排"],
    };
  },
  components: {
    Header,
  },
};
</script>