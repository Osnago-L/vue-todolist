var app = new Vue({
    el: '#app',
    data: {
      input:"",
      active: false,
      curSection:0,
      section:[
        {
            text:"First Section",
            doitems:[
                {
                    text: "First do-item",
                    done: false
                }

            ],
        },    
      ],

    },
    methods:{
        addTask: function(){
            this.section[this.curSection].doitems.push({text:this.input,done:false})
        },
        addSection: function(){
            this.section.push({text:this.input,doitems:[]})
        },
        removeTask: function(itemI,sectionI){
            this.section[sectionI].doitems.splice(itemI,1);
        },
        removeSection: function(sectionI){
            this.section.splice(sectionI,1);
        },
        doneMark: function(itemI,sectionI){
            this.section[sectionI].doitems[itemI].done = this.section[sectionI].doitems[itemI].done  ? false : true;
        },
        isActive: function(){
           this.active = this.active ? false : true;
        },
    }
});