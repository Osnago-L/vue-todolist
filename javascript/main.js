var app = new Vue({
    el: '#app',
    data: {
      input:"",
      curSection:0,
      section:[],
    },
    methods:{
        addTask: function(){
            this.section[this.curSection].doitems.push({text:this.input,done:false})
            this.input= ""
        },
        addSection: function(){
            this.section.push({active: false,text:this.input,doitems:[]})
            this.input= ""
        },
        removeTask: function(itemI,sectionI){
            this.section[sectionI].doitems.splice(itemI,1);
        },
        removeSection: function(sectionI){
            this.section.splice(sectionI,1); 
        },
        doneMark: function(itemI,sectionI){
            this.section[sectionI].doitems[itemI].done = !this.section[sectionI].doitems[itemI].done
        },
        isActive: function(sectionI){
           this.section[sectionI].active = !this.section[sectionI].active 
        },
    }
});