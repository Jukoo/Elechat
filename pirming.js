
/**
 * The Core 
 * @NameSpace 
 */ 
module.exports = {

    /**
     * the default event used 
     */ 
    default_strup_evts  : [ 
        "ready" , 
        "close" ,
        "window-all-closed" 
    ] , 

    /**
     * puts_evts  push new event in the defaut_strup_evts 
     * @param   {array} - events - the event args will placed in array 
     */
    puts_evts (...evts) {
        
        for(let evt  of evts ) { 
            module.exports.defaut_strup_evts.push(evt)
        } 
    } , 

    /**
     * devDep  require Modules used to build the app 
     */ 
    devDep : {
    
        electron : require("electron") , 
        BWC      : require("./Bw.config") ,  
        path     : require("path"),
        url      : require("url")
    } , 
    

    /**
     * setImgLocation set  Image for the icon 
     * @params  {string} imgIcon - the Img of the icon 
     */ 
    setImgLocation (imgIcon) {
        if(!imgIcon) false  
        module.exports.devDep.BWC.MainWindow
        ["icon"]=`${__dirname}assets/img/imgIcon`
        
    } ,

    /**
     * getImgExt - check the img have right extension 
     * @param  {string} - image name 
     * @return {boolean}
     */ 
    getImgExt (img_format) {

            if (img_format)img_format = [...img_format.split(".")][1] 
            if(module.exports.devDep.BWC.icon_allowed_format.includes(img_format)) 
                return true  
            else 
                throw new Error("this extension is not allowed")
    }, 
    /**
     * On_Production 
     * @param {boolean}  - 
     */ 
    On_Production(boolArgs) {
        if(typeof boolArgs != "boolean" )  throw new Error("the args params should be an boolean") 
        process.env.NODE_ENV = boolArgs? "production" : "developement"
        
    } , 
    /**
     * Implement_Path2URI  set the path of the page view 
     * @param {object} -  
     */ 
    Implement_Path2URI (ObjConf) { 
        if (typeof ObjConf == "object"){
            ObjConf["pathname"]  = module.exports.devDep
                    .path.join(__dirname , "index.html")
            }else  {
              console.log(typeof ObjConf)  
            }
    }, 

    /**
     * auto_destructuring Namespace 
     * @param {Object} MainNamespace 
     * @return {array}  
     */ 
    Auto_set ({...MainNamespace}) {

        const Collection_node = new Set([]) ; 
        for (let  i in {...MainNamespace}) {
            Collection_node.add(MainNamespace[i])   
        }
        return  [...Collection_node]
    } , 

    /**
     * Event_xtrat load events
     * al module in the MainNameSpace 'll be laoded with the right key of event 
     * @param {object} - 
     */ 
    Event_xtrat (...subNameSpace) { 
        let {app} = module.exports.devDep.electron
       let { default_strup_evts}  = module.exports
       default_strup_evts.forEach(( node  , index) => {
           // console.log(default_strup_evts[index]) 
            console.log(subNameSpace[0][index])
            app.on(default_strup_evts[index],  subNameSpace[0][index])
        })
    } 
     
}
