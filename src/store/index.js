import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PicTextList:[{
     picUrl:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
     textArray:[{data:"Welcome"},{data:"Use"},{data:"The"},{data:"OCRapplication"},{data:"欢迎"},{data:"使用"},{data:"OCR"},{data:"应用程序"},{data:"111"},{data:"222"} ]
    },],
    SingleText:[{Filename:"ocr.jpg",TextContent:"OCR文本识别",Condifence:"0.99"},],
    SingleInitial:true,
    RecIndex:0,
    Initial:true
  },
  mutations: {
    pushFormResult(state,payload){
      if(state.Initial){
        state.PicTextList.splice(0,1)
        state.PicTextList.push(payload.listItem)
        state.Initial=false
      }else{
      state.PicTextList.push(payload.listItem)
      }
      //console.log(state.PicTextList[1])
    },
    nextRecItem(state){
      if(state.RecIndex<state.PicTextList.length-1)
       state.RecIndex++;
    },
    lastRecItem(state){
        if(state.RecIndex>0)
        state.RecIndex--;
    },
    pushSingleResult(state,payload){
      if(state.SingleInitial){
        state.SingleText.splice(0,1)
        state.SingleText.push(payload.listItem)
        state.SingleInitial=false
      }else{
        state.SingleText.push(payload.listItem)
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
